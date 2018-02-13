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
        <div>
          Show me a photo gallery!
        </div>
        <div>
          <img src={drStrangeJpg} className="pic"/>
          <p>This is a jpg file</p>
        </div>
        <div>
          <img src={hamtaroPng} className="pic" />
          <p>This is a png file</p>
        </div>
        <div>
          <img src={hulkGif} className="pic" />
          <p>This is a gif file</p>
        </div>
        <div>
          <img src={anchorSvg} className="pic" />
          <p>This is an svg file</p>
        </div>
      </div>
    );
  }
}

render(<Main />, document.getElementById('app'))