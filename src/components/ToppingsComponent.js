import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { addFirstTopping, addSecondTopping, addThirdTopping } from '../actions/toppings'

class ToppingsComponent extends PureComponent {

  handleFirstChange = (event) => {
    event.preventDefault()
    const firstTopping = this.refs.firstToppingChoice.value.split(",")
    const firstToppingType = firstTopping[0]
    const firstToppingPrice = firstTopping[1]
    this.props.addFirstTopping(firstToppingType, firstToppingPrice)
  }

  handleSecondChange = (event) => {
    event.preventDefault()
    const secondTopping = this.refs.secondToppingChoice.value.split(",")
    const secondToppingType = secondTopping[0]
    const secondToppingPrice = secondTopping[1]
    this.props.addSecondTopping(secondToppingType, secondToppingPrice)
  }

  handleThirdChange = (event) => {
    event.preventDefault()
    const thirdTopping = this.refs.thirdToppingChoice.value.split(",")
    const thirdToppingType = thirdTopping[0]
    const thirdToppingPrice = thirdTopping[1]
    this.props.addThirdTopping(thirdToppingType, thirdToppingPrice)
  }

  render() {
    return (
      <div>
        <h1>Toppings</h1>
        <form onChange={this.handleFirstChange}>
          <label>
            Pick your first topping:<br />
            <select ref="firstToppingChoice" onChange={this.handleFirstChange}>
              <option></option>
              <option value="pineapple,0.5">Pineapple</option>
              <option value="corn,0.5">Corn</option>
              <option value="olives,0.5">Green olives</option>
              <option value="union,0.5">Red union</option>
              <option value="spinach,0.5">Spinach</option>
              <option value="tomatoes,0.5">Cherry tomatoes</option>
              <option value="chicken,0.5">Chicken</option>
            </select>
          </label>
        </form>
        <br />
        <form onChange={this.handleSecondChange}>
          <label>
            Pick your second topping:<br />
            <select ref="secondToppingChoice" onChange={this.handleSecondChange}>
              <option></option>
              <option value="pineapple,0.5">Pineapple</option>
              <option value="corn,0.5">Corn</option>
              <option value="olives,0.5">Green olives</option>
              <option value="union,0.5">Red union</option>
              <option value="spinach,0.5">Spinach</option>
              <option value="tomatoes,0.5">Cherry tomatoes</option>
              <option value="chicken,0.5">Chicken</option>
            </select>
          </label>
        </form>
        <br />
        <form onChange={this.handleThirdChange}>
          <label>
            Pick your third topping:<br />
            <select ref="thirdToppingChoice" onChange={this.handleThirdChange}>
              <option></option>
              <option value="pineapple,0.5">Pineapple</option>
              <option value="corn,0.5">Corn</option>
              <option value="olives,0.5">Green olives</option>
              <option value="union,0.5">Red union</option>
              <option value="spinach,0.5">Spinach</option>
              <option value="tomatoes,0.5">Cherry tomatoes</option>
              <option value="chicken,0.5">Chicken</option>
            </select>
          </label>
        </form>
        <br />
        <h4>Toppings are optional and € 0,50 each</h4>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    toppings: state.toppings
  }
}

export default connect(mapStateToProps, { addFirstTopping, addSecondTopping, addThirdTopping })(ToppingsComponent)
