import React,{useState,useEffect} from 'react'
import Post from '../../components/Post'
import Pagination from '../../components/Pagination'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'
import './Blogscreen.css'
const BlogScreen = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)
  useEffect(() => {
    async function fetchAllPosts() {
      try {
        let fetch_posts = await axios.get('/api/fetch_posts')
        if (loading) {
          const data = Array.from(fetch_posts.data)
          setLoading(false)
          setPosts(data)
        }
      } catch (err) {
        const msg = err.response ? err.response.data.message : err
      }
    }
    fetchAllPosts()
    return () => {
      setLoading(false)
    }
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div >
      <LinkContainer to="/addpost"><Button variant="bg-success" className="d-block addpostss mx-auto w-25 my-5">Add Post</Button></LinkContainer>
      <div className='posts'>
          
          {posts === null ? (
            <h2>Loading...</h2>
          ) : posts.length === 0 ? (
            <h2>No Posts Available</h2>
          ) : (
            <Post posts={currentPosts} loading={loading} />
          )}
          
          <div>
           <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            /> 
           </div>  
          
        </div>


    </div>
  )
}

export default BlogScreen;