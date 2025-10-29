import Navbar from "../components/Navbar";
import { matchPath, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function MainLayout() {
  const [search, setSerch] = useState("");
  const [category, setCategory] = useState("Semua Kategori");

  // daftar pattern route yang harus menyembunyikan filter
  const hideFilterPatterns = ["/cart", "/checkout", "/product/:id"];

  // cek apakah pathname cocok salah satu pattern
  const shouldHideFilter = hideFilterPatterns.some((pattern) =>
    Boolean(matchPath(pattern, location.pathname))
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navbar */}
      <Navbar logo={logo} />
      {/* Search & Filter */}
      {!shouldHideFilter && (
        <header
          className="bg-slate-300 p-4 flex flex-col md:flex-row gap-2
justify-between items-center"
        >
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg"
            value={search}
            onChange={(e) => setSerch(e.target.value)}
          />
          <select
            className="px-4 py-2 border rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Semua Kategori</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Kecantikan</option>
          </select>
        </header>
      )}
      {/* Main Section */}
      <main className="flex-1 p-6">
        <Outlet context={{ search, category }} />
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2025 E-Commerce Simple App | Version 1.0</p>
      </footer>
    </div>
  );
}
