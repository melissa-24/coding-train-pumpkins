import React from 'react'

import './App.css'
import First from './images/First.png'
import Second from './images/Second.png'
import Third from './images/Third.png'
import Fourth from './images/Fourth.png'
import Fifth from './images/Fifth.png'
import Sixth from './images/Sixth.png'

import PumpTwo from './images/pumpkin2.png'
import PumpThree from './images/pumpkin3.png'

import Leaf1 from './components/Leaf1'
import Leaf2 from './components/Leaf2'
import Leaf3 from './components/Leaf3'
import Leaf4 from './components/Leaf4'
import Leaf5 from './components/Leaf5'
import Leaf6 from './components/Leaf6'
import StuckLeaves from './components/StuckLeaves'

class App extends React.Component {
  render() {
    return (
      <>
      <h2>Hello World</h2>
      <div className='scene'>
      <div id="fall-container">
        <div className='leaves'>
          <Leaf1 myText={<img src={First} alt="" id='leaf1' />} />
          <Leaf2 myText={<img src={Second} alt="" id='leaf2' />} />
          {/* <Leaf3 myText={<img src={Third} alt="" id='leaf3' />} /> */}
          {/* <Leaf4 myText={<img src={Fourth} alt="" id='leaf4' />} /> */}
          {/* <Leaf5 myText={<img src={Fifth} alt="" id='leaf5' />} /> */}
          {/* <Leaf6 myText={<img src={Sixth} alt="" id='leaf6' />} /> */}
          {/* <StuckLeaves /> */}
        </div>
      </div>
      <div className="pumpkins">
        <img src={PumpTwo} alt="" />
        <img src={PumpThree} alt="" />
      </div>
      </div>
      </>
    )
  }
}

export default App;