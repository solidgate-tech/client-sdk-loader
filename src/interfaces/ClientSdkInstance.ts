import InitConfig from './InitConfig'
import UpdateConfig from './UpdateConfig'
import SdkMessage from './SdkMessage'
import ApplyCouponPrices from './ApplyCouponPrices'

import MessageType from '../enums/MessageType'
import { ResignFormConfig, ResignRequest } from './ResignConfig'
import {
  WalletCardTypeEventName,
  WalletCardTypeSubscriber
} from './WalletCardType'

export default interface ClientSdkInstance {
  init(config: InitConfig): Promise<void>
  resign(
    request: ResignRequest,
    config?: ResignFormConfig
  ): Promise<ClientSdkInstance>
  update(config: UpdateConfig): Promise<void>
  on(event: WalletCardTypeEventName, subscriber: WalletCardTypeSubscriber): void
  on<T extends MessageType>(
    event: T,
    callback: (e: MessageEvent<SdkMessage[T]>) => void
  ): void
  unsubscribe(messageType: MessageType | WalletCardTypeEventName): void
  unsubscribeAll(): void
  submit(): void
  applyCoupon(couponCode: string): Promise<ApplyCouponPrices>
}
