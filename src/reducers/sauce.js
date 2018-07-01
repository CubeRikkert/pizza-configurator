import { SAUCE_CHOICE } from '../actions/sauce'

export default function (state = {sauce: ''}, action) {
  switch (action.type) {
  case SAUCE_CHOICE:
    return {
      ...state,
      sauce: action.payload.sauceType,
    }
  default:
    return state
  }
}
