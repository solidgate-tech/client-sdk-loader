import FormType from '../enums/FormType'
import CardBrand from '../enums/CardBrand'
import SecureBrand from '../enums/SecureBrand'
import FormButtonType from '../enums/FormButtonType'
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
      autoFocus: boolean
      submitButtonText: string
      isCardHolderVisible: boolean
      buttonType: FormButtonType
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
      zipLabel: string
      emailLabel: string
      zipCodeLabel: string
      cardNumberPlaceholder: string
      cardCvvPlaceholder: string
      cardExpiryDatePlaceholder: string
      zipPlaceholder: string
      emailPlaceholder: string
      zipCodePlaceholder: string
    } & Record<`${AdditionalFieldName}Label`, string> &
      Record<`${AdditionalFieldName}Placeholder`, string>
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
