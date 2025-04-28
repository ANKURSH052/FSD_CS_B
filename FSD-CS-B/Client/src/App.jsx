import React from 'react'
import Login from './component/Login'
import Home from './component/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Home/>}></Route>
      </Routes>




      </BrowserRouter>
    </div>
  )
}

export default App
