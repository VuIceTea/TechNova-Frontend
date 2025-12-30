import { mockProducts } from "../data/mockProducts";

export function getProducts() {
    return Promise.resolve(mockProducts);
};