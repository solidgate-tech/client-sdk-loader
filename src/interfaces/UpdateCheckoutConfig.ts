export interface UpdateCheckoutLineItem {
  productPriceId: string
  quantity: number
  description?: string
}

export interface UpdateCheckoutDiscount {
  couponId?: string
  couponCode?: string
}

export interface UpdateCheckoutTrialPeriod {
  value: number
  unit: 'day' | 'week' | 'month'
}

export interface UpdateCheckoutTrial {
  type: 'free' | 'paid'
  period?: UpdateCheckoutTrialPeriod
  amount?: number
  settleInterval?: number
}

export interface UpdateCheckoutSubscriptionData {
  trial?: UpdateCheckoutTrial
  metadata?: Record<string, string>
  description?: string
}

export interface UpdateCheckoutConfig {
  lineItems: UpdateCheckoutLineItem[]
  discounts?: UpdateCheckoutDiscount[]
  subscriptionData?: UpdateCheckoutSubscriptionData
}
