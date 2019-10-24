import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Controlled extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    }
  }

  handleInputChangeBad = (event, name) => {
    this.setState({
      [name]: event.target.value
    })
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(`${this.state.firstName} ${this.state.lastName}`)
  };

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="firstName">
        姓
      </label>
      <input id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} type="text"/>
      <br/>
      <label htmlFor="lastName">
        名
      </label>
      <input id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} type="text"/>
      <button type="submit">提 交</button>
    </form>
  )
}

export default Controlled