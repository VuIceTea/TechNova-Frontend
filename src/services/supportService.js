import { mockFAQ, mockSupportChannels, mockSupportCategories } from '../data/mockFAQ';

// Simulated API delay
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// Get all FAQ
export const getFAQ = async () => {
    await delay();
    return mockFAQ;
};

// Get support channels
export const getSupportChannels = async () => {
    await delay();
    return mockSupportChannels;
};

// Get support categories
export const getSupportCategories = async () => {
    await delay();
    return mockSupportCategories;
};

// Submit support request
export const submitSupportRequest = async (requestData) => {
    await delay(500);

    // Simulate API call
    console.log('Support request submitted:', requestData);

    return {
        success: true,
        message: 'Yêu cầu hỗ trợ của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm nhất.',
        ticketId: `TICKET-${Date.now()}`
    };
};

// Search FAQ
export const searchFAQ = async (query) => {
    await delay();

    if (!query) return mockFAQ;

    const lowerQuery = query.toLowerCase();
    return mockFAQ.filter(item =>
        item.question.toLowerCase().includes(lowerQuery) ||
        item.answer.toLowerCase().includes(lowerQuery)
    );
};

export default {
    getFAQ,
    getSupportChannels,
    getSupportCategories,
    submitSupportRequest,
    searchFAQ
};
