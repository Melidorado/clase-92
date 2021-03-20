import React, { useState } from 'react';
import './Reset.scss';

const Reset = () => {
    const [resetClicks, setReset] = useState(0)
    const handleClick = () => {
        setReset(0)
        console.log(resetClicks)
    }
    return(
        <button className="reset-button" onClick={handleClick}>
            Reset All
        </button>
    )
}

export default Reset;