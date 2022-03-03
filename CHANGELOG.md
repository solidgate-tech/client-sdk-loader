1.1.0

***

Added **CardHolder** as additional field

You may use it in order to restrict additional field visibility with only specified in config
```typescript
import {AddtitionalField} from '@solidgate/client-sdk-loader'

initConfig.allowedAdditionalFields = [AdditionalField.CardHolder, AddtitionalField.Pin]
```

