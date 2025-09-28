"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

// Define RootState for better typing
interface RootState {
  filters: {
    category: string;
    sort: "asc" | "desc" | "";
  };
}

export default function ProductList() {
  const { category, sort } = useSelector((state: RootState) => state.filters);
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      let data: Product[] = await res.json();

      // Filter
      if (category) {
        data = data.filter((p) => p.category === category);
      }

      // Sort
      if (sort === "asc") {
        data = [...data].sort((a, b) => a.price - b.price);
      } else if (sort === "desc") {
        data = [...data].sort((a, b) => b.price - a.price);
      }

      setProducts(data);
    }
    fetchProducts();
  }, [category, sort]);

  // Pagination (show 8 per page)
  const perPage = 8;
  const paginated = products.slice(0, page * perPage);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginated.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {paginated.length < products.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
