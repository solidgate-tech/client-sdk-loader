import InitConfig from './InitConfig'
import ClientSdkInstance from './ClientSdkInstance'
import { ResignFormConfig, ResignRequest } from './ResignConfig'

export default interface ClientSdk {
  init(config: InitConfig): ClientSdkInstance
  resign(
    request: ResignRequest,
    config?: ResignFormConfig
  ): Promise<ClientSdkInstance>
  destroy(): void
}
