import React, {PureComponent} from 'react'

class TurboDroneComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Delivery</h1>
        <form>
          <label>
            Turbo Drone Delivery!
            <input
              name="turbo-drone"
              type="checkbox"
              checked=""
              onChange={this.handleChange}/>
          </label>
        </form>
        <h4>(+10% pizza price)</h4>
      </div>
    )
  }
}

export default TurboDroneComponent
