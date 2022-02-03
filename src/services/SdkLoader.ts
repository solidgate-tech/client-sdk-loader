import ClientSdk from '../interfaces/ClientSdk'

declare global {
  interface Window {
    PaymentFormSdk?: ClientSdk
  }
}

export default class SdkLoader {
  static #CloudfrontSrc = 'https://cdn.solidgate.com/js/solid-form.js'

  static #loadAttempt: Promise<ClientSdk> | null = null

  static load (): Promise<ClientSdk> {
    if (window.PaymentFormSdk) {
      return Promise.resolve(window.PaymentFormSdk)
    }

    if (this.#loadAttempt) {
      return this.#loadAttempt
    }

    this.#loadAttempt = new Promise<ClientSdk>((resolve, reject) => {
      try {
        const script = document.createElement('script')
        script.async = true

        script.src = this.#CloudfrontSrc
        script.id = 'solid-payment-form-source'

        script.onerror = e => {
          this.#loadAttempt = null
          reject(e)
        }

        script.onload = () => {
          resolve(window.PaymentFormSdk as ClientSdk)
        }

        document.head.appendChild(script)
      } catch (e) {
        reject(e)
      }
    })

    return this.#loadAttempt
  }
}
