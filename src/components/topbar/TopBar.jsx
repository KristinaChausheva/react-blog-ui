import { Link } from "react-router-dom"
import "./topbar.css"

export default function Topbar() {
  const user = false
  return (
    <div className="top">
      <div className="topbarTop">
        <span className="topbarTitle">Gardens in Colors</span>
      </div>
      <div className="topbarbottom">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            {user && <li className="topListItem">LOGOUT</li>}
          </ul>
        </div>
        <div className="topRight">
          <i className="topSearchIcon fas fa-search"></i>
          {user ? (
            <Link className="link" to="/settings">
              <img
                className="topImg"
                src="https://scontent-muc2-1.xx.fbcdn.net/v/t1.18169-9/11825793_10207545460584331_2274065792767588975_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=F22hI_8vOJYAX-h1M9w&_nc_oc=AQkhuMFNsIi0K6CRhurvCyueSMOC4AH2_wrFXNccD9bxN02p0RUtgQSTsphJbZKUH6UNT4TRROPR1jte4CTG9OFz&_nc_ht=scontent-muc2-1.xx&oh=00_AT_obUGROxkTtmBPiXGA2iApbvEQrEInI6k57qHBrb17GQ&oe=6274DAD3"
                alt=""
              />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
