import { mockCategories } from "../data/mockCategory";

export function getCategories() {
    return Promise.resolve(mockCategories);
}