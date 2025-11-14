import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import ProductFeaturesBar from "../components/ProductFeaturesBar";
import AddReview from "../components/AddReview";

export default function ProductDetailPage() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* NAVBAR */}
      <Navbar textColor="black" />

      <div className="w-full h-[1px] bg-gray-200"></div>

      {/* PRODUCT DETAILS */}
      <ProductDetails slug={slug} />

       {/* FEATURES */}
      <ProductFeaturesBar />

      {/* REVIEW SECTION */}
      <div className="max-w-5xl mx-auto px-4 mt-12">
        <AddReview
          slug={slug}
          onReviewAdded={(newReview) => {
            console.log("Review added:", newReview);
            // ProductDetails will handle updating itself
          }}
        />
      </div>

     

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
