"use client";

import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  images?: { src: string }[];
};

export default function ProductGrid({ initialProducts }: { initialProducts: Product[] }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const fetchProducts = async (reset = false) => {
    const res = await fetch(
      `/api/products?page=${page}&per_page=20&search=${search}&category=${category}`
    );
    const data: Product[] = await res.json();
    setProducts(reset ? data : [...products, ...data]);
  };

  useEffect(() => {
    fetchProducts(true);
  }, [search, category]);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (page > 1) fetchProducts();
  }, [page]);

  return (
    <div>
      {/* Search & Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded">
          <option value="">All Categories</option>
          <option value="1">Men</option>
          <option value="2">Women</option>
          {/* Add your WooCommerce category IDs */}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <a key={p.id} href={`/product/${p.id}`} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <img src={p.images?.[0]?.src || "/placeholder.png"} alt={p.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="mt-2 font-medium">{p.name}</h2>
            <p className="text-gray-500">{p.price} AED</p>
          </a>
        ))}
      </div>

      <button
        onClick={loadMore}
        className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Load More
      </button>
    </div>
  );
}
