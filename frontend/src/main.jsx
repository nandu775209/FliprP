import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


import './index.css';
import './components/Navbar.css';      
import './components/HeroSection.css'; 
import './components/ClientsSection.css';
import './components/ContactForm.css';
import './components/Newsletter.css';
import './components/Footer.css';      
import './pages/AdminForm.css';
import './pages/AdminTable.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);