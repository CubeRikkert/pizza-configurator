import React, {PureComponent} from 'react'

class ToppingsComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Toppings</h1>
        <form>
          <label>
            Pineapple
            <input
              name="Pineapple"
              type="checkbox"
              checked=""
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Corn
            <input
              name="Corn"
              type="checkbox"
              checked=""
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Olives (green)
            <input
              name="Olives (green)"
              type="checkbox"
              checked=""
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Red union
            <input
              name="Red union"
              type="checkbox"
              checked=""
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Spinach
            <input
              name="Spinach"
              type="checkbox"
              checked=""
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Cherry tomatoes
            <input
              name="Cherry tomatoes"
              type="checkbox"
              checked=""
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Chicken
            <input
              name="Chicken"
              type="checkbox"
              checked=""
              onChange={this.handleChange}/>
          </label>
          <br />
        </form>
        <h4>(max. 3 toppings, € 0,50 per topping)</h4>
      </div>
    )
  }
}

export default ToppingsComponent
