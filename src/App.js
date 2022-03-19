
import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Shop from './Components/Shop';


export default function App () {
    return (            
       <>
       <ToastContainer/>
          <Header />
          <Shop/>
          <Footer />
    </>
    
    );
};



