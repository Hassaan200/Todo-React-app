import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Navbar/>
   <Routes>

      <Route path="/" element={<App />} />
      <Route path="/Home" element={<Home />} />
     
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
