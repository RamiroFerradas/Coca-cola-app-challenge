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
import { Searchbar } from "../components";
import { Product } from "../models/Product";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Loader from "../components/Loader";

type Props = {};
export default function Products({}: Props) {
  const { products } = useFetchProducts();

  const [searchProduct, setSearchProduct] = useState("");

  const filteredProducts = products.filter((product: Product) =>
    product.detail.toLowerCase().includes(searchProduct.toLowerCase())
  );

  if (!filteredProducts.length) return <Loader />;

  return (
    <Box className="w-full max-w-360 bg-white px-3">
      <Searchbar
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
