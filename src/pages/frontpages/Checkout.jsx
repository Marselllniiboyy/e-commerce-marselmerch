import { useCart } from "../../utils/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { cart } = useCart();
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Transfer Bank");

  // hitung total harga
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address.trim()) {
      alert("Silakan isi alamat pengiriman");
      return;
    }
    alert(`Pesanan berhasil dibuat!\nAlamat: ${address}\nMetode: ${payment}`);
    // di sini bisa kosongkan cart jika mau, atau navigasi ke halaman konfirmasi
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Kolom kiri: Form pengiriman */}
        <form
          onSubmit={handleSubmit}
          className="border rounded-lg p-4 bg-white shadow space-y-4"
        >
          <div>
            <label className="block text-lg font-medium mb-2">
              Alamat Pengiriman
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded-lg p-3"
              rows="4"
              placeholder="Tulis alamat pengiriman Anda..."
            ></textarea>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">
              Metode Pembayaran
            </label>
            <select
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option>Transfer Bank</option>
              <option>COD</option>
              <option>Kartu Kredit</option>
            </select>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Buat Pesanan
          </button>
        </form>

        {/* Kolom kanan: Ringkasan pesanan */}
        <div className="border rounded-lg p-4 bg-white shadow">
          <h2 className="text-xl font-semibold mb-4">Ringkasan Pesanan</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Keranjang kosong</p>
          ) : (
            <ul className="space-y-2">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.qty} x Rp{item.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="font-medium">
                    Rp{(item.qty * item.price).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>Rp{totalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
