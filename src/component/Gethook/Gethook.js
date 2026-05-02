
import { useEffect, useState } from "react";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:5000/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return await res.json();
};

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        // ✅ FIX: handle both array and object response
        const result = Array.isArray(data) ? data : data.products;

        setProducts(result || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};