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

