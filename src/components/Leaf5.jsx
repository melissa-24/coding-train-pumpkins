import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Leaf5 = ({ myText }) => {
    const [key, setKey] = useState(1)

    const one = useSpring({
        from: { transform: 'translate(100px, -25px)'},
        to: { transform: 'translate(-175px, 300px)'},
        config: { duration: 22000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const two = useSpring({
        from: { transform: 'translate(75px, -50px)'},
        to: { transform: 'translate(-50, 300px)'},
        config: { duration: 22000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const three = useSpring({
        from: { transform: 'translate(50px, -75px)'},
        to: { transform: 'translate(-75px, 300px)'},
        config: { duration: 22000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const four = useSpring({
        from: { transform: 'translate(25px, -100px)'},
        to: { transform: 'translate(-25px, 300px)'},
        config: { duration: 22000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const five = useSpring({
        from: { transform: 'translate(0px, -25px)'},
        to: { transform: 'translate(-150px, 300px)'},
        config: { duration: 22000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const six = useSpring({
        from: { transform: 'translate(-25px, -50px)'},
        to: { transform: 'translate(-100px, 300px)'},
        config: { duration: 22000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const seven = useSpring({
        from: { transform: 'translate(-50px, -75px)'},
        to: { transform: 'translate(-125px, 300px)'},
        config: { duration: 22000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const eight = useSpring({
        from: { transform: 'translate(-75px, -100px)'},
        to: { transform: 'translate(100px, 300px)'},
        config: { duration: 22000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const nine = useSpring({
        from: { transform: 'translate(-100px, -25px)'},
        to: { transform: 'translate(50px, 300px)'},
        config: { duration: 22000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const ten = useSpring({
        from: { transform: 'translate(-125px, -50px)'},
        to: { transform: 'translate(25px, 300px)'},
        config: { duration: 22000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const eleven = useSpring({
        from: { transform: 'translate(-150px, -75px)'},
        to: { transform: 'translate(75px, 300px)'},
        config: { duration: 22000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const twelve = useSpring({
        from: { transform: 'translate(-175px, -100px)'},
        to: { transform: 'translate(0px, 300px)'},
        config: { duration: 22000 },
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
            <animated.div style={nine}>{myText}</animated.div>
            <animated.div style={ten}>{myText}</animated.div>
            <animated.div style={eleven}>{myText}</animated.div>
            <animated.div style={twelve}>{myText}</animated.div>
        </div>
    )
}

export default Leaf5