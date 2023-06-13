"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";
import { Product } from "../models/Product";

function useFetchProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetchData(`products`);

      setProducts(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading };
}

export default useFetchProducts;
