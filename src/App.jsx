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
  const [favorites, setFavorites] = useState([]);

  const toggleFav = (id) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <>
      <StarField />
      <div className="app">
        <Header
          cartCount={0}
          favCount={favorites.length}
          search={search}
          onSearch={setSearch}
        />
        <Hero />
        <main className="container">
          <ProductList
            products={products}
            search={search}
            favorites={favorites}
            onToggleFav={toggleFav}
            onAdd={(p) => console.log("add", p.title)}
          />
          <Features />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;