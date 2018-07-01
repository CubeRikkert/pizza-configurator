import { SECOND_TOPPING_CHOICE } from '../actions/toppings'

export default function (state = {secondTopping: ''}, action) {
  switch (action.type) {
  case SECOND_TOPPING_CHOICE:
    return {
      ...state,
      secondTopping: action.payload.secondToppingType,
    }
  default:
    return state
  }
}
