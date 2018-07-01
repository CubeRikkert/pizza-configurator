import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { addSauce } from '../actions/sauce'

class SauceComponent extends PureComponent {

  handleChange = (event) => {
    event.preventDefault()
    const sauce = this.refs.sauceChoice.value.split(",")
    const sauceType = sauce[0]
    const saucePrice = sauce[1]
    this.props.addSauce(sauceType, saucePrice)
  }

  render() {
    return (
      <div>
        <h1>Sauce</h1>
        <form onChange={this.handleChange}>
          <label>
            Pick your favorite sauce:<br />
            <select ref="sauceChoice" onChange={this.handleChange}>
              <option></option>
              <option value="white-sauce,0">White sauce</option>
              <option value="red-sauce,0">Red sauce</option>
              <option value="double-red,1">Double red sauce € 1,00</option>
              <option value="sauce-mix,1.5">Mix it up € 1,50</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    sauce: state.sauce
  }
}

export default connect(mapStateToProps, { addSauce })(SauceComponent)
