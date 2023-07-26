# Solid client SDK loader

## Installation

```
npm install --save @solidgate/client-sdk-loader
```

## Usage

```typescript
import { SDKLoader } from "@solidgate/client-sdk-loader"

/**
 * Configuration, as it described here
 * https://docs.solidgate.com/payments/integrate/payment-form/create-your-payment-form/
 */
const data = {
  merchantData: {
    merchant: '<<--YOUR MERCHANT ID-->>',
    signature: '<<--YOUR SIGNATURE OF THE REQUEST-->>',
    paymentIntent: '<<--YOUR PAYMENT INTENT-->>'
  }
}

async function init() {
  const sdk = await SDKLoader.load()
  const form = sdk.init(data)
}
```

## Development

Run tests
```
npm run test
```
