
import React, { Component } from 'react'
import LifeCyclesCWUTracker from './LifeCyclesCWUTracker'

export class LifeCyclesCWU extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: true
        }
    }

    toggleDisplay = () => {
        // Set to opposite of current
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    render() {
        return (
            // If visible...
            <div>
                {this.state.visible && <LifeCyclesCWUTracker />}
                <button onClick={this.toggleDisplay}>Toggle Display</button>
            </div>
        )
    }
}

export default LifeCyclesCWU
