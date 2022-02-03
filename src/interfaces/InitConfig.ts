import FormType from '../enums/FormType'
import CardBrand from '../enums/CardBrand'
import SecureBrand from '../enums/SecureBrand'
import AdditionalField from '../enums/AdditionalField'

export default interface InitConfig {
  merchantData: {
    merchant: string
    signature: string
    paymentIntent: string
    version?: string
  }
  iframeParams?: Partial<{
    containerId: string
    width: string
  }>
  styles?: Record<string, unknown>
  formParams?: Partial<{
    enabled: false
    submitButtonText: string
    isCardHolderVisible: boolean
    headerText: string
    titleText: string
    formTypeClass: FormType
    isSolidLogoVisible: boolean
    cardBrands: CardBrand[]
    secureBrands: SecureBrand[]
    allowSubmit: boolean
    allowedAdditionalFields: AdditionalField[]
    'font-family': string
  }>
  googlePayButtonParams?: Partial<{
    enabled: false
    containerId: string
    color: string
    type: string
  }>
  applePayButtonParams?: Partial<{
    enabled: false
    containerId: string
    color: string
    type: string
  }>
}
