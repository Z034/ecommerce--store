function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <h3>{product.title}</h3>
        <p className="meta">
          {product.artist}, {product.year}
        </p>
        <p className="price">{product.price} DA</p>
        <button onClick={() => onAdd(product)}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;