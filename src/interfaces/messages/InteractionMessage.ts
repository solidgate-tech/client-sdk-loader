import Message from "./Message"

import FieldName from '../../enums/FieldName'
import InteractionType from '../../enums/InteractionType'
import InteractionTargetType from '../../enums/InteractionTargetType'
import MessageType from "../../enums/MessageType"

export default interface InteractionMessage
  extends Message<MessageType.Interaction> {
  target: {
    type: InteractionTargetType
    name: FieldName | 'submit' | 'googlePay' | 'applePay'
    interaction: InteractionType
  }
  cardForm: {
    fields: Partial<
      Record<
        FieldName,
        {
          isValid: boolean
          isTouched: boolean
        }
      >
    >
    isValid: boolean
    isTouched: boolean
  }
}
