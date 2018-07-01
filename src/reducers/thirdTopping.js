import { THIRD_TOPPING_CHOICE } from '../actions/toppings'

export default function (state = {thirdTopping: ''}, action) {
  switch (action.type) {
  case THIRD_TOPPING_CHOICE:
    return {
      ...state,
      thirdTopping: action.payload.thirdToppingType,
    }
  default:
    return state
  }
}
