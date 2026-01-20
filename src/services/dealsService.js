import {
    mockFlashSaleDeals,
    mockPromoProducts,
    mockCoupons,
    mockPromoBanners
} from '../data/mockDeals';

// Simulated API delay
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// Get all flash sale deals
export const getFlashSaleDeals = async () => {
    await delay();
    return mockFlashSaleDeals;
};

// Get all promotional products
export const getPromoProducts = async () => {
    await delay();
    return mockPromoProducts;
};

// Get all coupons
export const getCoupons = async () => {
    await delay();
    return mockCoupons;
};

// Get promotional banners
export const getPromoBanners = async () => {
    await delay();
    return mockPromoBanners;
};

// Get deal by ID
export const getDealById = async (id) => {
    await delay();
    return mockFlashSaleDeals.find(deal => deal.id === id);
};

// Filter deals by category
export const getDealsByCategory = async (category) => {
    await delay();
    return mockFlashSaleDeals.filter(deal => deal.category === category);
};

// Get hot deals (high discount)
export const getHotDeals = async () => {
    await delay();
    return mockFlashSaleDeals.filter(deal => deal.discount >= 30);
};

export default {
    getFlashSaleDeals,
    getPromoProducts,
    getCoupons,
    getPromoBanners,
    getDealById,
    getDealsByCategory,
    getHotDeals
};
