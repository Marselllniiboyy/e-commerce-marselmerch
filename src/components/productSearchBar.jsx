// src/components/productSearchBar.jsx
import React, { useState, useEffect } from "react";
import { useProducts } from "../utils/ProductContext";

export default function ProductSearchBar({ onSearch }) {
  const { getCategories } = useProducts();
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  // Ambil daftar kategori dari API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        console.error("Gagal memuat kategori:", err);
      }
    };
    fetchCategories();
  }, [getCategories]);

  // Saat tombol cari ditekan
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ keyword, category });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-2 items-center mb-4"
    >
      <input
        type="text"
        placeholder="Cari produk..."
        className="border rounded-lg px-4 py-2 w-full md:w-1/3"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <select
        className="border rounded-lg px-4 py-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Semua Kategori</option>
        {categories.map((cat) => (
          <option key={cat.category_id} value={cat.category_id}>
            {cat.category}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Cari
      </button>
    </form>
  );
}
