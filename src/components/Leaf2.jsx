import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Leaf2 = ({ myText }) => {
    const [key, setKey] = useState(1)

    const one = useSpring({
        from: { transform: 'translate(100px, -450px)'},
        to: { transform: 'translate(-175px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const two = useSpring({
        from: { transform: 'translate(-75px, -450px)'},
        to: { transform: 'translate(-150, 450px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const three = useSpring({
        from: { transform: 'translate(150px, -450px)'},
        to: { transform: 'translate(-75px, 450px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const four = useSpring({
        from: { transform: 'translate(-225px, -450px)'},
        to: { transform: 'translate(425px, 425px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const five = useSpring({
        from: { transform: 'translate(0px, -425px)'},
        to: { transform: 'translate(350px, 450px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const six = useSpring({
        from: { transform: 'translate(425px, -450px)'},
        to: { transform: 'translate(-300px, 400px)'},
        config: { duration: 15000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })
    const seven = useSpring({
        from: { transform: 'translate(-400px, 450px)'},
        to: { transform: 'translate(-125px, 450px)'},
        config: { duration: 15000 },
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
            {/* <animated.div style={eight}>{myText}</animated.div> */}
            {/* <animated.div style={nine}>{myText}</animated.div> */}
            {/* <animated.div style={ten}>{myText}</animated.div> */}
            {/* <animated.div style={eleven}>{myText}</animated.div> */}
            {/* <animated.div style={twelve}>{myText}</animated.div> */}
        </div>
    )
}

export default Leaf2