import ClientSdk from '../interfaces/ClientSdk'

declare global {
  interface Window {
    PaymentFormSdk?: ClientSdk
  }
}

export default class SdkLoader {
  static #CloudfrontSrc = 'https://cdn.solidgate.com/js/solid-form.js'

  static #loadAttempt: Promise<ClientSdk> | null = null
  static #previousAttemptUrl: string | null = null

  static load (sdkUrl?: string): Promise<ClientSdk | null> {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      return Promise.resolve(null)
    }

    const isPreviousCallWithoutUrl =
      this.#previousAttemptUrl === this.#CloudfrontSrc
    if (sdkUrl && isPreviousCallWithoutUrl) {
      console.error(
        `SDK Initialization Error: A URL was provided for SDK initialization after a previous attempt without one.
        The SDK will proceed using the initial configuration without a URL.`
      )
    }

    if (window.PaymentFormSdk) {
      return Promise.resolve(window.PaymentFormSdk)
    }

    if (this.#loadAttempt) {
      return this.#loadAttempt
    }

    this.#previousAttemptUrl = sdkUrl || this.#CloudfrontSrc

    const script = document.createElement('script')
    script.async = true

    script.src = sdkUrl || this.#CloudfrontSrc
    script.id = 'solid-payment-form-source'
    document.head.appendChild(script)

    this.#loadAttempt = new Promise<ClientSdk>((resolve, reject) => {
      try {
        script.onerror = (e) => {
          this.#loadAttempt = null
          reject(e)
        }

        script.onload = () => {
          resolve(window.PaymentFormSdk as ClientSdk)
        }
      } catch (e) {
        reject(e)
      }
    })

    return this.#loadAttempt
  }
}
