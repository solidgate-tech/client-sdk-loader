import Message from './Message'

import MessageType from '../../enums/MessageType'
import { CheckoutInvoicePreview } from '../CheckoutInvoicePreview'

export default interface InvoicePreviewMessage
  extends Message<MessageType.InvoicePreview> {
  invoicePreview: CheckoutInvoicePreview
}
