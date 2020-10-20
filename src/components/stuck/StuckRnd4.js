import React from 'react'
import './css/rnd4.css'

import First from '../images/First.png'
import Second from '../images/Second.png'
import Third from '../images/Third.png'
import Fourth from '../images/Fourth.png'
import Fifth from '../images/Fifth.png'
import Sixth from '../images/Sixth.png'

class StuckRnd4 extends React.Component {
    render() {
        return (
            <>
            <img src={First} alt="" id='stuck19' className='stays4' />
            <img src={Second} alt="" id='stuck20' className='stays4' />
            <img src={Third} alt="" id='stuck21' className='stays4' />
            <img src={Fourth} alt="" id='stuck22' className='stays4' />
            <img src={Fifth} alt="" id='stuck23' className='stays4' />
            <img src={Sixth} alt="" id='stuck24' className='stays4' />
          </>
        )
    }
}

export default StuckRnd4