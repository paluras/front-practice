"use client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import data from "./src/db.json";
import Home from "./src/Home";
import { useState } from "react";
import "./src/App.css";

import ProductDetail from "./src/Components/Product";
import Nav from "./src/Components/Nav";
import About from "./src/Components/About";
import AboutUs from "./src/Components/Contacts";

function App() {
  const [count, setCount] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartSide, setCartSide] = useState("");
  const [sideWidth, setSideWidth] = useState(true);
  const [prductCount, setProductCount] = useState(1);
  const resultWomen = data.products.filter(
    (word) => word.category == "Womens Footwear"
  );
  const resultMen = data.products.filter(
    (word) => word.category == "Mens Footwear"
  );

  function handlePlus() {
    setProductCount((prevstate) => prevstate + 1);
  }

  function handleMinus() {
    setProductCount((prevstate) => prevstate - 1);
  }

  function handleSidebar() {
    setSidebar(!sidebar);
    sidebar ? setCount("") : setCount("300px");
  }

  function handleCart() {
    setSideWidth(!sideWidth);
    sideWidth ? setCartSide("300px") : setCartSide("");
  }
  console.log(sideWidth);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex >= 0) {
      const updateCartItems = [...cartItems];
      updateCartItems[existingItemIndex].quantity += prductCount;
      setCartItems(updateCartItems);
    } else {
      const newCartItem = { ...item, quantity: prductCount };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const removeFromCart = (itemId) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCartItems);
  };

  let cart = (
    <div className="thecart">
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.quantity}
          <img src={item.photo}></img>
          <p>
            {item.name} - {item.price}$
          </p>
          <img
            onClick={() => removeFromCart(item.id)}
            className="delete"
            src="https://raw.githubusercontent.com/paluras/ecomerce/cbcdf196ab94f7a391739ec4b84a367ef76d46c6/src/assets/icon-delete.svg"
            alt=""
          />
        </div>
      ))}{" "}
      <button>CheckOut</button>
    </div>
  );

  return (
    <>
    <BrowserRouter>
      <Nav
        count={count}
        handleSidebar={handleSidebar}
        cart={cart}
        cartSide={cartSide}
        handleCart={handleCart}
        cartItems={cartItems}
      />
            
      <Routes>
        <Route
          path="/project7/:id"
          element={
            <ProductDetail
              addToCart={addToCart}
              prductCount={prductCount}
              handlePlus={handlePlus}
              handleMinus={handleMinus}
            />
          }
        />
                
        <Route path="/project7" element={<Home allProducts={data.products} />} />
        <Route path="/men" element={<Home allProducts={resultMen} />} />
        <Route path="/women" element={<Home allProducts={resultWomen} />} />
              
      </Routes>
      <About />
      <AboutUs />
      </BrowserRouter>
    </>
  );
}

export default App;
