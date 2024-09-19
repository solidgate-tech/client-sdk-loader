export default interface PriceBreakdown {
  productPrice: {
    amount: string
    currency: string
    currencyIcon: string
  }
  discountPrice?: {
    amount: string
    currency: string
    currencyIcon: string
  }
  trialPrice?: {
    amount: string
    currency: string
    currencyIcon: string
  }
  price: {
    source: 'productPrice' | 'discountPrice' | 'trialPrice'
    amount: string
    taxAmount: string
    taxableAmount: string
    currency: string
    currencyIcon: string
  }
}
