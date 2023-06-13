"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";
import { Product } from "../models/Product";
import { Mission } from "../models/Mission";
import { Unmissable } from "../models/Unmissable";

export default function useFetchProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [missionss, setMissionss] = useState<Mission[]>([]);
  const [unmissables, setUnmissables] = useState<Unmissable[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const products = await fetchData(`products`);
      const missions = await fetchData(`products/missions`);
      const unmissables = await fetchData(`products/unmissables`);

      setProducts(products);
      setMissionss(missions);
      setUnmissables(unmissables);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, missionss, unmissables };
}
