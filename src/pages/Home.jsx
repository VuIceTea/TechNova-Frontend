import React, { useState, useEffect } from "react";
import BannerCarousel from "../components/Banner/BannerCarousel";
import { getBanners } from "../services/bannerService";
import FeatureSection from "../components/FeatureSection";
import { getFeatures } from "../services/featureService";

const Home = () => {
    const [banners, setBanners] = useState([]);
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        getBanners().then(setBanners);
        getFeatures().then(setFeatures);
    }, []);

    return (
        <>
            {/* Banner Section */}
            <BannerCarousel banners={banners} />

            {/* Feature Section */}
            <FeatureSection features={features} />
        </>
    );
}

export default Home;