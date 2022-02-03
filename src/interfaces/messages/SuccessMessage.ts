import Message from './Message'
import OrderShort from '../OrderShort'

import MessageType from '../../enums/MessageType'
import PayableEntity from '../../enums/PayableEntity'

export default interface SuccessMessage extends Message<MessageType.Success> {
  order: OrderShort
  entity: PayableEntity
}
