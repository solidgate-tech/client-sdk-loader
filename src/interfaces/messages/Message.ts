import MessageType from '../../enums/MessageType'

export default interface Message<T extends MessageType> {
  type: T
}
