import Message from './Message'

import FieldName from '../../enums/FieldName'
import AdditionalFieldName from '../../enums/AdditionalFieldName'
import InteractionType from '../../enums/InteractionType'
import InteractionTargetType from '../../enums/InteractionTargetType'
import MessageType from '../../enums/MessageType'

interface ControlState {
  isValid: boolean
  isTouched: boolean
}

export default interface InteractionMessage
  extends Message<MessageType.Interaction> {
  target: {
    type: InteractionTargetType
    name: FieldName | AdditionalFieldName | 'submit' | 'googlePay' | 'applePay'
    interaction: InteractionType
  }
  cardForm: {
    fields: Record<
      FieldName.CardCvv | FieldName.CardNumber | FieldName.CardExpiryDate,
      ControlState
    > &
      Partial<Record<AdditionalFieldName | 'cardHolder', ControlState>>
  } & ControlState
}
