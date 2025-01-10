import Nav from "./components/Nav";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book){
    setCart([...cart, book])
  }
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  // function addToCart(book) {
  //   const dupeItem = cart.find((item) => +item.id === +book.id);
  //   if(dupeItem) {
  //     setCart(
  //       cart.map((item) => {
  //       if( item.id === dupeItem.id) {
  //         return {
  //           ...item,
  //           quantity: item.quantity + 1,
  //         }
  //       }
  //       else{
  //         return item
  //       }
  //     }))
  //   }
  //   else {
  //     setCart([...cart, {...book, quantity: 1}])
  //   }
  // }


  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route
          path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart books={books} cart={cart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
