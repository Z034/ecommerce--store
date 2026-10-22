import { Heart, Plus } from "lucide-react";

function ProductCard({ product, isFav, onToggleFav, onAdd }) {
  return (
    <article className="artwork">
      <div className="frame-wrap">
        <div className="frame">
          <div className="mat">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        <button
          className={isFav ? "fav active" : "fav"}
          aria-label="Add to favorites"
          onClick={() => onToggleFav(product.id)}
        >
          <Heart size={22} fill={isFav ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="info">
        <span className="artist">{product.artist}</span>
        <h3>{product.title}</h3>
        <p className="meta">
          {product.year} · {product.size || "50 × 60 cm"}
        </p>
        <p className="price">{product.price.toLocaleString("fr-FR")} DA</p>
        <button className="add" onClick={() => onAdd(product)}>
          <span>Add to cart</span>
          <Plus size={16} />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;