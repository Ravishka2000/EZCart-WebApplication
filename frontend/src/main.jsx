// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//  <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//  </BrowserRouter>
  
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import { AuthContextProvider } from './context/AuthContext';
import { ProductsContextProvider } from './context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <React.StrictMode>
            {/* <AuthContextProvider> */}
                    <ProductsContextProvider>
                        <App />
                    </ProductsContextProvider>
            {/* </AuthContextProvider> */}
        </React.StrictMode>
    </BrowserRouter>
    
);