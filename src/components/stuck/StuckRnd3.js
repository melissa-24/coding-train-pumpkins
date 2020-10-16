import React from 'react'
import './css/rnd3.css'

import First from '../images/First.png'
import Second from '../images/Second.png'
import Third from '../images/Third.png'
import Fourth from '../images/Fourth.png'
import Fifth from '../images/Fifth.png'
import Sixth from '../images/Sixth.png'

class StuckRnd3 extends React.Component {
    render() {
        return (
            <>
            <img src={First} alt="" id='stuck13' className='stays3' />
            <img src={Second} alt="" id='stuck14' className='stays3' />
            <img src={Third} alt="" id='stuck15' className='stays3' />
            <img src={Fourth} alt="" id='stuck16' className='stays3' />
            <img src={Fifth} alt="" id='stuck17' className='stays3' />
            <img src={Sixth} alt="" id='stuck18' className='stays3' />
          </>
        )
    }
}

export default StuckRnd3