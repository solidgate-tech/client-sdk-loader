import Message from './Message'

import MessageType from '../../enums/MessageType'

export default interface ResizeMessage extends Message<MessageType.Resize> {
  height: number
  width: number
}
