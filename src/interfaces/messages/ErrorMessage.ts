import Message from './Message'

import MessageType from '../../enums/MessageType'

export default interface ErrorMessage extends Message<MessageType.Error> {
  value: {
    code?: string
    message?: string | string[]
  }
}
