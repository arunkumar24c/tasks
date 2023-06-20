import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/banner/Navbar";
import Categories from "./components/catagorie/Categories";
import TopProduct from "./components/topproduct/TopProduct";
import Sweets from "./components/sweets/Sweets";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Sold from "./components/sold/Sold";
import Products from "./components/Products";
import Title from "./components/Title";
import "./App.css"

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Navbar />
      <Categories />

      <TopProduct />
      <Title/>
      <Sweets />
      <Products/>
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
