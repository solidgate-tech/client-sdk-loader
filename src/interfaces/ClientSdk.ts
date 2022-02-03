import InitConfig from './InitConfig'
import ClientSdkInstance from './ClientSdkInstance'

export default interface ClientSdk {
  init(config: InitConfig): ClientSdkInstance
  destroy(): void
}
