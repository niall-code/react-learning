import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoaded: false,
      isLoggedIn: true
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? 'Data loaded' : 'Loading...'}</h1>

        {this.state.isLoggedIn ? (
          <div>
            <p>Welcome to the site. Please complete the steps below.</p>
            <ol>
              <li>Confirm your email</li>
              <li>Complete your profile</li>
              <li>Subscribe to the newsletter</li>
            </ol>
          </div>
        ) : (
          <div>
            <p>Please sign in.</p>
          </div>
        )}

      </div>
    )
  }
}

export default ConditionalRenderingClass
