import './src/style.scss'
import deadPoolJpeg from './src/assets/deadpool.jpeg'
import drStrangeJpg from './src/assets/drstrange.jpg'
import hamtaroPng from './src/assets/hamtaro.png'
import hulkGif from './src/assets/hulk.gif'
import anchorSvg from './src/assets/anchor.svg'

function component() {
  const element1 = document.createElement('div');
  element1.innerHTML = "Show me a photo gallery!";

  const img0 = document.createElement('img');
  img0.src = deadPoolJpeg;

  const img1 = document.createElement('img');
  img1.src = drStrangeJpg;

  const img2 = document.createElement('img');
  img2.src = hamtaroPng;

  const img3 = document.createElement('img');
  img3.src = hulkGif

  const img4 = document.createElement('img');
  img4.src = anchorSvg;

  element1.appendChild(img0);
  element1.appendChild(img1);
  element1.appendChild(img2);
  element1.appendChild(img3);
  element1.appendChild(img4);

  return element1;
}

document.body.appendChild(component());