"use client";
import { useState } from "react";
import { useFetchProducts } from "../hooks";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Product } from "../models/Product";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/authClientContext";
import Searchbar_ from "../components/searchbar_";
import { Loader } from "../components";
type Props = {};
export default function Products({}: Props) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { products, loading } = useFetchProducts();

  const [searchProduct, setSearchProduct] = useState("");

  const filteredProducts = products.filter((product: Product) =>
    product.detail.toLowerCase().includes(searchProduct.toLowerCase())
  );

  if (loading) return <Loader />;

  return !isAuthenticated ? (
    router.push("/login")
  ) : (
    <Box className="w-full max-w-360 bg-white px-3">
      <Searchbar_
        search={searchProduct}
        setSearch={setSearchProduct}
        placeholder="Buscar producto"
      />

      <nav aria-label="main mailbox folders">
        <List>
          {filteredProducts.map((product: Product) => (
            <ListItem
              className="border border-gray-900 my-1 rounded-md"
              disablePadding
              key={product.SKU}
            >
              <ListItemButton>
                <div className="flex justify-between flex-row items-center w-full">
                  <div className="flex flex-row">
                    <ListItemIcon>
                      <KeyboardArrowRightIcon />
                    </ListItemIcon>

                    <ListItemText primary={product.detail} />
                  </div>
                  <div>
                    <ListItemText secondary={`$${product.price}`} />
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
