import Message from './Message'

import MessageType from '../../enums/MessageType'

export default interface CardMessage extends Message<MessageType.Card> {
  card: {
    brand: string
    bin: string
    cardType: string
    bank: string
  }
}
