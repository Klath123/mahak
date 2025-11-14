import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CollectionsSection from "../components/CollectionsSection";

export default function Collections() {
  return (
    <>
      <Navbar textColor="black" />

      <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.15)" }} />

      <CollectionsSection />

      <Footer />
    </>
  );
}
