import Message from './Message'

import MessageType from '../../enums/MessageType'
import PriceBreakdown from '../PriceBreakdown'

export default interface PaymentDetailsMessage
  extends Message<MessageType.PaymentDetails> {
  payment: {
    priceBreakdown: PriceBreakdown
  }
}
