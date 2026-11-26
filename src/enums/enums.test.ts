import AdditionalFieldName from './AdditionalFieldName'
import CardBrand from './CardBrand'
import CardBrandIconStyle from './CardBrandIconStyle'
import FieldName from './FieldName'
import FormButtonType from './FormButtonType'
import FormType from './FormType'
import InteractionTargetType from './InteractionTargetType'
import InteractionType from './InteractionType'
import MessageType from './MessageType'
import PayableEntity from './PayableEntity'
import ResignFieldName from './ResignFieldName'
import SecureBrand from './SecureBrand'

const ASCII_ONLY = /^[\x20-\x7E]*$/

const enums: Record<string, Record<string, string | number>> = {
  AdditionalFieldName,
  CardBrand,
  CardBrandIconStyle,
  FieldName,
  FormButtonType,
  FormType,
  InteractionTargetType,
  InteractionType,
  MessageType,
  PayableEntity,
  ResignFieldName,
  SecureBrand
}

describe('enums', () => {
  // Merchants compare these values with what the payment form sends, so a
  // look-alike character (e.g. Cyrillic U+0421 instead of a Latin "C")
  // silently breaks the comparison.
  it.each(Object.entries(enums))('%s has ASCII-only values', (_, values) => {
    const nonAscii = Object.values(values).filter(
      (value) => typeof value === 'string' && !ASCII_ONLY.test(value)
    )

    expect(nonAscii).toEqual([])
  })

  it('spells zipCode in ASCII', () => {
    expect(AdditionalFieldName.ZipCode).toBe('zipCode')
  })
})
