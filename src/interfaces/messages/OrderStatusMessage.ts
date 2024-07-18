import Message from './Message'
import OrderStatus from '../OrderStatus'

import MessageType from '../../enums/MessageType'
import PayableEntity from '../../enums/PayableEntity'
import APMOrderStatus from '../APMOrderStatus'

export default interface OrderStatusMessage
  extends Message<MessageType.OrderStatus> {
  entity: PayableEntity
  response: OrderStatus | APMOrderStatus
}
