import { useState } from "react";
import products from "./data/products";
import StarField from "./components/StarField";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <StarField />
      <div className="app">
        <Header search={search} onSearch={setSearch} />
        <Hero />
        <main className="container">
          <ProductList products={products} search={search} />
          <Features />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;