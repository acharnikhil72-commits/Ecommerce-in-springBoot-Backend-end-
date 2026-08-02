import React, { useEffect, useState } from "react";
import {
  getProductById,
  addToCart,
  updateProduct,
  calculateTotalPrice,
} from "../api/productApi";
 
export default function ProductDetail({ productId, onBack }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartResult, setCartResult] = useState(null);
  const [buyNowResult, setBuyNowResult] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editValues, setEditValues] = useState({});
  const [cr, setCr] = useState(0); // whatever "cr" represents in your update logic
  const [error, setError] = useState(null);
 
  useEffect(() => {
    if (!productId) return;
    getProductById(productId)
      .then((data) => {
        setProduct(data);
        setEditValues(data);
      })
      .catch(() => setError("Failed to load product."));
  }, [productId]);
 
  const handleAddToCart = async () => {
    try {
      const result = await addToCart(productId, quantity);
      setCartResult(result);
    } catch {
      setError("Failed to add to cart.");
    }
  };
 
  const handleBuyNow = async () => {
    try {
      const result = await calculateTotalPrice(product?.price, quantity);
      setBuyNowResult(result);
    } catch {
      setError("Failed to calculate total.");
    }
  };
 
  const handleUpdate = async () => {
    try {
      const updated = await updateProduct(productId, editValues, cr);
      setProduct(updated);
      setEditMode(false);
    } catch {
      setError("Failed to update product.");
    }
  };
 
  if (!productId) return <p>Select a product to see details.</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!product) return <p>Loading...</p>;
 
  return (
    <div>
      <button onClick={onBack}>← Back to list</button>
      <h2>{product.name || `Product #${product.id}`}</h2>
 
      {!editMode ? (
        <>
          <p>Price: ₹{product.price}</p>
          <p>Description: {product.description}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      ) : (
        <div>
          <input
            value={editValues.name || ""}
            onChange={(e) =>
              setEditValues({ ...editValues, name: e.target.value })
            }
            placeholder="Name"
          />
          <input
            type="number"
            value={editValues.price || ""}
            onChange={(e) =>
              setEditValues({ ...editValues, price: Number(e.target.value) })
            }
            placeholder="Price"
          />
          <input
            type="number"
            value={cr}
            onChange={(e) => setCr(Number(e.target.value))}
            placeholder="cr param"
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      )}
 
      <hr />
 
      <div>
        <label>
          Quantity:{" "}
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
 
      {cartResult && (
        <p>Added to cart: {JSON.stringify(cartResult)}</p>
      )}
      {buyNowResult && (
        <p>
          Total: ₹{buyNowResult.totalPrice} for {buyNowResult.p_quantity} item(s)
        </p>
      )}
    </div>
  );
}