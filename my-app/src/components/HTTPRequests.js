import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequests extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      error: null,
    }
  }

  componentDidMount() {
    // Can add /number to end of GET url
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        this.setState({
          // If only one post, array-ify it
          posts: Array.isArray(response.data)
            ? response.data
            : [response.data]
        })
        // Catch errors, such as non-existent post
      }).catch(error => {
        this.setState({
          error: error.message
        })
      })
  }

  render() {
    const posts = this.state.posts;
    return (
      <div>
        <h2>Posts:</h2>
        {
          posts.length ? (
            posts.map(post => (
              <div key={post.id}>
                <h2>{post.id}. {post.title}</h2>
                <h4>By User ID {post.userId}</h4>
                <p>{post.body}</p>
                <hr />
              </div>
            ))
          ) : (
              // Two responses, for caught error or other,
              // e.g., non-array (before code accounted for)
              this.state.error
                ? <p>{this.state.error}</p>
                : <h4>Loading posts ...</h4>
            )
        }
      </div>
    )
  }
}

export default HTTPRequests