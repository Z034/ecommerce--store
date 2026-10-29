# LAB2 React application with Redux

**Student:** SACI Zhour

## Links  
**Github repo:** https://github.com/Z034/ecommerce--store.git 

## Store : Starry Gallery
A small online art store built with React and Redux. It sells meseum-quality reproduction of famous paintings displayed in vintage frames.  

The visual identity is inspired by *The Starry Night* art piece.  


## Technologies used

- React 19 with JSX (built with Vite)
- Redux Toolkit
- React-Redux
- JavaScript (ES6+)
- lucide-react (icons)
- CSS (custom, responsive)
- Node.js / npm
- Git / GitHub



## Main React components

| Component | Role |
|---|---|
| `App` | Root component: layout, search text and cart open state |
| `Header` | Logo, search field, favorites and cart counters |
| `Logo` | Reusable star and name logo |
| `Hero` | Starry Night banner with the title |
| `ProductList` | Catalog grid with category tabs, sort and search filtering |
| `ProductCard` | One framed painting (receives a `product` prop) |
| `Cart` | Cart drawer: quantities, remove, total, clear |
| `Features` | Selling points and quote |
| `Footer` | Contact information |
| `StarField` | Random twinkling stars in the background |




## Redux state

The store is created with `configureStore` and has two slices.

```js
{
  cart: {
    items: [{ id, title, artist, year, price, image, quantity }]
  },
  favorites: {
    ids: [/* product ids */]
  }
}
```

**Cart actions:** `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, `clearCart`
**Favorites actions:** `toggleFavorite`
**Selectors:** `selectCartItems`, `selectCartCount`, `selectCartTotal`

Components read the state with `useSelector` and send actions with `useDispatch`. The state is saved in `localStorage` so it survives a page refresh.




## Implemented features

- Product catalog with title, artist, year and price
- Add to cart, remove from cart, quantity management and cart total
- Favorites (heart button and counter)
- Search by title or artist
- Category filter and sorting by price or title
- Persistence of cart and favorites with local storage
- Responsive layout (desktop, tablet, phone)
- Custom Van Gogh-inspired design



## Run the application

```bash
git clone https://github.com/Z034/ecommerce--store.git
cd ecommerce--store
npm install
npm run dev
```




### Project structure

ecommerce-store/
├── public/
│   └── images/
│       ├── hero.jpg
│       ├── starry-night.jpg
│       ├── sunflowers.jpg
│       ├── cafe-terrace.jpg
│       ├── water-lilies.jpg
│       ├── impression-sunrise.jpg
│       ├── woman-parasol.jpg
│       ├── great-wave.jpg
│       └── pearl-earring.jpg
├── screenshots/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Logo.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   └── StarField.jsx
│   ├── data/
│   │   └── products.js
│   ├── store/
│   │   ├── store.js
│   │   ├── cartSlice.js
│   │   └── favoritesSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── .gitignore
└── README.md