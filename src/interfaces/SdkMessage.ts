import MountedMessage from './messages/MountedMessage'
import ErrorMessage from './messages/ErrorMessage'
import FailMessage from './messages/FailMessage'
import OrderStatusMessage from './messages/OrderStatusMessage'
import ResizeMessage from './messages/ResizeMessage'
import SuccessMessage from './messages/SuccessMessage'
import Message from './messages/Message'
import SubmitMessage from './messages/SubmitMessage'
import InteractionMessage from "./messages/InteractionMessage"

import MessageType from '../enums/MessageType'

interface SdkMessage {
  [MessageType.Error]: ErrorMessage
  [MessageType.Fail]: FailMessage
  [MessageType.Mounted]: MountedMessage
  [MessageType.OrderStatus]: OrderStatusMessage
  [MessageType.Resize]: ResizeMessage
  [MessageType.Success]: SuccessMessage
  [MessageType.Submit]: SubmitMessage
  [MessageType.Interaction]: InteractionMessage
  [MessageType.Verify]: Message<MessageType.Verify>
  [MessageType.Redirect]: Message<MessageType.Redirect>
  [MessageType.CustomStylesAppended]: Message<MessageType.CustomStylesAppended>
}

export default SdkMessage
