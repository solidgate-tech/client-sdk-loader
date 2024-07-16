**1.9.0**

SSR compatability

***

**1.8.1**
Update Order Status error interface:
 - `error.message: string` -> `error.messages: string[]`

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

