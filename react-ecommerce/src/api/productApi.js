import apiClient from "./apiClient";
 
// POST /addProducts
export const addProducts = (product) =>
  apiClient.post("/addProducts", product).then((res) => res.data);
 
// GET /AllProducts
export const getAllProducts = () =>
  apiClient.get("/AllProducts").then((res) => res.data);
 
// GET /AllProducts/getproduct/{id}
export const getProductById = (id) =>
  apiClient.get(`/AllProducts/getproduct/${id}`).then((res) => res.data);
 
// POST /AllProducts/getproduct/{id}/add_to_cart?q={quantity}
export const addToCart = (id, quantity = 1) =>
  apiClient
    .post(`/AllProducts/getproduct/${id}/add_to_cart`, null, {
      params: { q: quantity },
    })
    .then((res) => res.data);
 
// GET /getproduct/add_to_cart/buynow?price={price}&quantity={quantity}
export const calculateTotalPrice = (price, quantity = 1) =>
  apiClient
    .get("/getproduct/add_to_cart/buynow", {
      params: { price, quantity },
    })
    .then((res) => res.data);
 
// PUT /update_product/{id}?cr={cr}
export const updateProduct = (id, updatedProduct, cr) =>
  apiClient
    .put(`/update_product/${id}`, updatedProduct, {
      params: { cr },
    })
    .then((res) => res.data);
 
// DELETE /cancel_order
export const cancelOrder = () =>
  apiClient.delete("/cancel_order").then((res) => res.data);
 
// GET /price_range?min={min}&max={max}
export const getProductsByPriceRange = (min, max) =>
  apiClient
    .get("/price_range", { params: { min, max } })
    .then((res) => res.data);
 
// DELETE /restart_db
export const restartDB = () =>
  apiClient.delete("/restart_db").then((res) => res.data);