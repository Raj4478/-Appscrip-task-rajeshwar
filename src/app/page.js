"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <Navbar />
      <main className="product-page">
        <div className="container">
          <h1 className="page-title">DISCOVER OUR PRODUCTS</h1>
          <p className="page-subtitle">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>

        <div className="container">
          <div className="product-controls">
            <div className="items-filter">
              <span className="items-count">3425 ITEMS</span>
              <button className="filter-toggle" onClick={toggleFilter}>
                <span>{showFilter ? "< HIDE FILTER" : "> SHOW FILTER"}</span>
              </button>
            </div>
            
            <div className="sort-controls">
              <select className="sort-select" aria-label="Sort by">
                <option>RECOMMENDED</option>
                <option>NEWEST FIRST</option>
                <option>POPULAR</option>
                <option>PRICE: HIGH TO LOW</option>
                <option>PRICE: LOW TO HIGH</option>
              </select>
            </div>
          </div>

          <div className="product-layout">
            {showFilter && <FilterSidebar isMobile={isMobile} onClose={() => setShowFilter(false)} />}

            <section className="product-grid" aria-live="polite" style={{gridTemplateColumns: showFilter && !isMobile ? 'repeat(3,1fr)' : isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)'}}>
              {Array.isArray(products) && products.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={{
                    ...product,
                    outOfStock: index === 1, 
                    badge: index === 0 ? "NEW PRODUCT" : null, 
                  }} 
                />
              ))}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
