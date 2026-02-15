import API_ENDPOINTS from '../constants/apiEndpoints';

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data; // Return only the data property from backend response
};

export async function getProducts() {
    try {
        const response = await fetch(API_ENDPOINTS.PRODUCTS.LIST);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Get only Flash Sale products
export async function getFlashSaleProducts() {
    try {
        const response = await fetch(API_ENDPOINTS.PRODUCTS.FLASH_SALE);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching flash sale products:', error);
        return [];
    }
}

// Get products excluding Flash Sale items
export async function getRegularProducts() {
    try {
        const response = await fetch(API_ENDPOINTS.PRODUCTS.LIST);
        const products = await handleResponse(response);
        return products.filter(product => !product.isFlashSale);
    } catch (error) {
        console.error('Error fetching regular products:', error);
        return [];
    }
}

// Get products by category
export async function getProductsByCategory(category) {
    try {
        const response = await fetch(API_ENDPOINTS.PRODUCTS.BY_CATEGORY(category));
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return [];
    }
}

// Get product by slug
export async function getProductBySlug(slug) {
    try {
        const response = await fetch(API_ENDPOINTS.PRODUCTS.DETAIL(slug));
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}
