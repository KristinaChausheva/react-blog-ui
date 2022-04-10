import Post from "../post/Post"

import "./posts.css"
import { useState, useEffect } from "react"
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore"
import { db } from "../../firebase"

export default function Posts() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const list = []
      try {
        const querySnapshot = await getDocs(collection(db, "blogPosts"))
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        console.log(list)
        setData(list)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="posts">
      {data.map((blog) => (
        <Post
          key={blog.id}
          id={blog.id}
          img={blog.imgUrl}
          author={blog.author}
          title={blog.title}
          description={blog.description}
          date={blog.date}
        />
      ))}

      {/* <Post img="https://images.unsplash.com/photo-1603186741833-4a7cf699a8eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      <Post img="https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <Post img="https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
      <Post img="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <Post img="https://images.unsplash.com/photo-1631160299919-6a175aa6d189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" />
  <Post img="https://images.unsplash.com/photo-1501746877-14782df58970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />*/}
    </div>
  )
}
