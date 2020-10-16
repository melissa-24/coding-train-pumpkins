import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Leaf1 = ({ myText }) => {
    const [key, setKey] = useState(1)

    const one = useSpring({
        from: { transform: 'translate(10px, -200px)'},
        to: { transform: 'translate(-275px, 450px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const two = useSpring({
        from: { transform: 'translate(-125px, -250px)'},
        to: { transform: 'translate(25px, 500px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const three = useSpring({
        from: { transform: 'translate(-350px, -75px)'},
        to: { transform: 'translate(-75px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const four = useSpring({
        from: { transform: 'translate(325px, -50px)'},
        to: { transform: 'translate(-125px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const five = useSpring({
        from: { transform: 'translate(0px, -350px)'},
        to: { transform: 'translate(450px, 350px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const six = useSpring({
        from: { transform: 'translate(250px, -350px)'},
        to: { transform: 'translate(-400px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const seven = useSpring({
        from: { transform: 'translate(-250px, -350px)'},
        to: { transform: 'translate(-125px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const eight = useSpring({
        from: { transform: 'translate(75px, -350px)'},
        to: { transform: 'translate(100px, 450px)'},
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

export default Leaf1