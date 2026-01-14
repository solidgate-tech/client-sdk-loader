import Message from './Message'

import FieldName from '../../enums/FieldName'
import AdditionalFieldName from '../../enums/AdditionalFieldName'
import InteractionType from '../../enums/InteractionType'
import InteractionTargetType from '../../enums/InteractionTargetType'
import MessageType from '../../enums/MessageType'
import ResignFieldName from '../../enums/ResignFieldName'

interface ControlState {
  isValid: boolean
  isTouched: boolean
}

type InteractionMessageFormState =
  | {
      cardForm: {
        fields: Record<
          FieldName.CardCvv | FieldName.CardNumber | FieldName.CardExpiryDate,
          ControlState
        > &
          Partial<Record<AdditionalFieldName | 'cardHolder', ControlState>>
      } & ControlState
    }
  | {
      resignForm: {
        fields: Record<ResignFieldName, ControlState>
      } & ControlState
    }

type InteractionMessage = Message<MessageType.Interaction> & {
  target: {
    type: InteractionTargetType
    name:
      | FieldName
      | ResignFieldName
      | AdditionalFieldName
      | 'submit'
      | 'googlePay'
      | 'applePay'
      | 'paypal'
      | 'pix'
      | 'bizum'
      | 'blik'
    interaction: InteractionType
  }
} & InteractionMessageFormState

export default InteractionMessage
