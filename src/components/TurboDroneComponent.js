import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import{ addDeliveryStyle } from '../actions/delivery'

class TurboDroneComponent extends PureComponent {

  handleChange = (event) => {
    event.preventDefault()
    const deliveryStyle = this.refs.deliveryStyle.value
    this.props.addDeliveryStyle(deliveryStyle)
  }

  render() {
    return (
      <div>
        <h1>Delivery</h1>
        <form>
          <label>
            Choose your prevered delivery style!<br />
            <select ref="deliveryStyle" onChange={this.handleChange}>
              <option></option>
              <option value="1">Old fashioned delivery (no extra charge)</option>
              <option value="1.1">Turbo Drone delivery! (+10% cost)</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    delivery: state.delivery
  }
}

export default connect(mapStateToProps, { addDeliveryStyle })(TurboDroneComponent)
