// Mock data for flash sale deals and promotional products
export const mockFlashSaleDeals = [
    {
        id: 'deal-1',
        name: 'Tai nghe chống ồn Sony WH-1000XM5',
        category: 'headphone',
        originalPrice: 9990000,
        salePrice: 5990000,
        discount: 40,
        image: 'https://cdn.tgdd.vn/Products/Images/54/313463/sony-wh-1000xm5-bac-650x650.png',
        stock: 20,
        sold: 15,
        rating: 4.8,
        reviews: 256
    },
    {
        id: 'deal-2',
        name: 'iPhone 15 Pro Max 256GB Titan Tự Nhiên',
        category: 'smartphone',
        originalPrice: 34990000,
        salePrice: 28990000,
        discount: 15,
        image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
        stock: 50,
        sold: 420,
        rating: 4.9,
        reviews: 1024
    },
    {
        id: 'deal-3',
        name: 'Bàn phím cơ Keychron K2 Pro Wireless',
        category: 'keyboard',
        originalPrice: 2650000,
        salePrice: 1850000,
        discount: 30,
        image: 'https://cdn.shopify.com/s/files/1/0059/0630/1017/files/Keychron-K2-Pro-QMK-VIA-wireless-mechanical-keyboard-for-Mac-Windows-iOS-Android-with-hot-swappable-switch-red-blue-brown-Gateron-G-Pro-switch-red-blue-brown-with-RGB-backlight-aluminum-fram.jpg',
        stock: 10,
        sold: 90,
        rating: 4.7,
        reviews: 158
    },
    {
        id: 'deal-4',
        name: 'Apple Watch Series 9 GPS 41mm',
        category: 'smartwatch',
        originalPrice: 12290000,
        salePrice: 9290000,
        discount: 25,
        image: 'https://cdn.tgdd.vn/Products/Images/7077/303891/apple-watch-s9-41mm-vien-nhom-day-silicone-1-3.jpg',
        stock: 100,
        sold: 20,
        rating: 4.6,
        reviews: 89
    },
    {
        id: 'deal-5',
        name: 'Chuột Gaming Logitech G Pro X Superlight',
        category: 'mouse',
        originalPrice: 3000000,
        salePrice: 1500000,
        discount: 50,
        image: 'https://cdn.tgdd.vn/Products/Images/86/226944/chuot-khong-day-gaming-logitech-g-pro-x-superlight-den-1-650x650.jpg',
        stock: 3,
        sold: 85,
        rating: 4.9,
        reviews: 342
    }
];

// Mock data for regular promotional products
export const mockPromoProducts = [
    {
        id: 'promo-1',
        name: 'iPad Air 5 M1 Wifi 64GB',
        category: 'tablet',
        price: 14490000,
        image: 'https://cdn.tgdd.vn/Products/Images/522/247508/ipad-air-5-xanh-600x600.jpg',
        rating: 4.5,
        reviews: 128,
        hasDiscount: false
    },
    {
        id: 'promo-2',
        name: 'Loa Bluetooth JBL Flip 6',
        category: 'speaker',
        price: 2490000,
        image: 'https://cdn.tgdd.vn/Products/Images/2162/271723/loa-bluetooth-jbl-flip-6-xanh-duong-1-650x650.jpg',
        rating: 5.0,
        reviews: 45,
        hasDiscount: false
    },
    {
        id: 'promo-3',
        name: 'Webcam Logitech C920 Pro HD',
        category: 'webcam',
        price: 1690000,
        image: 'https://cdn.tgdd.vn/Products/Images/4746/220670/logitech-c920-den-1-1-650x650.jpg',
        rating: 4.0,
        reviews: 89,
        hasDiscount: false
    },
    {
        id: 'promo-4',
        name: 'Kính thực tế ảo Meta Quest 3 128GB',
        category: 'vr',
        price: 13990000,
        image: 'https://cdn.tgdd.vn/Products/Images/7195/320186/kinh-thuc-te-ao-meta-quest-3-128gb-1-2-650x650.jpg',
        rating: 5.0,
        reviews: 12,
        hasDiscount: false
    },
    {
        id: 'promo-5',
        name: 'Sạc dự phòng Anker 20000mAh 20W',
        category: 'powerbank',
        price: 890000,
        image: 'https://cdn.tgdd.vn/Products/Images/57/235836/sac-du-phong-polymer-20000mah-type-c-pd-anker-powercore-essential-a1268-den-1-650x650.jpg',
        rating: 4.5,
        reviews: 230,
        hasDiscount: false
    }
];

// Mock data for vouchers/coupons
export const mockCoupons = [
    {
        id: 'coupon-1',
        code: 'TECH50',
        title: 'Giảm 50K',
        description: 'Đơn tối thiểu 500K',
        expiryDate: '30/10',
        type: 'discount',
        color: 'blue',
        value: 50000,
        minOrder: 500000
    },
    {
        id: 'coupon-2',
        code: 'FREESHIP',
        title: 'Miễn phí vận chuyển',
        description: 'Cho mọi đơn hàng',
        expiryDate: 'Trong ngày',
        type: 'freeship',
        color: 'orange',
        value: 0,
        minOrder: 0
    },
    {
        id: 'coupon-3',
        code: 'LAPTOP',
        title: 'Giảm 1 Triệu',
        description: 'Khi mua Laptop Gaming',
        expiryDate: '31/12',
        type: 'discount',
        color: 'purple',
        value: 1000000,
        minOrder: 15000000
    }
];

// Mock data for promotional banners
export const mockPromoBanners = [
    {
        id: 'banner-1',
        title: 'SUMMER TECH FEST',
        subtitle: 'Đại tiệc công nghệ mùa hè. Giảm đến 50% cho các thiết bị hàng đầu từ Apple, Samsung, Sony.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200',
        badge: 'SỰ KIỆN HOT',
        badgeColor: 'primary'
    },
    {
        id: 'banner-2',
        title: 'Laptop Gaming 2024',
        subtitle: 'Trải nghiệm hiệu năng đỉnh cao.',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800',
        badge: 'MỚI RA MẮT',
        badgeColor: 'orange'
    }
];

export default {
    flashSaleDeals: mockFlashSaleDeals,
    promoProducts: mockPromoProducts,
    coupons: mockCoupons,
    promoBanners: mockPromoBanners
};
