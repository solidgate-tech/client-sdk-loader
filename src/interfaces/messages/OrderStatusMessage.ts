import Message from './Message'
import OrderStatus from '../OrderStatus'

import MessageType from '../../enums/MessageType'

export default interface OrderStatusMessage
  extends Message<MessageType.OrderStatus> {
  response: OrderStatus
}
