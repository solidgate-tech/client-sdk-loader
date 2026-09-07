export type WalletCardTypeEventName = 'walletCardType'

export type WalletCardTypeWallet = 'applePay' | 'googlePay'

export type WalletCardTypeFunding = 'credit' | 'debit' | 'prepaid' | 'unknown'

export interface WalletCardTypeCard {
  type: WalletCardTypeFunding
  brand?: string
  last4?: string
}

export interface WalletCardTypeEventData {
  wallet: WalletCardTypeWallet
  card: WalletCardTypeCard
}

export interface WalletCardTypeEvent {
  data: WalletCardTypeEventData
}

export type WalletCardTypeSideEffect = () => Promise<unknown>

export type WalletCardTypeSubscriber = (
  event: WalletCardTypeEvent,
  pauseUntil: (sideEffect: WalletCardTypeSideEffect) => void
) => void
