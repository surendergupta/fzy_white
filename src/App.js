import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Privacy from './pages/privacy/Privacy';
import Terms from './pages/terms/Terms';
const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={ <Home /> } />
            <Route path='about' element={ <About /> } />
            <Route path='contact' element={ <Contact /> } />
            <Route path='term-and-condition' element={ <Terms /> } />
            <Route path='privacy-policy' element={ <Privacy /> } />
            <Route path='login' element={ <Login /> } />
            <Route path='register' element={ <Register /> } />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;