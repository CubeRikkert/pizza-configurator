export const FIRST_TOPPING_CHOICE = 'FIRST_TOPPING_CHOICE'
export const SECOND_TOPPING_CHOICE = 'SECOND_TOPPING_CHOICE'
export const THIRD_TOPPING_CHOICE = 'THIRD_TOPPING_CHOICE'

export const addFirstTopping = (firstToppingType, firstToppingPrice) => {
  return {
    type: 'FIRST_TOPPING_CHOICE',
    payload: {
      firstToppingType,
      firstToppingPrice
    }
  }
}

export const addSecondTopping = (secondToppingType, secondToppingPrice) => {
  return {
    type: 'SECOND_TOPPING_CHOICE',
    payload: {
      secondToppingType,
      secondToppingPrice
    }
  }
}

export const addThirdTopping = (thirdToppingType, thirdToppingPrice) => {
  return {
    type: 'THIRD_TOPPING_CHOICE',
    payload: {
      thirdToppingType,
      thirdToppingPrice
    }
  }
}
