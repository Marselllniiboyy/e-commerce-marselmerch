import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const p = location.state;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  // Handle submit review
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !review.trim()) return;

    // Membuat objek review baru (nama bisa diisi random/anonim)
    const newReview = {
      id: Date.now(),
      name: `User${Math.floor(Math.random() * 1000)}`, // nama user dummy
      rating,
      review,
    };

    // Menambahkan review baru ke daftar reviews
    setReviews([...reviews, newReview]);
    setRating(0);
    setReview("");
  };

  return (
    <div>
      <a
        key={p.id}
        href="#"
        className="group relative block overflow-hidden rounded-lg h-full max-w-4xl mx-auto mt-10"
      >
        <div className="flex">
          <div className="w-4xl">
            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
              <span className="sr-only">Wishlist</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <img
              src={p.img}
              alt={p.name}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />
          </div>

          <div className="relative border border-gray-100 bg-white p-6">
            <p className="text-gray-700">
              ${p.price}
              <span className="text-gray-400 line-through">
                ${p.price + p.price / 2}
              </span>
            </p>

            <h3 className="mt-1.5 text-lg font-medium text-gray-900">
              {p.name}
            </h3>

            <p className="mt-1.5 line-clamp-3 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              nobis iure obcaecati pariatur. Officiis qui, enim cupiditate
              aliquam corporis iste.
            </p>

            <form className="mt-4 flex gap-4">
              <button
                type="button"
                className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105 "
              >
                Buy Now
              </button>
            </form>
          </div>
        </div>
      </a>

      {/* Form input review */}

      <section className="border rounded-lg p-4 shadow hover:shadow-lg flex-1 bg-white mt-3 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mt-6">Reviews</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Rating:</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Review:</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full border rounded-lg p-3"
              rows="3"
              placeholder="Tulis pengalaman Anda..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Daftar user yang sudah review */}
      <section className="max-w-4xl mx-auto mt-6">
        <h2 className="text-xl font-semibold mb-3">
          User yang sudah mereview: {p.name}
        </h2>
        {reviews.length < 1 ? (
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <p className="text-black text-xl">Belum ada review</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {reviews.map((r) => (
              <li
                key={r.id}
                className="border rounded-lg p-4 bg-white shadow-sm"
              >
                <p className="font-semibold text-gray-800">{r.name}</p>
                <div className="flex gap-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                  {[...Array(5 - r.rating)].map((_, i) => (
                    <span key={i} className="text-gray-300">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mt-1">{r.review}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
