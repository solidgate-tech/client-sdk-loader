**1.12.0**

Added **priceBreakdown.taxRate** float to **PaymentDetails** event

**1.11.1**

Fix incorrect build

**1.11.0**

**ApplePay** js integration (see [ApplePay](https://docs.solidgate.com/payments/integrate/payment-form/apple-pay/))

**PaymentDetails** event (see [PaymentDetails](https://docs.solidgate.com/payments/integrate/payment-form/form-events/#payment-details))

**1.10.1**

Added `paypalButtonParams` to the `InitConfig` interface to allow the PayPal button to be enabled and configured. See more: https://docs.solidgate.com/payments/integrate/payment-form/paypal-button/ 

***

**1.10.0**

Added PayPal support to the Payment Form

- Extend an existing SDK events with the `paypal` entity: `mounted`, `success`, `fail`, `submit`, `interaction`;
- Extended `orderStatus` with `entity: PayableEntity` and added the `APMOrderStatus` interface to the order status event's `response` property.
- Added the `APMOrderStatus` interface corresponding to APM payments. For more information, see: https://api-docs.solidgate.com/#tag/Alternative-payment-methods/operation/webhook-apm-order-status

***

**1.9.0**

SSR compatability

***

**1.8.1**
Update Order Status error interface:
 - `error.message: string` -> `error.messages: string[]`

***

**1.8.0**

Add new card brands to `InitConfig.formParams.cardBrands`:

- Rupay
- BC Card
- UnionPay
- Dankort
- GPN Card
- Troy
- Thai Payment Network
- MADA
- Bancontact
- Interac
- Bajaj

***

**1.7.0**

- Added **resign** form initialization method and corresponding types
- Updated ```UpdateConfig```  type to enable support for the partial form update

***

**1.6.2**

Added labels, placeholders types, fixed error type

***

**1.6.1**

Moved mirror repository to github, fix README.MD link to new documentation

***

**1.6.0**

Added  **Cartes Bancaires** card brand support

***

**1.5.1**

Removed **mir** card brand support

***

**1.5.0**

Added **formParams.buttonType** config param

You may use it to set **continue** button type
```typescript
import { FormButtonType } from '@solidgate/client-sdk-loader'

initConfig.formParams.buttonType = FormButtonType.Continue
```

***

**1.4.0**

Added **formParams.autoFocus** config param

***

**1.3.3**

Added license

***

**1.3.0**


- Added **AdditionalFields** enum
- Fixed types which controlling labels visibility (like **initConfig.formParams.cardNumberLabel**)
- Deprecated **initConfig.allowedAdditionalFields** usage
- Added **CardMessage** event

***

**1.2.0**

Added **CardHolder** as additional field

You may use it in order to restrict additional field visibility with only specified in config
```typescript
import { AddtitionalField } from '@solidgate/client-sdk-loader'

initConfig.allowedAdditionalFields = [AdditionalField.CardHolder, AddtitionalField.Pin]
```

