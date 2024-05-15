import Transaction from './Transaction'

export default interface OrderStatus {
  order?: {
    amount?: number
    currency?: string
    order_id?: string
    descriptor?: string
    processing_amount?: number
    processing_currency?: string
    refunded_amount?: number
    status: string
    subscription_id?: string
    marketing_amount?: number
    marketing_currency?: string
  }
  transactions?: Record<string, Transaction>
  transaction?: Transaction
  error?: {
    code: string
    messages: string[]
    recommended_message_for_user?: string
  }
  three_ds?: {
    eci: string
  }
  redirect_url?: string
  verify_url?: string
}
