import { BASE_CHOICE } from '../actions/base'
import { SAUCE_CHOICE } from '../actions/sauce'
import { FIRST_TOPPING_CHOICE } from '../actions/toppings'
import { SECOND_TOPPING_CHOICE } from '../actions/toppings'
import { THIRD_TOPPING_CHOICE } from '../actions/toppings'
import { DELIVERY_STYLE } from '../actions/delivery'

const initialPrice = {
  basePrice: 0,
  saucePrice: 0,
  firstToppingPrice: 0,
  secondToppingPrice: 0,
  thirdToppingPrice: 0,
  totalPrice: 0,
  delivery: 1
}

const getTotalPrice = (basePrice, saucePrice, firstToppingPrice, secondToppingPrice, thirdToppingPrice) => {
  const fixedNumbers = [basePrice, saucePrice, firstToppingPrice, secondToppingPrice, thirdToppingPrice].map(price => parseFloat(price))
  const sum = fixedNumbers.reduce((a, b) => a + b, 0)
  return sum
}

export default function (state = initialPrice, action) {
  switch (action.type) {
  case BASE_CHOICE:
    return {
      ...state,
      basePrice: action.payload.basePrice,
      totalPrice: getTotalPrice(action.payload.basePrice, state.saucePrice, state.firstToppingPrice, state.secondToppingPrice, state.thirdToppingPrice)
    }
  case SAUCE_CHOICE:
    return {
      ...state,
      saucePrice: action.payload.saucePrice,
      totalPrice: getTotalPrice(state.basePrice, action.payload.saucePrice, state.firstToppingPrice, state.secondToppingPrice, state.thirdToppingPrice)
    }
  case FIRST_TOPPING_CHOICE:
    return {
      ...state,
      firstToppingPrice: action.payload.firstToppingPrice,
      totalPrice: getTotalPrice(state.basePrice, state.saucePrice, action.payload.firstToppingPrice, state.secondToppingPrice, state.thirdToppingPrice)
    }
  case SECOND_TOPPING_CHOICE:
    return {
      ...state,
      secondToppingPrice: action.payload.secondToppingPrice,
      totalPrice: getTotalPrice(state.basePrice, state.saucePrice, state.firstToppingPrice, action.payload.secondToppingPrice, state.thirdToppingPrice)
    }
  case THIRD_TOPPING_CHOICE:
    return {
      ...state,
      thirdToppingPrice: action.payload.thirdToppingPrice,
      totalPrice: getTotalPrice(state.basePrice, state.saucePrice, state.firstToppingPrice, state.secondToppingPrice, action.payload.thirdToppingPrice)
    }
  case DELIVERY_STYLE:
    return {
      ...state,
      delivery: action.payload.deliveryStyle
    }
  default:
    return state
  }
}
