import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

/**
 * This file and its child demonstrate how a parent's state can be altered by the child,
 * but it is rarely good practice. A better way would be to make the child file stateful
 * and include the signin functionality there, perhaps not requiring parent at all!
*/

export class MethodsAsPropsParent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: false
    }
  }

  // handleSignIn = () => {
  //   this.setState({isLoggedIn: true});
  // };

  // handleSignOut = () => {
  //   this.setState({isLoggedIn: false});
  // };

  toggleIsLoggedIn = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div>
        <MethodsAsPropsChild
          isLoggedIn={this.state.isLoggedIn}
          // handleSignIn={this.handleSignIn}
          // handleSignOut={this.handleSignOut}
          toggleIsLoggedIn={this.toggleIsLoggedIn}
        />
      </div>
    )
  }
}

export default MethodsAsPropsParent
