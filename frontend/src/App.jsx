import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from "./pages/ContactPage";
import Collections from "./pages/Collections";
import ProductDetailPage from './pages/ProductDetailPage';

export default function App() {
return (
<div>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/collections" element={<Collections />} />
<Route path="/product/:slug" element={<ProductDetailPage />} />
</Routes>
</div>
);
}