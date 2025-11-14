import React, { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";
import API from "../api"; // Assuming this is your API utility

export default function CollectionsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll animation visibility (Intersection Observer)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        // Set visible only once to trigger the animations
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    // Cleanup function
    return () => {
      if (sectionRef.current) obs.unobserve(sectionRef.current);
    };
  }, []);

  // Fetch products
  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      ref={sectionRef}
      // Tailwind equivalent of MUI's Box/sx:
      // width: "100%", py: 10, px: { xs: 2, md: 6 }, textAlign: "center"
      className="w-full py-20 px-4 md:px-12 text-center"
    >
      {/* Title */}
      <h2
        // Tailwind equivalent of MUI Typography h4 and sx styles
        style={{
          fontFamily: "'Playfair Display', serif",
        }}
        className={`
          text-3xl sm:text-4xl lg:text-5xl 
          font-extrabold mb-12 
          text-[#0b1e2e]
          transition-all duration-700 ease-out 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        All Perfumes
      </h2>

      {/* Loading State */}
      {loading && (
        <div className="mt-20">
          {/* Tailwind equivalent of CircularProgress */}
          <div
            className="animate-spin inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-4 text-gray-700">Loading products...</p>
        </div>
      )}

      {/* Product Grid */}
      {!loading && (
        <div
          // Tailwind equivalent of MUI Grid container (spacing={4}, justifyContent="center")
          className="
                      grid
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-4
      gap-y-10   /* only vertical spacing */
      "
        >
          {products.map((product, index) => (
            <div
              key={product.slug}
              // This div now represents the Grid item wrapper.
              // We removed the Grid item properties (xs, sm, md, lg, xl) and let the parent grid control the columns.
              // The `flex justify-center` ensures the ProductCard is centered within its column.
              className={`
                flex justify-center
                transition-all duration-700 ease-out 
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{
                // Individual item transition delay for staggered effect
                transitionDelay: `${0.2 + index * 0.08}s`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
