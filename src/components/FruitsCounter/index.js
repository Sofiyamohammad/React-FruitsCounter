import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}

  Mango = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  Banana = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{count}</span> mangoes{' '}
            <span className="count">{count}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruits-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mango-image"
                alt="mango"
              />
              <button
                type="button"
                className="eatmango-button"
                onClick={this.Mango}
              >
                Eat mango
              </button>
            </div>
            <div className="fruits-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="banana-image"
                alt="banana"
              />
              <button
                type="button"
                className="eatbanana-button"
                onClick={this.Banana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
