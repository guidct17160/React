import React,{useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

function Post() {
    const [post ,setPost] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        async function fetchPost(){
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                setPost(response.data)
            }catch(error){
                console.error("Error fetch post",error)
            }
        }
        fetchPost()
    },[])
  return (
    <div className='dark:bg-zinc-800 dark:text-white h-full'>
        <div className='container mx-auto py-20'>
        {post ? (
            <div>
                <Link className='dark:bg-zinc-600 dark:text-neutral-300 hover:dark:bg-zinc-400 hover:dark:text-neutral-700 hover:bg-zinc-200 bg-gray-300 px-5 py-2 rounded-full mb-5 inline-block'to="/blog">Go Back</Link>
                <h2 className='text-4xl font-bold'>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ) : (
            <p>Loanding post...</p>
        )}
      
    </div>
    </div>
  )
}

export default Post
