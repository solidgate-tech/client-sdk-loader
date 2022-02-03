import InitConfig from './InitConfig'
import UpdateConfig from './UpdateConfig'
import SdkMessage from './SdkMessage'

import MessageType from '../enums/MessageType'

export default interface ClientSdkInstance {
  init(config: InitConfig): Promise<void>
  update(config: UpdateConfig): Promise<void>
  on<T extends MessageType>(
    event: T,
    callback: (e: MessageEvent<SdkMessage[T]>) => void
  ): void
  unsubcribe(messageType: MessageType): void
  unsubscribeAll(): void
  submit(): void
}
