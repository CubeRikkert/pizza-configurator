import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class PriceComponent extends PureComponent {



  render() {

    return (
      <div>
        <h1>Total Price:</h1>

        <h3>€{Number.parseFloat(this.props.totalPrice).toFixed(2)}</h3>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    totalPrice: state.price.totalPrice * state.price.delivery
  }
}

export default connect(mapStateToProps)(PriceComponent)
