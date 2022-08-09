import { useState } from 'react';

const A = () => {

    const [ tent , setTent ] = useState('tent_closed');

    const handleTentOpen = () => {
        setTent('tent_open')
    }

    const handleTentClose = () => {
        setTent('tent_closed')
    }

    return (
        <div className='letter' id='A' onMouseOver={handleTentOpen} onMouseOut={handleTentClose}>
            <div className='tent' id='strings'></div>
            <div className='tent' id='airgap'></div>
            <div className='tent' id='outertent'></div>
            <div className='tent' id='outertent_trim'></div>
            <div id='innertent' className={`tent ${tent}`}></div>
        </div>
    )
}

export default A;