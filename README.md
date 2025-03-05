# Solidgate Client SDK Loader

This repository is wrapper for the Solidgate Client Software Development Kit (SDK).

It supports rendering payment forms and resign forms, including custom container elements for <a href="https://docs.solidgate.com/payments/integrate/payment-form/google-pay-button/" target="_blank">Google Pay</a>, <a href="https://docs.solidgate.com/payments/integrate/payment-form/apple-pay-button/" target="_blank">Apple Pay</a>, or <a href="https://docs.solidgate.com/payments/integrate/payment-form/paypal-button/" target="_blank">PayPal</a> buttons.

Check our
* <a href="https://docs.solidgate.com/" target="_blank">Payment guide</a> to understand business value better
* <a href="https://api-docs.solidgate.com/" target="_blank">API Reference</a> to find more examples of usage

## Structure

<table style="width: 100%; background: transparent;">
  <colgroup>
    <col style="width: 50%;">
    <col style="width: 50%;">
  </colgroup>
  <tr>
    <th>SDK contains</th>
    <th>Table of contents</th>
  </tr>
  <tr>
    <td>
      <code>src</code> - source code<br>
      <code>.husky/code> - pre-commit hooks<br>
      <code>package.json</code> – project metadata and dependency definitions<br>
    </td>
    <td>
      <a href="https://github.com/solidgate-tech/client-sdk-loader?tab=readme-ov-file#installation">Installation</a><br>
      <a href="https://github.com/solidgate-tech/client-sdk-loader?tab=readme-ov-file#usage">Usage</a><br>
      <a href="https://github.com/solidgate-tech/client-sdk-loader?tab=readme-ov-file#development">Development</a><br>
    </td>
  </tr>
</table>

<br>

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

Build:
```
npm run build
```

Test
```
npm run test
```
