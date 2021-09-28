import React,{useState,useEffect} from 'react'
import {savedPosts} from '../posts.json'
import Loader from './Loader'
import styles from './css/Content.module.css'

function ContentHooks() {
    const[isLoaded, setisLoaded] = useState(false)
    const[search, setsearch] = useState('')
    const[posts, setposts] = useState(savedPosts)

    useEffect(()=>{
        setTimeout(x,2000)
        
    },[])
    const  x = ()=>{
        setisLoaded(isLoaded=>!isLoaded)
        setposts(savedPosts)
    }

    const handleChange = (e)=>{
        let val =  e.target.value.toLowerCase()
        let filteredName = posts.filter(name=>name.name.toLocaleLowerCase().includes(val)
        )
        setposts(filteredName)
        setsearch(val)
  
      }

    return (
        <div className={styles.Content}>
        <form>
            <input type='text' name='search'value={search}
             placeholder='Search' onChange={handleChange}/>
        </form>
        <p>found: {posts.length}</p>
      <div className={styles.TitleBar}>
          <h1>My Photos</h1>
      </div>
      {isLoaded ? 
      <div className={styles.SearchResults}>
          {posts.map(post=>{
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

export default ContentHooks
