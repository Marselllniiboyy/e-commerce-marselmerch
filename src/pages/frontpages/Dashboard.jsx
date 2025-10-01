import { Link, useOutletContext } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { products } from "../../utils/data.js";

export default function Dashboard() {
  const { search, category } = useOutletContext();

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "Semua Kategori" || p.category_name === category;
    return matchSearch && matchCategory;
  });
  return (
    <div>
      <h1 className="mt-2.5 text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard p={product} key={index} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Produk tidak ditemukan
          </p>
        )}
      </div>
    </div>
  );
}
