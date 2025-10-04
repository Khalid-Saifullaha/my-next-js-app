import { IProduct } from "@/type";
import React from "react";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col items-center gap-3">
      <img
        src={product.image}
        alt={product.productName}
        className="w-40 h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold">{product.productName}</h2>
      <p className="text-sm text-gray-600">
        {product.category} | {product.brand}
      </p>
      <p className="text-base font-bold">${product.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
