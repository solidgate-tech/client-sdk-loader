import APMTransaction from './APMTransaction'

export default interface APMOrderStatus {
  order?: {
    amount?: number
    currency?: string
    order_id?: string
    status?: string
    method?: string
    processing_amount?: number
    processing_currency?: string
    customer_email?: string
    ip_address?: string
    order_description?: string
    created_at?: string
    updated_at?: string
    product_id?: string
    token?: string
    subscription_id?: string
  }
  error?: {
    code: string
    messages?: string[]
    recommended_message_for_user?: string
  }
  transactions?: APMTransaction[]
}
