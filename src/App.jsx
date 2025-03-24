import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from "./components/navbar/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Product from "./components/pages/Product.jsx";
import NotFound from "./components/pages/Error/NotFound.jsx";
import Signup from "./components/pages/auth/Signup.jsx";
import Login from "./components/pages/auth/Login.jsx";
import AddToCart from "./components/pages/AddToCart/AddToCart.jsx";
import Hero from "./components/hero/Hero.jsx";
import SinglePageProduct from "./components/singlePageProduct/SinglePageProduct.jsx";
import { ToastContainer } from "react-toastify";


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {

    const isProductExist = cart.find((findItems)=> findItems.id === product.id)

    if(isProductExist){
      const updateCart = cart.map((item)=>(
        item.id === product.id ? {...item, quantity:item.quantity + 1} : item
      ))
      setCart(updateCart)
    }else{

      setCart([...cart, {...product, quantity:1}]);
    }

    // console.log(product);

    
  };

  const handleInc = (id)=>{
    const incQuan = cart.map((item)=>(
      item.id === id ? {...item, quantity:item.quantity+1}: item

    ))
    setCart(incQuan)

  }

  const handleDec = (id)=>{
    const decQuan = cart.map((item)=>(
      item.id === id && item.quantity > 0? {...item, quantity:item.quantity-1}: item

    ))
    setCart(decQuan)

  }

  const handleRemove = (id)=>{
    const removeCart = cart.filter((filterCart)=> filterCart.id !== id)
    setCart(removeCart)
  }


  return (
    <BrowserRouter>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Product AddToCart={handleAddToCart} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-to-cart" element={<AddToCart cart={cart} handleDec={handleDec} handleInc={handleInc} handleRemove={handleRemove} />} />
        <Route path="/single-product/:id" element={<SinglePageProduct addtocart={handleAddToCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
