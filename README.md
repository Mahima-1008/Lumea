# LUMÉA — Beauty, thoughtfully curated.

A premium, frontend-only beauty and cosmetics e-commerce website built with React, Vite, Tailwind CSS and React Router.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Tech

- React 18 + Vite
- Tailwind CSS 3
- React Router DOM 6
- Lucide React icons
- localStorage for cart & wishlist persistence

## Structure

```
src/
├── assets/            (drop your local images here later)
├── components/
│   ├── layout/        AnnouncementBar, Navbar, Footer, MobileBottomNav, SearchOverlay
│   ├── home/          Hero, CategorySection, ProductCarousel, EditorialBanner, etc.
│   ├── products/      ProductCard, ProductGrid, FilterSidebar, SortDropdown, QuickView, WishlistButton, ProductRating
│   ├── cart/          CartDrawer, CartItem, CartSummary
│   └── common/        Button, SectionHeading, Badge, Modal, Loader
├── context/           CartContext, WishlistContext
├── data/              products, categories, brands, articles (all mock)
├── hooks/             useInView
├── pages/             Home, Shop, ProductDetails, Makeup, Skincare, Haircare, Fragrance,
│                      Offers, Wishlist, Cart, Journal, JournalArticle, NotFound
├── App.jsx
├── main.jsx
└── index.css
```

## Routes

`/`, `/shop`, `/product/:id`, `/makeup`, `/skincare`, `/haircare`, `/fragrance`,
`/offers`, `/wishlist`, `/cart`, `/journal`, `/journal/:slug`, `*` (404)

## Notes

- **Images** use Unsplash placeholder URLs. Replace with your own by editing
  the `img()` helpers in `src/data/products.js` and `src/data/categories.js`,
  or by dropping files into `src/assets/` and importing them.
- **localStorage keys**: `lumea-cart`, `lumea-wishlist`.
- **Checkout** is intentionally a frontend-only modal — no payment is processed.
