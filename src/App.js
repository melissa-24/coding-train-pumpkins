import React from 'react'

import './App.css'
import First from './components/images/First.png'
import Second from './components/images/Second.png'
import Third from './components/images/Third.png'
import Fourth from './components/images/Fourth.png'
import Fifth from './components/images/Fifth.png'
import Sixth from './components/images/Sixth.png'

import PumpTwo from './components/images/pumpkin2.png'
import PumpThree from './components/images/pumpkin3.png'

import Leaf1 from './components/Leaf1'
import Leaf2 from './components/Leaf2'
import Leaf3 from './components/Leaf3'
import Leaf4 from './components/Leaf4'
import Leaf5 from './components/Leaf5'
import Leaf6 from './components/Leaf6'
import StuckRnd1 from './components/stuck/StuckRnd1'
import StuckRnd2 from './components/stuck/StuckRnd2'
import StuckRnd3 from './components/stuck/StuckRnd3'
import StuckRnd4 from './components/stuck/StuckRnd4'

class App extends React.Component {
  render() {
    return (
      <>
      <h2>Fall</h2>
      <div className='scene'>
      <div id="fall-container">
        <div className='leaves'>
          <Leaf1 myText={<img src={First} alt="" id='leaf1' />} />
          <Leaf2 myText={<img src={Second} alt="" id='leaf2' />} />
          {/* <Leaf3 myText={<img src={Third} alt="" id='leaf3' />} /> */}
          <Leaf4 myText={<img src={Fourth} alt="" id='leaf4' />} />
          {/* <Leaf5 myText={<img src={Fifth} alt="" id='leaf5' />} /> */}
          {/* <Leaf6 myText={<img src={Sixth} alt="" id='leaf6' />} /> */}
          {/* <StuckRnd1 /> */}
          {/* <StuckRnd2 /> */}
          {/* <StuckRnd3 /> */}
          {/* <StuckRnd4 /> */}
        </div>
      </div>
      <div className="pumpkins">
        <img src={PumpTwo} alt="" />
        <img src={PumpThree} alt="" />
        <img src={PumpTwo} alt="" />
      </div>
      </div>
      </>
    )
  }
}

export default App;