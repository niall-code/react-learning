import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        document.title = count;
        // Array of the only properties to watch for changes
    }, [count]);

    useEffect(() => {
        console.log('Creating timer');
        const interval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000);
        // Remove interval when parent toggles it off
        return () => {
            console.log('cleaning up!');
            clearInterval(interval);
        }
        // Empty array to not repeat or crash (timer begins only once)
    }, []);

    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter