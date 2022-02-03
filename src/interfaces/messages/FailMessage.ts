import Message from './Message'
import OrderShort from '../OrderShort'

import MessageType from '../../enums/MessageType'
import PayableEntity from '../../enums/PayableEntity'

export default interface FailMessage extends Message<MessageType.Fail> {
  code?: string
  message?: string
  order?: OrderShort
  entity: PayableEntity
}
