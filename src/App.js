import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import ProtectedRoutes from './Services/ProtectedRoutes'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<ProtectedRoutes />} />
      <Route path="/" element={<Home />} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App