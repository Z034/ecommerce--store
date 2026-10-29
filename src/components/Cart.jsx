import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import {
  selectCartItems,
  selectCartTotal,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../store/cartSlice";

function Cart({ open, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  // close with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const checkout = () => {
    alert("Thank you for your order!");
    dispatch(clearCart());
    onClose();
  };

  return (
    <>
      <div
        className={open ? "cart-overlay open" : "cart-overlay"}
        onClick={onClose}
      />

      <aside className={open ? "cart-drawer open" : "cart-drawer"}>
        <div className="cart-head">
          <h2>Your cart</h2>
          <button className="icon-btn" aria-label="Close cart" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty">Your cart is empty. Find a piece you love.</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />

                  <div className="cart-item-info">
                    <span className="artist">{item.artist}</span>
                    <h4>{item.title}</h4>
                    <p className="cart-price">
                      {(item.price * item.quantity).toLocaleString("fr-FR")} DA
                    </p>

                    <div className="qty">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <button
                    className="remove"
                    aria-label="Remove from cart"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-foot">
              <div className="cart-total">
                <span>Total</span>
                <strong>{total.toLocaleString("fr-FR")} DA</strong>
              </div>
              <button className="checkout" onClick={checkout}>
                Checkout
              </button>
              <button className="clear" onClick={() => dispatch(clearCart())}>
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default Cart;