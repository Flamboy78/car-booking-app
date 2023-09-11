import React , {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const About = lazy(() => import('./pages/About'))
const SignIn = lazy(() => import('./pages/SignIn'))
const SignUp = lazy(() => import('./pages/SignUp'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))
const Home = lazy(() => import('./pages/Home'))
const Cars = lazy(() => import('./pages/Cars'))
const Checkout = lazy(() => import('./pages/Checkout'))

const App = () => (
  <Router>
      <div className="App">
          <Suspense fallback={<></>}>
              <Routes>
                  <Route path="/sing-in" element = {<SignIn/>}></Route>
                  <Route path="/about" element = {<About/>}></Route>
                  <Route path="/sign-up" element = {<SignUp/>}></Route>
                  <Route path="/forgot-password" element = {<ForgotPassword/>}></Route>
                  <Route path="/reset-password" element = {<ResetPassword/>}></Route>
                  <Route path="/" element = {<Home/>}></Route>
                  <Route path="/cars" element = {<Cars/>}></Route>
                  <Route path="checkout" element= {<Checkout/>}></Route>
              </Routes>
          </Suspense>
      </div>
  </Router>
)

export default App;
