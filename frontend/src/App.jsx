import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/auth/Login/LoginPage'
import SignupPage from './pages/auth/Signup/SignupPage'

function App() {
  return (
    <>
       <Routes>
        <Route path='/login' Component={LoginPage}/>
        <Route path='/signup' Component={SignupPage}/>
       </Routes>
    </>
  )
}

export default App
