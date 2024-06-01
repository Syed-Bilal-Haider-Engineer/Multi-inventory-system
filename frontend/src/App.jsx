import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout/Layout';

const LoginPage = lazy(() => import('./pages/auth/Login/LoginPage'));
const SignupPage = lazy(() => import('./pages/auth/Signup/SignupPage'));
const ActivationPage = lazy(() => import('./pages/auth/Activation/ActivationPage'));
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const FAQPage = lazy(() => import('./pages/FAQs/FAQsPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPages/ProductsPages'));
const BestSellingPage = lazy(() => import('./pages/BestSellingPage/BestSellingPage'));
const EventsPage = lazy(() => import('./pages/EventsPage/Events'));
const productDetailsPage = lazy(()=> import('./pages/ProductsDetailsPage/ProductDetails'));

function App() {
  const routes = [
    { path: '/', component: HomePage },
    { path: '/best-selling', component: BestSellingPage },
    { path: '/products', component: ProductsPage },
    { path: '/events', component: EventsPage },
    { path: '/faq', component: FAQPage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignupPage },
    { path: '/activation/:activation_token', component: ActivationPage },
    { path: '/product/:id',component: productDetailsPage}
  ];

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<Layout activeHeading={index + 1} path={route.path}><route.component /></Layout>}
            />
          ))}
        </Routes>
      </Suspense>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
