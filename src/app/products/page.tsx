import ProductCard from "@/components/Products/ProductCard";
import { IProduct } from "@/type";
import React from "react";

const ProductPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <h1>All Products</h1>
      <div>
        {products.map((product: IProduct) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
