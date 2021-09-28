import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data : null
             
        }
    }
    handlePost = ()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title:'testing2',
            body: 'it works alright!',
            userId: 16243,
        })
        .then(res=>this.setState({data:res.data}))
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePost}>Make a post</button>
                {
                    this.state.data ?
                    <div>
                        <h2>{this.state.data.title}</h2>
                        <p>{this.state.data.body}</p>
                        <p>{this.state.data.userId}</p>
                    </div>
                    : <h2>Please click the button above</h2>
                }
            </div>
        )
    }
}

export default HTTPPost
