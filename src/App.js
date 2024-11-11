import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './Auth/PrivateRoute';
// toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// end Toaster
function App() {

  return (
    <div >

      <BrowserRouter>
      <ToastContainer position="top-right" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/users' element={<PrivateRoute />} >

          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
