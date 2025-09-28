"use client";

import { useDispatch } from "react-redux";
import { setCategory, setSort } from "../store/store";

export default function FilterBar() {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 p-4 bg-gray-100">
      {/* Category Filter */}
      <div>
        <label htmlFor="category" className="sr-only">
          Category
        </label>
        <select
          id="category"
          onChange={(e) => dispatch(setCategory(e.target.value))}
          className="p-2 border rounded"
          aria-label="Select product category"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men&apos;s clothing</option>
          <option value="women's clothing">Women&apos;s clothing</option>
        </select>
      </div>

      {/* Sorting */}
      <div>
        <label htmlFor="sort" className="sr-only">
          Sort
        </label>
        <select
          id="sort"
          onChange={(e) => dispatch(setSort(e.target.value))}
          className="p-2 border rounded"
          aria-label="Sort products"
        >
          <option value="">Sort by</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>
    </div>
  );
}
