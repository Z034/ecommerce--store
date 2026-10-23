import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, search }) {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const q = search.trim().toLowerCase();

  const filtered = products.filter((p) => {
    const matchCat = category === "All" || p.category === category;
    const matchSearch =
      q === "" ||
      p.title.toLowerCase().includes(q) ||
      p.artist.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const visible = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "az") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <section className="collection" id="collection">
      <div className="toolbar">
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

        <select
          className="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort paintings"
        >
          <option value="default">Sort: Featured</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
          <option value="az">Title: A to Z</option>
        </select>
      </div>

      {visible.length === 0 ? (
        <p className="empty">No painting matches your search.</p>
      ) : (
        <div className="grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;