import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/auth/Login/LoginPage'
function App() {
  return (
    <>
       <Routes>
        <Route path='/login' Component={LoginPage}/>
       </Routes>
    </>
  )
}

export default App
