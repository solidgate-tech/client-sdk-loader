import InitConfig from './InitConfig'

export default interface UpdateConfig {
  partialIntent?: string
  signature?: string
  styles?: NonNullable<InitConfig['styles']>
  formParams?: Omit<NonNullable<InitConfig['formParams']>, 'enabled'>
  applePayButtonParams?: NonNullable<
    Omit<
      NonNullable<InitConfig['applePayButtonParams']>,
      'enabled' | 'containerId'
    >
  >
}
