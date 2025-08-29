export default interface ApplyCouponPrices {
  // initial product price
  productPrice: {
    amount: string
    currency: string
    currencyIcon: string
  }
  // product price with applied discount
  discountPrice: {
    amount: string
    currency: string
    currencyIcon: string
  }
  trialPrice?: {
    amount: string
    currency: string
    currencyIcon: string
  }
}
