import Message from './Message'

import MessageType from '../../enums/MessageType'
import PayableEntity from '../../enums/PayableEntity'

export default interface SubmitMessage extends Message<MessageType.Submit> {
  entity: PayableEntity
}
