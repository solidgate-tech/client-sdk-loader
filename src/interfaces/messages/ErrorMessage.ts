import Message from './Message'

import MessageType from '../../enums/MessageType'

export default interface ErrorMessage extends Message<MessageType.Error> {
  value: {
    name: 'ConnectionError' | 'InitPaymentError' | 'GatewayError'
    message: string
  }
  details?:
    | {
        code: '1.01' | '6.01'
        message: string
      }
    | {
        code: '2.01'
        message: {
          [key: string]: string
        }
      }
}
