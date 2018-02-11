import React, { Component } from 'react'
import { render } from 'react-dom'

class Main extends Component {

  render() {
    return(
      <div>
        Show me a photo gallery!
      </div>
    );
  }
}

render(<Main />, document.getElementById('app'))