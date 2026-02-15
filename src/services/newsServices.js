import API_ENDPOINTS from '../constants/apiEndpoints';

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
};

export async function getNewsList() {
    try {
        const response = await fetch(API_ENDPOINTS.NEWS.LIST);
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

export async function getNewsById(slug) {
    try {
        const response = await fetch(API_ENDPOINTS.NEWS.DETAIL(slug));
        return handleResponse(response);
    } catch (error) {
        console.error('Error fetching news detail:', error);
        return null;
    }
}

export async function getFeaturedNews() {
    try {
        const response = await fetch(API_ENDPOINTS.NEWS.FEATURED);
        const news = await handleResponse(response);
        return news[0]; // Return first featured news
    } catch (error) {
        console.error('Error fetching featured news:', error);
        return null;
    }
}