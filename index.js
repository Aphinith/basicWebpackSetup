// import React, { Component } from 'react'
// import { render } from 'react-dom'
import './src/style.scss'
import drStrangeJpg from './src/assets/drstrange.jpg'
import hamtaroPng from './src/assets/hamtaro.png'
import hulkGif from './src/assets/hulk.gif'
import anchorSvg from './src/assets/anchor.svg'

function component() {
  const element1 = document.createElement('div');
  element1.innerHTML = "Show me a photo gallery!";

  const img1 = document.createElement('img');
  img1.src = drStrangeJpg;

  const img2 = document.createElement('img');
  img2.src = hamtaroPng;

  const img3 = document.createElement('img');
  img3.src = hulkGif

  const img4 = document.createElement('img');
  img4.src = anchorSvg;

  element1.appendChild(img1);
  element1.appendChild(img2);
  element1.appendChild(img3);
  element1.appendChild(img4);

  return element1;
}

document.body.appendChild(component());

// class Main extends Component {

//   render() {
//     return(
//       <div>
//         <div>
//           Show me a photo gallery!
//         </div>
//         <div>
//           <img src={drStrangeJpg} className="pic"/>
//           <p>This is a jpg file</p>
//         </div>
//         <div>
//           <img src={hamtaroPng} className="pic" />
//           <p>This is a png file</p>
//         </div>
//         <div>
//           <img src={hulkGif} className="pic" />
//           <p>This is a gif file</p>
//         </div>
//         <div>
//           <img src={anchorSvg} className="pic" />
//           <p>This is an svg file</p>
//         </div>
//       </div>
//     );
//   }
// }

// render(<Main />, document.body.appendChild(Main))