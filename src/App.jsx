import { useState } from "react";
import products from "./data/products";
import StarField from "./components/StarField";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <StarField />
      <div className="app">
        <Header
          search={search}
          onSearch={setSearch}
          onOpenCart={() => setCartOpen(true)}
        />
        <Hero />
        <main className="container">
          <ProductList products={products} search={search} />
          <Features />
        </main>
        <Footer />
      </div>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default App;