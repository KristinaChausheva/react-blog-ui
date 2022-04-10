import { Link } from "react-router-dom"
import "./singlePost.css"
import { useLocation } from "react-router-dom"

export default function SinglePost() {
  const location = useLocation()
  const state = location.state
  const author = state.author
  console.log(author)
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={state.img} alt="" />
        <h1 className="singlePostTitle">
          {state.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=krissimon">
                {state.author}
              </Link>
            </b>
          </span>
          <span>{state.date}</span>
        </div>
        <p className="singlePostDesc">{state.description}</p>
      </div>
    </div>
  )
}
