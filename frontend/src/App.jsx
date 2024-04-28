import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/auth/Login/LoginPage'
import SignupPage from './pages/auth/Signup/SignupPage'
import ActivationPage from './pages/auth/Activation/ActivationPage'
import { useEffect } from 'react'
import HomePage from './pages/Home/HomePage'
import { loadUser } from './redux/actions/user'
import { useDispatch } from 'react-redux'

function App() {
  // const dispatch = useDispatch(); 
  // useEffect(() => {
  //   dispatch(loadUser()); // Dispatching loadUser action
  // }, [dispatch]);
  return (
    <>
       <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/login' Component={LoginPage}/>
        <Route path='/signup' Component={SignupPage}/>
        <Route path="/activation/:activation_token" Component={ActivationPage}/>
        </Routes>
    </>
  )
}

export default App
