import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />
      <h2 className="font-semibold text-lg line-clamp-2">{product.title}</h2>
      <p className="text-blue-600 font-bold mt-2">${product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
    </div>
  );
}
