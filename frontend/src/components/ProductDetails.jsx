// src/components/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

export default function ProductDetails() {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    setLoading(true);

    API.get(`/products/${slug}`)
      .then((res) => {
        const data = res.data;
        setProduct(data);

        if (data.images?.length > 0) {
          setSelectedImg(data.images[0].url);
        }

        setError("");
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
        setError("Product not found.");
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading)
    return (
      <div className="py-20 text-center text-xl font-semibold animate-pulse text-[#0b1e2e]">
        Loading product...
      </div>
    );

  if (error || !product)
    return (
      <div className="py-20 text-center text-xl text-red-500">
        {error || "Product not found"}
      </div>
    );

  return (
    <div
      className={`
        w-full max-w-6xl mx-auto px-4 lg:px-2 py-12 
        grid grid-cols-1 md:grid-cols-2 gap-12
        transition-all duration-700
        ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* LEFT — Image */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[420px] group relative">
          <img
            src={selectedImg}
            alt={product.name}
            className="
              w-full 
              rounded-xl shadow-lg object-cover 
              transition-all duration-500
              group-hover:scale-[1.02] group-hover:shadow-2xl 
            "
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-5 flex-wrap justify-center">
          {product.images?.map((img) => (
            <img
              key={img._id}
              src={img.url}
              alt="thumbnail"
              className={`w-16 h-16 rounded-lg cursor-pointer object-cover border-2 transition-all
                ${
                  selectedImg === img.url
                    ? "border-[#0b1e2e] scale-105"
                    : "border-gray-300"
                }`}
              onClick={() => setSelectedImg(img.url)}
            />
          ))}
        </div>
      </div>

      {/* RIGHT — Info */}
      <div className="text-left text-[#0b1e2e]">
        {/* Title */}
        <h1 className="text-4xl font-bold font-playfair leading-tight">
          {product.name}
        </h1>

        {/* Description */}
        <p className="mt-4 text-[#123456] text-lg leading-relaxed opacity-90">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 text-yellow-500 flex items-center gap-2 text-lg">
          ⭐ {product.rating || 0}
          <span className="text-[#0b1e2e] opacity-70 text-sm">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        {/* Price — USD */}
        <div className="mt-6 text-3xl font-semibold tracking-tight text-[#0b1e2e]">
          ${product.price}
        </div>

        {/* Sizes */}
        <div className="mt-10">
          <h3 className="text-[#0b1e2e] font-medium mb-3">Available Sizes</h3>
          <div className="flex gap-3 flex-wrap">
            {product.sizes?.map((size, idx) => (
              <span
                key={idx}
                className="px-4 py-2 border rounded-xl text-[#0b1e2e] hover:border-[#1e3a8a]
                transition font-medium bg-white shadow-sm"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Ingredients */}
        {product.ingredients?.length > 0 && (
          <div className="mt-10">
            <h3 className="text-[#0b1e2e] font-medium mb-3">Ingredients</h3>

            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white text-[#0b1e2e]
                  rounded-xl shadow-sm border border-[#d4d4d4] text-sm"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Premium Notes */}
        <div className="mt-10 space-y-2 text-[#0b1e2e] opacity-80 leading-relaxed">
          <p>Long-lasting, premium imported fragrance oils</p>
          <p>Made with care • IFRA Certified</p>
        </div>
      </div>
    </div>
  );
}
