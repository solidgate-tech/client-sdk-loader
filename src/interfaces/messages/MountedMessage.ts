import Message from './Message'

import MessageType from '../../enums/MessageType'

export default interface MountedMessage extends Message<MessageType.Mounted> {
  entity:
    | 'applebtn'
    | 'googlebtn'
    | 'form'
    | 'resign'
    | 'paypal'
    | 'pix'
    | 'bizum'
    | 'blik'
}
