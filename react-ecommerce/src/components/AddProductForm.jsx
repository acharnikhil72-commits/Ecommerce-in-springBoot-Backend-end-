import React, { useState } from "react";
import { addProducts } from "../api/productApi";
 
export default function AddProductForm({ onProductAdded }) {
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      const created = await addProducts({
        ...form,
        price: Number(form.price),
      });
      setSuccess(true);
      setForm({ name: "", price: "", description: "" });
      onProductAdded?.(created);
    } catch {
      setError("Failed to add product.");
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
      {success && <p style={{ color: "green" }}>Product added!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}