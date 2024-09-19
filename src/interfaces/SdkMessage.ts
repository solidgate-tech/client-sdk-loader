import MountedMessage from './messages/MountedMessage'
import ErrorMessage from './messages/ErrorMessage'
import FailMessage from './messages/FailMessage'
import OrderStatusMessage from './messages/OrderStatusMessage'
import ResizeMessage from './messages/ResizeMessage'
import SuccessMessage from './messages/SuccessMessage'
import SubmitMessage from './messages/SubmitMessage'
import InteractionMessage from './messages/InteractionMessage'
import CardMessage from './messages/CardMessage'
import VerifyMessage from './messages/VerifyMessage'
import RedirectMessage from './messages/RedirectMessage'
import CustomStylesAppendedMessage from './messages/CustomStylesAppendedMessage'
import PaymentDetailsMessage from './messages/PaymentDetailsMessage'

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
  [MessageType.Card]: CardMessage
  [MessageType.Verify]: VerifyMessage
  [MessageType.Redirect]: RedirectMessage
  [MessageType.CustomStylesAppended]: CustomStylesAppendedMessage
  [MessageType.PaymentDetails]: PaymentDetailsMessage
}

export default SdkMessage
