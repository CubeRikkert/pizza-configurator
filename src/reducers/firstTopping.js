import { FIRST_TOPPING_CHOICE } from '../actions/toppings'

export default function (state = {firstTopping: ''}, action) {
  switch (action.type) {
  case FIRST_TOPPING_CHOICE:
    return {
      ...state,
      firstTopping: action.payload.firstToppingType,
    }
  default:
    return state
  }
}
