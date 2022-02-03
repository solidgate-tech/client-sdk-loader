import ClientSdk from '../interfaces/ClientSdk'

declare global {
  interface Window {
    PaymentFormSdk?: ClientSdk
  }
}

describe('SdkLoader', () => {
  afterEach(() => {
    jest.resetModules()

    document.head.innerHTML = ''

    delete window.PaymentFormSdk
  })

  it('just returns sdk if already loaded', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SdkLoader = require('./SdkLoader').default

    window.PaymentFormSdk = Symbol() as unknown as ClientSdk

    expect(await SdkLoader.load()).toEqual(window.PaymentFormSdk)
  })

  it('creates script with proper src', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SdkLoader = require('./SdkLoader').default

    SdkLoader.load()

    const script = document.getElementById(
      'solid-payment-form-source'
    ) as HTMLScriptElement

    expect(script.src).toEqual('https://cdn.solidgate.com/js/solid-form.js')
    expect(script.async).toBeTruthy()
  })

  it('resolves PaymentFormSdk after script loading', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SdkLoader = require('./SdkLoader').default

    const promise = SdkLoader.load()

    const script = document.getElementById(
      'solid-payment-form-source'
    ) as HTMLScriptElement

    window.PaymentFormSdk = Symbol() as unknown as ClientSdk

    if (script.onload) {
      script.onload(new Event('load'))
    }

    expect(await promise).toEqual(window.PaymentFormSdk)
  })

  it('rejects load attempt after script loading error', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SdkLoader = require('./SdkLoader').default

    const promise = SdkLoader.load()

    const script = document.getElementById(
      'solid-payment-form-source'
    ) as HTMLScriptElement

    const error = new Event('load')

    if (script.onerror) {
      script.onerror(error)
    }

    expect(promise).rejects.toEqual(error)
  })

  it('creates only one script after double initialization', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SdkLoader = require('./SdkLoader').default

    SdkLoader.load()
    SdkLoader.load()

    const scripts = document.getElementsByTagName('script')

    expect(scripts.length).toEqual(1)
  })
})
