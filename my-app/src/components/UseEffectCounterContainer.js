import React, {useState} from 'react'
import UseEffectCounter from './UseEffectCounter';

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            {/* Toggle display true/false */}
            <button onClick={ () => {
                setDisplay(!display)
            }}>
                Toggle Display
            </button>

            {/* Render IF display is true */}
            {display && <UseEffectCounter />}
        </div>
    )
}

export default UseEffectCounterContainer