import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Books from './pages/Books'
import Addbooks from './pages/Addbooks'
import Footer from './components/Footer';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/addbooks' element={<Addbooks/>} />

      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
