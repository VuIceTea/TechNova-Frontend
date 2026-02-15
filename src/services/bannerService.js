import API_ENDPOINTS from '../constants/apiEndpoints';

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
};

export const getBanners = async () => {
    try {
        const response = await fetch(API_ENDPOINTS.BANNERS);
        const banners = await handleResponse(response);
        // Ensure banners is an array before filtering
        if (!Array.isArray(banners)) {
            console.error('Banners response is not an array:', banners);
            return [];
        }
        return banners.filter((banner) => banner.isActive !== false);
    } catch (error) {
        console.error('Error fetching banners:', error);
        return [];
    }
};