import React, {PureComponent} from 'react'

class SauceComponent extends PureComponent {

  handleChange(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Sauce</h1>

        <form onChange={this.handleChange}>
          <label>
            Pick your favorite sauce:<br />
            <select name="sauce" onChange={this.handleChange}>
              <option></option>
              <option value="white-sauce">White sauce</option>
              <option value="red-sauce">Red sauce</option>
              <option value="double-red">Double red sauce € 1,00</option>
              <option value="sauce-mix">Mix it up € 1,50</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default SauceComponent
