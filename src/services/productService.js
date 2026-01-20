import { mockProducts } from "../data/mockProducts";

export function getProducts() {
    return Promise.resolve(mockProducts);
};

// Get only Flash Sale products
export function getFlashSaleProducts() {
    const flashSaleProducts = mockProducts.filter(product => product.isFlashSale === true);
    return Promise.resolve(flashSaleProducts);
}

// Get products excluding Flash Sale items
export function getRegularProducts() {
    const regularProducts = mockProducts.filter(product => !product.isFlashSale);
    return Promise.resolve(regularProducts);
}

// Get products by category (including Flash Sale items if they match)
export function getProductsByCategory(category) {
    const filtered = mockProducts.filter(product => product.category === category);
    return Promise.resolve(filtered);
}

// Get product by slug
export function getProductBySlug(slug) {
    const product = mockProducts.find(product => product.slug === slug);
    return Promise.resolve(product);
}
