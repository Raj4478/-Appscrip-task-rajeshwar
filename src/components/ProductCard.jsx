
"use client";
import { useState } from "react";
import "../styles/ProductCard.css";

export default function ProductCard({ product = {} }) {
  const { image, title, id, outOfStock, badge } = product;
  const [isWished, setIsWished] = useState(false);

  const handleWishClick = () => {
    setIsWished(!isWished);
  };

  return (
    <article className="product-card card" aria-labelledby={`p-title-${id}`} role="article">
      <div className="product-media">
        {badge && <span className="badge">{badge}</span>}
        <img src={image || '/window.svg'} alt={title || 'Product image'} className="product-img" />
        {outOfStock && <div className="overlay" aria-hidden="true">OUT OF STOCK</div>}

      </div>

      <div className="content">
        <h3 id={`p-title-${id}`} className="product-name">{title || 'PRODUCT NAME'}</h3>
        <div className="card-footer">
          <p className="product-meta">Sign in or create an account to see pricing</p>
          <button 
            className={`wish-btn-inline ${isWished ? 'wished' : ''}`} 
            aria-pressed={isWished ? "true" : "false"} 
            aria-label="Add to wishlist"
            onClick={handleWishClick}
          >♡</button>
        </div>
      </div>
    </article>
  );
}
