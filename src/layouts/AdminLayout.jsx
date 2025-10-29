import { Outlet, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 flex items-center justify-center border-b border-gray-700">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-lg font-semibold">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/add-product"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            Tambah Produk
          </NavLink>
          <NavLink
            to="/admin/about"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            About
          </NavLink>
        </nav>
        <footer className="p-4 text-center text-sm border-t border-gray-700">
          © 2025 E-Commerce Admin
        </footer>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
