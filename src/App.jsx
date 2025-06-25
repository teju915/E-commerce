// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeSlider from './components/Slider/HomeSlider';
import ProductList from './components/Products/ProductsList';
import Footer from './components/Footer/Footer';
import './App.css';
import AllProducts from './components/Products/AllProducts';
import ProductDetail from './components/Products/ProductDetailPage';
import CartProvider from './components/context/Context';
import CartProducts from './components/cart/CartProducts';
import Login from './components/register/Login';
import {UserProvider} from './components/context/UserContext';

function App() {
  return (
    <div className='bg-gray-200 min-h-screen'>
        <CartProvider>
      <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HomeSlider />
                <ProductList />

              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<CartProducts />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
      </UserProvider>
        </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
