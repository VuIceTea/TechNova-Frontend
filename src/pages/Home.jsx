import React, { useState, useEffect } from "react";
import BannerCarousel from "../components/Banner/BannerCarousel";
import { getBanners } from "../services/bannerService";
import FeatureSection from "../components/FeatureSection";
import { getFeatures } from "../services/featureService";
import CategorySection from "../components/CategorySection";
import { getCategories } from "../services/categoryService";

const Home = () => {
    const [banners, setBanners] = useState([]);
    const [features, setFeatures] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getBanners().then(setBanners);
        getFeatures().then(setFeatures);
        getCategories().then(setCategories);
    }, []);

    return (
        <>
            {/* Banner Section */}
            <BannerCarousel banners={banners} />

            {/* Feature Section */}
            <FeatureSection features={features} />

            {/* Category Section */}
            <CategorySection categories={categories} />
        </>
    );
}

export default Home;