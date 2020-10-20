import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Leaf4 = ({ myText }) => {
    const [key, setKey] = useState(1)

    const one = useSpring({
        from: { transform: 'translate(100px, -425px)'},
        to: { transform: 'translate(-175px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const two = useSpring({
        from: { transform: 'translate(75px, -450px)'},
        to: { transform: 'translate(-50, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const three = useSpring({
        from: { transform: 'translate(50px, -475px)'},
        to: { transform: 'translate(-75px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const four = useSpring({
        from: { transform: 'translate(25px, -400px)'},
        to: { transform: 'translate(-25px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const five = useSpring({
        from: { transform: 'translate(0px, -425px)'},
        to: { transform: 'translate(-150px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const six = useSpring({
        from: { transform: 'translate(-25px, -450px)'},
        to: { transform: 'translate(-100px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const seven = useSpring({
        from: { transform: 'translate(-50px, -475px)'},
        to: { transform: 'translate(-125px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const eight = useSpring({
        from: { transform: 'translate(-75px, -400px)'},
        to: { transform: 'translate(100px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })

    return (
        <div key={key} className='text'>
            <animated.div style={one}>{myText}</animated.div>
            <animated.div style={two}>{myText}</animated.div>
            <animated.div style={three}>{myText}</animated.div>
            <animated.div style={four}>{myText}</animated.div>
            <animated.div style={five}>{myText}</animated.div>
            <animated.div style={six}>{myText}</animated.div>
            <animated.div style={seven}>{myText}</animated.div>
            <animated.div style={eight}>{myText}</animated.div>
        </div>
    )
}

export default Leaf4