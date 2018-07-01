import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { addBase } from '../actions/base'


class BaseComponent extends PureComponent {

  handleChange = (event) => {
    event.preventDefault()
    const base = this.refs.baseChoice.value.split(",")
    const baseSize = base[0]
    const basePrice = base[1]
    this.props.addBase(baseSize, basePrice)
  }

  render() {
    return (
      <div>
        <h1>Base</h1>
        <form onChange={this.handleChange}>
          <label>
            Pick your favorite base:<br />
            <select ref="baseChoice" onChange={this.handleChange}>
              <option></option>
              <option value="20Cm,6.45">20cm NY Style € 6,45</option>
              <option value="25CM,8.99">25cm NY Style € 8,99</option>
              <option value="30CM,11.49">30cm NY Style € 11,49</option>
              <option value="35Cm,13.49">35cm NY Style € 13,49</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    base: state.base
  }
}

export default connect(mapStateToProps, { addBase })(BaseComponent)
