import { useState } from 'react';

const A = () => {

    const [ tentState, setTentState ] = useState('closed');

    return (
        <div className="letter" id="A">
            <div className="tent" id="strings"></div>
            <div className="tent" id="airgap"></div>
            <div className="tent" id="outertent"></div>
            <div className="tent tent_closed" id="innertent"></div>
        </div>
    )
}

export default A;