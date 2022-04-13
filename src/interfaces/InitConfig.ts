import FormType from '../enums/FormType'
import CardBrand from '../enums/CardBrand'
import SecureBrand from '../enums/SecureBrand'
import AdditionalFieldName from '../enums/AdditionalFieldName'

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
  formParams?: Partial<
    {
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
      googleFontLink: string
      cardNumberLabel: string
      cardCvvLabel: string
      cardExpiryDateLabel: string
    } & Record<`${AdditionalFieldName}Label`, string>
  >
  googlePayButtonParams?: Partial<{
    allowedAuthMethods:
      | ['PAN_ONLY', 'CRYPTOGRAM_3DS']
      | ['PAN_ONLY']
      | ['CRYPTOGRAM_3DS']
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
