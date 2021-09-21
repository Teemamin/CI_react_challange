import React, { Component } from 'react'
import {savedPosts} from '../posts.json'
import Loader from './Loader'
import styles from './css/Content.module.css'
import loader from './css/Loader.module.css'

// console.log(savedPosts)

export class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: false,
            search : '',
            posts : savedPosts
        }
    }
    componentDidMount() {
        setTimeout(this.x,2000)
      }
    x = ()=>{
        return this.setState(prevState=>({isLoaded:!prevState.isLoaded}))
    }

    handleChange = (e)=>{
        let val =  e.target.value.toLowerCase()
        let filteredName = this.state.posts.filter(name=>name.name.toLocaleLowerCase().includes(val)
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
                      return <div className={styles.SearchItem} key={post.title}>
                          <h3>{post.title}</h3>
                          <p>{post.name}</p>
                          <img src={post.image} alt={post.name}/>
                          <p>{post.description}</p>
                      </div>
                  })}
              </div>
             : <Loader/> }
            </div>
        )
    }
}

export default Content
