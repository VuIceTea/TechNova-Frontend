import API_ENDPOINTS from '../constants/apiEndpoints';

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
};

// Get all flash sale deals
export const getFlashSaleDeals = async () => {
    try {
        const response = await fetch(API_ENDPOINTS.DEALS.FLASH_SALE);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching flash sale deals:', error);
        return [];
    }
};

// Get all promotional products
export const getPromoProducts = async () => {
    try {
        const response = await fetch(API_ENDPOINTS.DEALS.PROMO_PRODUCTS);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching promo products:', error);
        return [];
    }
};

// Get all coupons
export const getCoupons = async () => {
    try {
        const response = await fetch(API_ENDPOINTS.DEALS.COUPONS);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching coupons:', error);
        return [];
    }
};

// Get promotional banners (keeping mock for now)
export const getPromoBanners = async () => {
    // This can be added to backend later if needed
    return [];
};

// Get vouchers (keeping mock for now)
export const getVouchers = async () => {
    // This can be added to backend later if needed  
    return [];
};

// Get deal by ID
export const getDealById = async (id) => {
    // This can be added to backend later if needed
    return null;
};

// Filter deals by category
export const getDealsByCategory = async (category) => {
    try {
        const response = await fetch(API_ENDPOINTS.DEALS.FLASH_SALE);
        const deals = await handleResponse(response);
        return deals.filter(deal => deal.category === category);
    } catch (error) {
        console.error('Error fetching deals by category:', error);
        return [];
    }
};

// Get hot deals (high discount)
export const getHotDeals = async () => {
    try {
        const response = await fetch(API_ENDPOINTS.DEALS.FLASH_SALE);
        const deals = await handleResponse(response);
        return deals.filter(deal => deal.discount >= 30);
    } catch (error) {
        console.error('Error fetching hot deals:', error);
        return [];
    }
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
