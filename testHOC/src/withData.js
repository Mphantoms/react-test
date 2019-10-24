import React, {Component} from 'react'

import getJSON from './get-json'

const withData = URL => RawComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      }
    }

    componentDidMount() {
      const endpoint =
        typeof URL === 'function'
          ? URL(this.props)
          : URL;
      getJSON(endpoint).then(
        data => this.setState({data})
      )
    }

    render() {
      return <RawComponent {...this.props} {...this.state}/>
    }
  }
};

export default withData