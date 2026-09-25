import Message from './Message'

import MessageType from '../../enums/MessageType'

export default interface CardMessage extends Message<MessageType.Card> {
  card: {
    brand: string
    bin: string
    last4: string
    cardType: string
    bank: string
    binCountry: string
    cardCategory: string
  }
}
