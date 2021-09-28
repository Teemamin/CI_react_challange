import React, { Component } from 'react'
import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/posts/'

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             error : ''
        }
    }
    componentDidMount(){
        axios.get(baseURL)
        .then(res=>{
            Array.isArray(res.data)?
            this.setState({posts:res.data}):
            this.setState({posts:[res.data]})
        })
        .catch(e=>this.setState({error:e.message}))
    }
    
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {this.state.posts.length?
                    this.state.posts.map(post=>{
                    return <div><h3>{post.title}</h3> <p>{post.body}</p></div>
                    }
                    )
                    : <p>{this.state.error}</p>
            }
            </div>
        )
    }
}

export default HTTPRequests
