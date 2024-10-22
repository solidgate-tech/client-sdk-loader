import CardBrandIconStyle from '../enums/CardBrandIconStyle'

type ResignFormAppearance = {
  autoFocus: false
  submitButtonText: string
  allowSubmit: boolean
  googleFontLink: string
  resignCvvLabel: string
  resignCvvPlaceholder: string
  hideCvvNumbers: boolean
  cardBrandIconStyle: CardBrandIconStyle
}

export type ResignRequest = {
  merchant: string
  signature: string
  resignIntent: string
}

export type ResignFormConfig = {
  container?: {
    id?: string
    width?: string
  }
  appearance?: Partial<ResignFormAppearance>
  styles?: Record<string, unknown>
}
