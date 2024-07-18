export default interface APMTransaction {
  status?: string
  method?: string
  amount?: string
  currency?: string
  type?: string
  id?: string
  created_at?: string
  refund_reason?: string
  refund_reason_code?: string
  payer_details?: {
    payer_email?: string
    invoice_id?: string
  }
}
