// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onClickFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="title">Show/Hide</h1>
          <div className="show-hide-card">
            <button
              type="button"
              className="show-firstName"
              onClick={this.onClickFirstName}
            >
              Show/Hide FirstName
            </button>
            {isFirstName && <p className="name">Joe</p>}
            <button
              type="button"
              className="show-lastName"
              onClick={this.onClickLastName}
            >
              Show/Hide LastName
            </button>
            {isLastName && <p className="last-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
