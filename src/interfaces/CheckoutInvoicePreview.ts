export interface CheckoutInvoicePreviewAmounts {
  subtotal: string
  discount: string
  unitPrice?: string
  taxable?: string
  tax?: string
}

export interface CheckoutInvoicePreviewTax {
  categoryId: string
  mode: string
  rate: number
}

export interface CheckoutInvoicePreviewLineItem {
  amount: string
  quantity: number
  currency: string
  currencyIcon: string
  productPriceId: string
  productId: string
  amounts?: CheckoutInvoicePreviewAmounts
  tax?: CheckoutInvoicePreviewTax
}

export interface CheckoutInvoicePreview {
  total: string
  currency: string
  currencyIcon: string
  amounts?: CheckoutInvoicePreviewAmounts
  lineItems: CheckoutInvoicePreviewLineItem[]
}

export interface UpdateCheckoutResult {
  invoicePreview: CheckoutInvoicePreview
}
