const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const API_ENDPOINTS = {
    AUTH: {
        LOGIN: `${BASE_URL}/auth/login`,
        REGISTER: `${BASE_URL}/auth/register`,
        LOGOUT: `${BASE_URL}/auth/logout`,
        REFRESH_TOKEN: `${BASE_URL}/auth/refresh-token`,
    },
    PRODUCTS: {
        LIST: `${BASE_URL}/products`,
        DETAIL: (slug) => `${BASE_URL}/products/${slug}`,
        BY_CATEGORY: (category) => `${BASE_URL}/products?category=${category}`,
        FLASH_SALE: `${BASE_URL}/products?isFlashSale=true`,
    },
    NEWS: {
        LIST: `${BASE_URL}/news`,
        DETAIL: (slug) => `${BASE_URL}/news/${slug}`,
        FEATURED: `${BASE_URL}/news?featured=true`,
    },
    BANNERS: `${BASE_URL}/banners`,
    CATEGORIES: `${BASE_URL}/categories`,
    DEALS: {
        FLASH_SALE: `${BASE_URL}/deals/flash-sale`,
        PROMO_PRODUCTS: `${BASE_URL}/deals/promo-products`,
        COUPONS: `${BASE_URL}/deals/coupons`,
    },
    TESTIMONIALS: `${BASE_URL}/testimonials`,
    FEATURES: `${BASE_URL}/features`,
};
export default API_ENDPOINTS;