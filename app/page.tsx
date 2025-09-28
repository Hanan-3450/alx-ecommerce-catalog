"use client";

import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <FilterBar />
      <ProductList />
    </div>
  );
}
