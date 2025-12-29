import { mockBanners } from "../data/mockBanners";

export const getBanners = async () => {
    return Promise.resolve(
        mockBanners.filter((banner) => banner.isActive)
    );
};