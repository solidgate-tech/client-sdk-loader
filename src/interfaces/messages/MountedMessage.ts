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
    | 'upi'
    | 'pix-qr'
    | 'bizum'
    | 'blik'
    | 'blik-recurring'
    | 'mbway'
    | 'cashapp'
    | 'pix-automatico'
    | 'clicktopay'
    | 'klarna-network'
    | 'gcash'
    | 'satispay'
}
