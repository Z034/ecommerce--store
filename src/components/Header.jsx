import { useState } from "react";
import { useSelector } from "react-redux";
import { Search, Heart, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import { selectCartCount } from "../store/cartSlice";

function Header({ search, onSearch, onOpenCart }) {  const [open, setOpen] = useState(false);
  const cartCount = useSelector(selectCartCount);
  const favCount = useSelector((state) => state.favorites.ids.length);

  return (
    <header className="header">
      <a className="logo" href="#top">
        <Logo />
      </a>

      <div className="nav-actions">
        <input
          className={open ? "search-input open" : "search-input"}
          type="search"
          placeholder="Search a painting or an artist..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
        <button
          className="icon-btn"
          aria-label="Search"
          onClick={() => setOpen(!open)}
        >
          <Search size={20} />
        </button>
        <button className="icon-btn" aria-label="Favorites">
          <Heart size={20} />
          {favCount > 0 && <span className="count">{favCount}</span>}
        </button>
        <button className="icon-btn" aria-label="Cart" onClick={onOpenCart}>          <ShoppingBag size={20} />
          <span className="count plain">({cartCount})</span>
        </button>
      </div>
    </header>
  );
}

export default Header;