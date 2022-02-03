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
 * https://dev.solidgate.com/developers/documentation/solid-payment-form
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
