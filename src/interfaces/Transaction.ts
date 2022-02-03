export default interface Transaction {
  descriptor?: string
  amount: number
  card_token?: {
    token: string
  }
  card: {
    bank?: string
    bin: number
    brand?: string
    card_exp_month: string
    card_exp_year: number
    card_holder?: string
    card_type?: string
    country?: string
    number?: string
    card_token?: {
      token: string
    }
  }
  created_at: string
  currency: string
  id: string
  operation: string
  status: string
  updated_at: string
  refund_reason?: string
  refund_reason_code?: string
  marketing_amount?: number
  marketing_currency?: string
  finance_fee_amount?: string | number
  finance_fee_currency?: string | number
  billing_details?: {
    address?: string
    city?: string
    country?: string
    state?: string
    zip?: string
  }
  error?: {
    code: string
    message: string
    recommended_message_for_user?: string
  }
  finance?: {
    amount: number
    currency: string
    internal?: {
      amount: number
      currency: string
    }
    external?: {
      amount: number
      currency: string
    }
  }
}
