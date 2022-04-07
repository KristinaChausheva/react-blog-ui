import "./topbar.css"

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://scontent-muc2-1.xx.fbcdn.net/v/t1.18169-9/11825793_10207545460584331_2274065792767588975_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=F22hI_8vOJYAX9Tulv7&_nc_oc=AQn7zBRQELPyLMw6iM9hcZjdSsJetFuZuUNeqL6rUwpRLwauV1-r4l0DIpyGs7b9U55fR0-6JkbInXmJkCQzQwPs&_nc_ht=scontent-muc2-1.xx&oh=00_AT_HUuruftXphvFh_n8phU74-Zbyrqvn_Svtgqno316cWg&oe=6274DAD3"
          alt=""
        />
        <ul className="topList">
          <li className="topListItem">LOGIN</li>
          <li className="topListItem">REGISTER</li>
        </ul>

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
