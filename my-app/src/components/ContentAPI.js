import React, { Component } from 'react'
import {savedPosts} from '../posts.json'
import Loader from './Loader'
import API_KEY from '../secrets'
import axios from 'axios'
import styles from './css/Content.module.css'
import loader from './css/Loader.module.css'


const API_images = `https://pixabay.com/api/?key=${API_KEY}`

export class ContentAPI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: false,
            search : '',
            posts : savedPosts
        }
    }
    componentDidMount() {
        axios.get(API_images)
         .then(res=> this.setState({posts:res.data.hits, isLoaded:!this.state.isLoaded}))
      }
    

    handleChange = (e)=>{
        let val =  e.target.value.toLowerCase()
        let filteredName = this.state.posts.filter(name=>name.tags.toLocaleLowerCase().includes(val)
        )
        this.setState({posts:filteredName, search:val})
  
      }

    render() {
        return (
            <div className={styles.Content}>
                <form>
                    <input type='text' name='search'value={this.state.search}
                     placeholder='Search' onChange={this.handleChange}/>
                </form>
                <p>found: {this.state.posts.length}</p>
              <div className={styles.TitleBar}>
                  <h1>My Photos</h1>
              </div>
              {this.state.isLoaded ? 
              <div className={styles.SearchResults}>
                  {this.state.posts.map(post=>{
                      return <div className={styles.SearchItem} key={post.id}>
                          <h3>{post.tags}</h3>
                          <p>{post.user}</p>
                          <img src={post.webformatURL} alt={post.webformatURL}/>
                          <p> Likes: {post.likes}</p>
                      </div>
                  })}
              </div>
             : <Loader/> }
            </div>
        )
    }
}

export default ContentAPI
