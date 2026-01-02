import React, { useState, useEffect } from "react";
import BannerCarousel from "../components/Banner/BannerCarousel";
import { getBanners } from "../services/bannerService";
import FeatureSection from "../components/FeatureSection";
import { getFeatures } from "../services/featureService";
import CategorySection from "../components/CategorySection";
import { getCategories } from "../services/categoryService";
import ProductSection from "../components/ProductSection";
import { getProducts } from "../services/productService";
import PromoSection from "../components/PromoSection";
import { getPromoBanners } from "../services/promoService";
import NewsSection from "../components/NewsSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
    const [banners, setBanners] = useState([]);
    const [features, setFeatures] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [promoBanners, setPromoBanners] = useState([]);

    useEffect(() => {
        getBanners().then(setBanners);
        getFeatures().then(setFeatures);
        getCategories().then(setCategories);
        getProducts().then(setProducts);
        getPromoBanners().then(setPromoBanners);
    }, []);

    return (
        <>
            {/* Banner Section */}
            <BannerCarousel banners={banners} />

            {/* Feature Section */}
            <FeatureSection features={features} />

            {/* Category Section */}
            <CategorySection categories={categories} />

            {/* Product Section */}
            <ProductSection products={products} />

            {/* Promo Section */}
            <PromoSection promo={promoBanners[0]} />

            {/* News Section */}
            <NewsSection />

            {/* Testimonials Section */}
            <TestimonialsSection />
        </>
    );
}

export default Home;