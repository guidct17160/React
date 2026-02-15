import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Blog() {
    

    const [posts,setPosts] = useState([])
    const [page,setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const LIMIT = 5


    const fetchPosts = async(pageNumber) =>{
        setLoading(true)
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                params:{
                    _limit:LIMIT,
                    _page:pageNumber
                }
            })

            if(response.data.length > 0){
                setPosts(prev => [...prev, ...response.data])
                setHasMore(true)
            }else{
                setHasMore(false)
            }

        }catch(error){
            console.error("Error loading post",error)
        }
        setLoading(false)
    }


    useEffect(()=>{
        async function fetchData(){
            const postsData = await getPost()
                setData(postsData)
        }

        fetchData()
    },[])

    useEffect(()=>{
        fetchPosts(page)
    },[page])
    const handleLoadMore = ()=>{
        setPage(prev =>prev + 1)
    }

    console.log(posts)
  return (
    <div className='dark:bg-zinc-800 dark:text-white'>
        <section className='container mx-auto py-20'>
        <h2 className='text-5xl font-bold'>Blog</h2>
        {posts.map(post => (
            <div className='border border-gray-300 dark:bg-zinc-900 rounded-xl p-10 mt-10' key={post.id}>
                <h3 className='text-4xl font-bold'>{post.title}</h3>
                <p className='my-5'>{post.body}</p>
                <Link className='text-sky-300' to={`/blog/post/${post.id}`}>Read more</Link>
            </div>
        ))}
        {loading && <p className='mt-5'>Loading...</p> }

        {!loading && hasMore &&(
            <div className='my-10 text-center'>
                <button onClick={handleLoadMore} className='dark:text-black px-6 py-2 bg-sky-300 rounded-full cursor-pointer'>Load More</button>
            </div>
            
        )}

        {!hasMore && !loading &&(
            <p className='mt-10 text-center text-gray-400'>No more posts to load.</p>
        )}
      
    </section>
    </div>
    
  )
}

export default Blog
