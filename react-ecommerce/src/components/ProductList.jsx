import React, { useEffect, useState } from "react";
import { getAllProducts, getProductsByPriceRange } from "../api/productApi";
 
export default function ProductList({ onSelectProduct }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
 
  const loadAllProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    loadAllProducts();
  }, []);
 
  const handleFilter = async (e) => {
    e.preventDefault();
    if (minPrice === "" || maxPrice === "") {
      loadAllProducts();
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await getProductsByPriceRange(
        Number(minPrice),
        Number(maxPrice)
      );
      setProducts(data);
    } catch (err) {
      setError("Failed to filter products.");
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div>
      <h2>Products</h2>
 
      <form onSubmit={handleFilter} style={{ marginBottom: "1rem" }}>
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button type="submit">Filter</button>
        <button type="button" onClick={loadAllProducts}>
          Reset
        </button>
      </form>
 
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
 
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <button onClick={() => onSelectProduct(p.id)}>
              {p.name || `Product #${p.id}`} — ₹{p.price}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}