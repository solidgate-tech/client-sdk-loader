import Message from './Message'
import OrderShort from '../OrderShort'

import MessageType from '../../enums/MessageType'
import PayableEntity from '../../enums/PayableEntity'

export default interface ProcessingMessage
  extends Message<MessageType.Processing> {
  order: OrderShort
  entity: PayableEntity
}
