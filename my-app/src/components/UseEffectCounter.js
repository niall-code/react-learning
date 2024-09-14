import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    // "Side effect" of another hook function
    useEffect(() => {
        document.title = count;
        // Array of the only properties to watch for changes
    }, [count]);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
        </div>
    )
}

export default UseEffectCounter