import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { AuthContextProvider } from "./context/AuthContext"

import { createRoot } from "react-dom/client"
const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <AuthContextProvider>
    <App tab="home" />
  </AuthContextProvider>
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// )
