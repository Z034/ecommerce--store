import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <h1>Starry Gallery</h1>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={(x) => console.log("add", x.title)} />
      ))}
    </div>
  );
}

export default App;