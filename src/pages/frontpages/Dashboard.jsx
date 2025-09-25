import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { products } from "../../utils/data.js";

export default function Dashboard() {
  return (
    <div>
      <h1 className="mt-2.5 text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10">
        {products.map((product,index) => (
          <ProductCard p = {product} key={index}/>
        ))}
      </div>
    </div>
  );
}
