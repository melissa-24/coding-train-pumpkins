import React from 'react'
import './css/rnd1.css'

import First from '../images/First.png'
import Second from '../images/Second.png'
import Third from '../images/Third.png'
import Fourth from '../images/Fourth.png'
import Fifth from '../images/Fifth.png'
import Sixth from '../images/Sixth.png'

class StuckRnd1 extends React.Component {
    render() {
        return (
            <>
            <img src={First} alt="" id='stuck1' className='stays1' />
            <img src={Second} alt="" id='stuck2' className='stays1' />
            <img src={Third} alt="" id='stuck3' className='stays1' />
            <img src={Fourth} alt="" id='stuck4' className='stays1' />
            <img src={Fifth} alt="" id='stuck5' className='stays1' />
            <img src={Sixth} alt="" id='stuck6' className='stays1' />
          </>
        )
    }
}

export default StuckRnd1