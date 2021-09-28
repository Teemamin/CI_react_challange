import React,{useState,useEffect} from 'react'
import axios from 'axios'


const baseURL = 'https://jsonplaceholder.typicode.com/posts/'

function HTTPHooks() {
    const [posts,setPosts] = useState([])
    const [error,setError] = useState('')
    const [data,setData] = useState(null)


    useEffect(()=>{
        axios.get(baseURL)
        .then(res=>{
            Array.isArray(res.data)?
            setPosts(res.data):
            setPosts([res.data])
        })
        .catch(e=>setError(e.message))
    },[posts])

    const  handlePost = ()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title:'testing25',
            body: 'it works alright!',
            userId: 1635243,
        })
        .then(res=>setData(res.data))
    }

    return (
        <div>
            <div>
            <button onClick={handlePost}>Make a post</button>
                {
                    data ?
                    <div>
                        <h2>{data.title}</h2>
                        <p>{data.body}</p>
                        <p>{data.userId}</p>
                    </div>
                    : <h2>Please click the button above</h2>
                }
            </div>

                <h1>Posts</h1>
                {posts.length?
                    posts.map(post=>{
                    return <div key={post.id}><h3>{post.title}</h3> <p>{post.body}</p></div>
                    }
                    )
                    : <p>{error}</p>
            }
           
            </div>
    )
}

export default HTTPHooks
