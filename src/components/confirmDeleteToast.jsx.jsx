// src/components/confirmDeleteToast.jsx
import toast from "react-hot-toast";

/**
 * Menampilkan konfirmasi delete produk menggunakan toast
 * @param {Function} onConfirm - fungsi callback jika user menekan "Ya"
 */
export const confirmDeleteToast = (onConfirm) => {
  toast(
    (t) => (
      <div className="text-sm">
        <p>Apakah kamu yakin ingin menghapus produk ini?</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              onConfirm();
            }}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Ya
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400"
          >
            Batal
          </button>
        </div>
      </div>
    ),
    {
      duration: 4000,
      position: "top-right",
    }
  );
};
