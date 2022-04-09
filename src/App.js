import Topbar from "./components/topbar/Topbar"
import Homepage from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Settings from "./pages/settings/Settings"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Footer from "./components/footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { AuthContext } from "./context/AuthContext"
import { useContext } from "react"

function App() {
  // const currentUser = true
  const { currentUser } = useContext(AuthContext)

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />
  // }

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="posts" element={<Homepage />} />
          <Route
            path="register"
            element={currentUser ? <Homepage /> : <Register />}
          />
          <Route
            path="login"
            element={currentUser ? <Homepage /> : <Login />}
          />
          <Route path="post/:id" element={<Single />} />
          <Route
            path="write"
            element={currentUser ? <Write /> : <Login />}
          ></Route>

          <Route
            path="settings"
            element={currentUser ? <Settings /> : <Login />}
          ></Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
