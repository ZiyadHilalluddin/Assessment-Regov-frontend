import React, {useState}from 'react'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login />}></Route>
        <Route path='/signup'element={<Signup />}></Route> 
        <Route path="/profile" element={<Profile />}state={{}}/>

      </Routes>
    </BrowserRouter>




  )
}

export default App
