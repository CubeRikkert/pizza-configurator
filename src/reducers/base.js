import { BASE_CHOICE } from '../actions/base'

export default function (state = {baseSize: ''}, action) {
  switch (action.type) {
  case BASE_CHOICE:
    return {
      ...state,
      baseSize: action.payload.baseSize,
    }
  default:
    return state
  }
}
