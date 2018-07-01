import React, {PureComponent} from 'react'

class BaseComponent extends PureComponent {

  handleChange(event) {
    event.preventDefault()
  }



  render() {
    return (
      <div>
        <h1>Base</h1>

        <form onChange={this.handleChange}>
          <label>
            Pick your favorite base:<br />
            <select name="base" onChange={this.handleChange}>
              <option></option>
              <option value="20Cm">20cm NY Style € 6,45</option>
              <option value="25CM">25cm NY Style € 8,99</option>
              <option value="30CM">30cm NY Style € 11,49</option>
              <option value="35Cm">35cm NY Style € 13,49</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default BaseComponent
