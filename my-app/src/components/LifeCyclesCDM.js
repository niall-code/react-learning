import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: 'loading'
        }
    }

    // change data's value after 3 seconds
    getData() {
        setTimeout(() => {
            this.setState({data: 'loaded'})
        }, 3000)
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM