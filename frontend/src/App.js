import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer'; 
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Cart from './components/Cart';

function App() {
  const [cartItems,setCartItems]=useState([]);
  return (
    <div className="App">
       <div>
          <ToastContainer theme='dark' position='top-center' autoClose={2000} />
          <Header  cartItems={cartItems}/>
          <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/search' element={<Home/>} />
           <Route path='/product/:id' element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
           <Route path='/Cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
          </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;