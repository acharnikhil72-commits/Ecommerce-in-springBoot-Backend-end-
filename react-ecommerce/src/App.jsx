import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import AddProductForm from "./components/AddProductForm";
import { cancelOrder, restartDB } from "./api/productApi";
 
export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
 
  const handleCancelOrder = async () => {
    if (!window.confirm("Cancel the current order?")) return;
    await cancelOrder();
    alert("Order cancelled.");
  };
 
  const handleRestartDb = async () => {
    if (!window.confirm("This will wipe the database. Continue?")) return;
    await restartDB();
    alert("Database restarted.");
    setRefreshKey((k) => k + 1); // force ProductList to remount/reload
  };
 
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "1rem" }}>
      <h1>E-Commerce Admin</h1>
 
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleCancelOrder}>Cancel Order</button>{" "}
        <button onClick={handleRestartDb} style={{ color: "red" }}>
          Restart DB
        </button>
      </div>
 
      <AddProductForm onProductAdded={() => setRefreshKey((k) => k + 1)} />
 
      <hr />
 
      {selectedProductId ? (
        <ProductDetail
          productId={selectedProductId}
          onBack={() => setSelectedProductId(null)}
        />
      ) : (
        <ProductList key={refreshKey} onSelectProduct={setSelectedProductId} />
      )}
    </div>
  );
}