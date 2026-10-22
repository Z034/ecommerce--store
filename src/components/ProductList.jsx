import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, search, favorites, onToggleFav, onAdd }) {
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const q = search.trim().toLowerCase();

  const visible = products.filter((p) => {
    const matchCat = category === "All" || p.category === category;
    const matchSearch =
      q === "" ||
      p.title.toLowerCase().includes(q) ||
      p.artist.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <section className="collection" id="collection">
      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className={c === category ? "tab active" : "tab"}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="empty">No painting matches your search.</p>
      ) : (
        <div className="grid">
          {visible.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              isFav={favorites.includes(p.id)}
              onToggleFav={onToggleFav}
              onAdd={onAdd}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;