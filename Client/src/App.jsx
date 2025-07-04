import Welcome from "./Pages/Welcome"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
 )
}

export default App
