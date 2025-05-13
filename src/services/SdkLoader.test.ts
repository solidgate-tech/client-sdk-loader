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

  it('allows to initialize script with custom url', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SdkLoader = require('./SdkLoader').default

    SdkLoader.load('https://example.com/sdk.js')

    const script = document.getElementById(
      'solid-payment-form-source'
    ) as HTMLScriptElement

    expect(script.src).toEqual('https://example.com/sdk.js')
  })

  it('creates only one script after double initialization with different urls', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SdkLoader = require('./SdkLoader').default

    SdkLoader.load('https://example.com/sdk.js')
    SdkLoader.load('https://example.com/sdk_v2.js')

    const scripts = document.getElementsByTagName('script')

    expect(scripts.length).toEqual(1)
    expect(scripts[0].src).toEqual('https://example.com/sdk.js')
  })

  it('logs error if load called two times - without url and the with custom url', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SdkLoader = require('./SdkLoader').default

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

    SdkLoader.load()

    SdkLoader.load('https://example.com/sdk.js')

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        'SDK Initialization Error: A URL was provided for SDK initialization after a previous attempt without one.'
      )
    )

    consoleErrorSpy.mockRestore()
  })

  it('doesnt logs error if load called two times - with custom url and without url', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SdkLoader = require('./SdkLoader').default

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

    SdkLoader.load('https://example.com/sdk123.js')

    SdkLoader.load()

    expect(consoleErrorSpy).not.toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
  })

  it('uses default url when called two times - without url and with custom url', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SdkLoader = require('./SdkLoader').default
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

    SdkLoader.load()

    SdkLoader.load('https://example.com/sdk.js')

    const script = document.getElementById(
      'solid-payment-form-source'
    ) as HTMLScriptElement

    expect(script.src).toEqual('https://cdn.solidgate.com/js/solid-form.js')

    consoleErrorSpy.mockRestore()
  })

  it('uses custom url when called two times - with custom url and with empty url', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const SdkLoader = require('./SdkLoader').default

    SdkLoader.load('https://example.com/sdk.js')

    SdkLoader.load()

    const script = document.getElementById(
      'solid-payment-form-source'
    ) as HTMLScriptElement

    expect(script.src).toEqual('https://example.com/sdk.js')
  })
})
