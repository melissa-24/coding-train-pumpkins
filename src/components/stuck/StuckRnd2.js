import React from 'react'
import './css/rnd2.css'

import First from '../images/First.png'
import Second from '../images/Second.png'
import Third from '../images/Third.png'
import Fourth from '../images/Fourth.png'
import Fifth from '../images/Fifth.png'
import Sixth from '../images/Sixth.png'

class StuckRnd2 extends React.Component {
    render() {
        return (
            <>
            <img src={First} alt="" id='stuck7' className='stays2' />
            <img src={Second} alt="" id='stuck8' className='stays2' />
            <img src={Third} alt="" id='stuck9' className='stays2' />
            <img src={Fourth} alt="" id='stuck10' className='stays2' />
            <img src={Fifth} alt="" id='stuck11' className='stays2' />
            <img src={Sixth} alt="" id='stuck12' className='stays2' />
          </>
        )
    }
}

export default StuckRnd2