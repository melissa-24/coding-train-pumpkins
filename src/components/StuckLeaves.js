import React from 'react'
import './stuckleaves.css'

import First from '../images/First.png'
import Second from '../images/Second.png'
import Third from '../images/Third.png'
import Fourth from '../images/Fourth.png'
import Fifth from '../images/Fifth.png'
import Sixth from '../images/Sixth.png'

class StuckLeaves extends React.Component {
    render() {
        return (
            <>
            <img src={First} alt="" id='stuck1' className='stays' />
            <img src={Second} alt="" id='stuck2' className='stays' />
            <img src={Third} alt="" id='stuck3' className='stays' />
            <img src={Fourth} alt="" id='stuck4' className='stays' />
            <img src={Fifth} alt="" id='stuck5' className='stays' />
            <img src={Sixth} alt="" id='stuck6' className='stays' />
            <img src={Third} alt="" id='stuck9' className='stays' />
          </>
        )
    }
}

export default StuckLeaves