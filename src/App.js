import React, { useState } from "react";
import Header from "./Header/Header";
import ProductCard from "./ProductCard/ProductCard";
import { createContext } from "react";
import ReactSwitch from "react-switch";
import "./App.css";
import "./HW1-wrap.css";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: "$100",
    description: "Description 1",
    images: [
      {
        src: "https://images.prom.ua/1640408475_w640_h640_muzhskie-krossovki-nike.jpg",
        alt: "image alt text",
      },
    ],
  },
  {
    id: 2,
    title: "Product 2",
    price: "$159",
    description: "Description 2",
    images: [
      {
        src: "https://images.prom.ua/3795465719_w640_h640_krossovki-nike-air.jpg",
        alt: "image alt text",
      },
    ],
  },
  {
    id: 3,
    title: "Product 3",
    price: "$299",
    description: "Description 3",
    images: [
      {
        src: "https://images.prom.ua/1278835939_krosivki-nike-air.jpg",
        alt: "image alt text",
      },
    ],
  },
  // add more products here
];

export const ThemeContext = createContext(null);

function App() {
  const [visibleProductsId, setVisibleProductsIndex] = useState(0);

  const removeFirstProduct = () => {
    setVisibleProductsIndex(visibleProductsId + 1);
  };
  const showFirstProduct = () => {
    setVisibleProductsIndex(visibleProductsId - 1);
  };

  const visibleProducts = products.slice(visibleProductsId);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <h1>My React App</h1>
      <Header />
      <ThemeContext.Provider value={(theme, toggleTheme)}>
        <div className="homework1" id={theme}>
          <div>
            <h2 className="chng_txt_theme">HomeWork 1</h2>
            <div className="switch">
              <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
          </div>
          <div className="hw1_wrap">
            {visibleProducts.map((product, id) => (
              <ProductCard key={id} {...product} />
            ))}
          </div>
          <button className="btn showbtn" onClick={removeFirstProduct}>
            Remove Product Card
          </button>
          <button className="btn showbtn" onClick={showFirstProduct}>
            Show Product Card
          </button>
          <hr />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
