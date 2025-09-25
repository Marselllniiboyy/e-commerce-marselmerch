import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function Navbar({ logo }) {
  // Mengambil totalQty dari context UseCart
  const { totalQty } = useCart();
  return (
    <nav className="flex justify-between p-1 border-b">
      <div className="flex ml-2 space-x-2 p-2">
        <img src={logo} alt="logo" className="w-16 h-6" />
        <h1 className="">
          <Link to="/" className="text-lg font-bold hover:text-slate-700">
            SELMERCH
          </Link>
        </h1>
      </div>
      <div className="flex p-2 justify-around w-[30%]">
        <h1>
          <Link
            to="/dashboard"
            className="text-lg font-medium hover:text-slate-700 "
          >
            Dashboard
          </Link>
        </h1>
        <h1>
          <Link
            to="/cart"
            className=" text-lg font-medium hover:text-slate-700"
          >
            Cart
            {/* Menampilkan totalQty jika ada item di keranjang */}
            {totalQty > 0 && (
              <span className=" bg-red-500 text-xs px-2 rounded-full">
                {totalQty}
              </span>
            )}
          </Link>
        </h1>
        <h1>
          <Link
            to="/checkout"
            className=" text-lg font-medium hover:text-slate-700"
          >
            Checkout
          </Link>
        </h1>
      </div>
    </nav>
  );
}
