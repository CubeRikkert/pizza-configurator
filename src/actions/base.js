export const BASE_CHOICE = 'BASE_CHOICE'

export const addBase = (baseSize, basePrice) => {
  return {
    type: 'BASE_CHOICE',
    payload: {
      baseSize,
      basePrice
    }
  }
}
