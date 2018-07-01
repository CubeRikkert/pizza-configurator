export const SAUCE_CHOICE = 'SAUCE_CHOICE'

export const addSauce = (sauceType, saucePrice) => {
  return {
    type: 'SAUCE_CHOICE',
    payload: {
      sauceType,
      saucePrice
    }
  }
}
