import { Link } from "react-router-dom"
import "./post.css"

export default function Post({ img, title, author, date, description, id }) {
  console.log(id)
  return (
    <div className="post">
      <Link
        to={`/post/${id}`}
        className="link"
        state={{ img, title, author, date, description, id }}
      >
        <img className="postImg" src={img} alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Music
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Life
              </Link>
            </span>
          </div>
          <span className="postTitle">{title}</span>
          <hr />
          <span className="postDate">{date}</span>
        </div>
        <p className="postDesc">{description}</p>
      </Link>
    </div>
  )
}
