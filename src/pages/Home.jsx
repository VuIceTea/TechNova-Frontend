import React, { useState, useEffect } from "react";
import BannerCarousel from "../components/Banner/BannerCarousel";
import { getBanners } from "../services/bannerService";
const Home = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        getBanners().then(setBanners);
    }, []);

    return <BannerCarousel banners={banners} />;
}

export default Home;