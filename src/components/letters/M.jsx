import {useState} from 'react';

const M = () => {
    
    const [ mountainState, setMountainState ] = useState(null);

    return (
        <div className="letter" id="M">
            <div className="mtn" id="mtn1"></div>
            <div className="mtn" id="mtn2"></div>
        </div>
    )
}

export default M;