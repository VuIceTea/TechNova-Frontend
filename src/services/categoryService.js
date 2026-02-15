import API_ENDPOINTS from '../constants/apiEndpoints';

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
};

export async function getCategories() {
    try {
        const response = await fetch(API_ENDPOINTS.CATEGORIES);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}