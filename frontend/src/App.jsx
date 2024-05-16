import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/auth/Login/LoginPage'
import SignupPage from './pages/auth/Signup/SignupPage'
import ActivationPage from './pages/auth/Activation/ActivationPage'
// import { useEffect } from 'react'
import HomePage from './pages/Home/HomePage'
// import { loadUser } from './redux/actions/user'
import { useDispatch } from 'react-redux'
import FAQPage from './pages/FAQs/FAQsPage'
import ProductsPage from './pages/ProductsPages/ProductsPages'
import BestSellingPage from './pages/BestSellingPage/BestSellingPage'
import Layout from './components/Layout/Layout'
import EventsPage from './pages/EventsPage/Events'
function App() {
  // const dispatch = useDispatch(); 
  // useEffect(() => {
  //   dispatch(loadUser()); // Dispatching loadUser action
  // }, [dispatch]);
  const routes = [
    { path: '/', component: HomePage },
    { path: '/best-selling', component: BestSellingPage },
    { path: '/products', component: ProductsPage },
    {path: '/events', component:EventsPage},
    { path: '/faq', component: FAQPage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignupPage },
    { path: '/activation/:activation_token', component: ActivationPage },
  ];
  return (
    <>
      <Routes>
       {routes.map((route, index) => (
          <Route 
            key={index} 
            path={route.path} 
            element={<Layout activeHeading={index+1}><route.component /></Layout>} 
      />
        ))}
      </Routes>
    </>
  )
}

export default App
