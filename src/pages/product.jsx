
import Navbar from "@/components/Navbar";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return { props: { products } };
}

export default function Products({ products }) {
  return (
    <>
      <Navbar />
      <main className="product-page">
        <h1 className="page-title">DISCOVER OUR PRODUCTS</h1>
        <p className="page-subtitle">
          Lorem ipsum dolor sit amet consectetur. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
        <div className="product-layout">
          <FilterSidebar />
          <section className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
