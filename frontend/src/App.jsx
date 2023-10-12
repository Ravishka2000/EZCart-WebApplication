import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Header from './dashboardComponents/header'
// import { useAuthContext } from './hooks/useAuthContext';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
import Dashboard from "./dashboardComponents/Dashboard";
import AddProduct from "./dashboardComponents/AddProduct";
import EditProduct from "./dashboardComponents/EditProduct";
import Reports from './dashboardComponents/Reports';

function App() {
  // const { user } = useAuthContext()
  // const isAdmin = user && user.role === 'admin';

    return (
        <React.Fragment>
            <Header >
                <Header />
            </Header>

            <main style={{ marginBottom: "50px", background: "#f6f9fc" }}>
                <Routes>
                    <Route path="/" element={<Dashboard/>} exact></Route>
                    <Route path="/add product" element={<AddProduct/>} exact></Route>
                    <Route path="/edit-product/:productId" element={<EditProduct/>} exact></Route>
                    <Route path="/generate" element={<Reports/>} exact></Route>
                </Routes>
            </main>

        </React.Fragment>
    );
}

export default App;