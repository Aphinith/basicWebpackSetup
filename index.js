import React, { Component } from 'react'
import { render } from 'react-dom'
import './src/style.scss'
import drStrangeJpg from './src/assets/drstrange.jpg'
import hamtaroPng from './src/assets/hamtaro.png'
import hulkGif from './src/assets/hulk.gif'
import anchorSvg from './src/assets/anchor.svg'

class Main extends Component {

  render() {
    return(
      <div>
        Show me a photo gallery!
        <img src={drStrangeJpg} className="pic"/>
        <img src={hamtaroPng} className="pic" />
        <img src={hulkGif} className="pic" />
        <img src={anchorSvg} className="pic" />
      </div>
    );
  }
}

render(<Main />, document.getElementById('app'))