export const mockProducts = [
    {
        id: 1,
        name: "MacBook Pro M1 2020",
        slug: "macbook-pro-m1-2020",
        rating: 4.8,
        reviewCount: 150,
        badges: ["sale"],
        attributes: {
            ram: ["8GB", "16GB"],
            colors: [
                { key: "silver", label: "Bạc", hex: "#C0C0C0" },
                { key: "space-gray", label: "Xám không gian", hex: "#4B4B4B" },
            ],
            storages: ["256GB", "512GB"],
        },
        variants: [
            {
                id: "v1",
                attributes: { ram: "8GB", storage: "256GB", color: "silver" },
                originalPrice: 27590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086047/Macbook_Pro_M1_2021_y9jc-2s_ojw4jp.png",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080271/macbook-pro-m1-15-inch-2021-cu_eyuivu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080599/macbook-air-m1-2020-13inch-gold_vp1goi.jpg",
                ]
            },
            {
                id: "v2",
                attributes: { ram: "8GB", storage: "256GB", color: "space-gray" },
                originalPrice: 27590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086047/Macbook_Pro_M1_2021_y9jc-2s_ojw4jp.png",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080271/macbook-pro-m1-15-inch-2021-cu_eyuivu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080599/macbook-air-m1-2020-13inch-gold_vp1goi.jpg",
                ]
            },
            {
                id: "v3",
                attributes: { ram: "8GB", storage: "512GB", color: "silver" },
                originalPrice: 32590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v4",
                attributes: { ram: "8GB", storage: "512GB", color: "space-gray" },
                originalPrice: 31590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v5",
                attributes: { ram: "16GB", storage: "256GB", color: "silver" },
                originalPrice: 35990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v6",
                attributes: { ram: "16GB", storage: "256GB", color: "space-gray" },
                originalPrice: 36990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v7",
                attributes: { ram: "16GB", storage: "512GB", color: "silver" },
                originalPrice: 38990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v7",
                attributes: { ram: "16GB", storage: "512GB", color: "space-gray" },
                originalPrice: 38990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
        ]
    },
    {
        id: 2,
        name: "MacBook Pro M1 2020",
        slug: "macbook-pro-m1-2020",
        rating: 4.8,
        reviewCount: 150,
        badges: ["sale"],
        attributes: {
            ram: ["8GB", "16GB"],
            colors: [
                { key: "silver", label: "Bạc", hex: "#C0C0C0" },
                { key: "space-gray", label: "Xám không gian", hex: "#4B4B4B" },
            ],
            storages: ["256GB", "512GB"],
        },
        variants: [
            {
                id: "v1",
                attributes: { ram: "8GB", storage: "256GB", color: "silver" },
                originalPrice: 27590000,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086047/Macbook_Pro_M1_2021_y9jc-2s_ojw4jp.png",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080271/macbook-pro-m1-15-inch-2021-cu_eyuivu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080599/macbook-air-m1-2020-13inch-gold_vp1goi.jpg",
                ]
            },
            {
                id: "v2",
                attributes: { ram: "8GB", storage: "256GB", color: "space-gray" },
                originalPrice: 27590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086047/Macbook_Pro_M1_2021_y9jc-2s_ojw4jp.png",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080271/macbook-pro-m1-15-inch-2021-cu_eyuivu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080599/macbook-air-m1-2020-13inch-gold_vp1goi.jpg",
                ]
            },
            {
                id: "v3",
                attributes: { ram: "8GB", storage: "512GB", color: "silver" },
                originalPrice: 32590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v4",
                attributes: { ram: "8GB", storage: "512GB", color: "space-gray" },
                originalPrice: 31590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v5",
                attributes: { ram: "16GB", storage: "256GB", color: "silver" },
                originalPrice: 35990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v6",
                attributes: { ram: "16GB", storage: "256GB", color: "space-gray" },
                originalPrice: 36990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v7",
                attributes: { ram: "16GB", storage: "512GB", color: "silver" },
                originalPrice: 38990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v7",
                attributes: { ram: "16GB", storage: "512GB", color: "space-gray" },
                originalPrice: 38990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
        ]
    },
    {
        id: 3,
        name: "MacBook Pro M1 2020",
        slug: "macbook-pro-m1-2020",
        rating: 4.8,
        reviewCount: 150,
        badges: ["sale"],
        attributes: {
            ram: ["8GB", "16GB"],
            colors: [
                { key: "silver", label: "Bạc", hex: "#C0C0C0" },
                { key: "space-gray", label: "Xám không gian", hex: "#4B4B4B" },
            ],
            storages: ["256GB", "512GB"],
        },
        variants: [
            {
                id: "v1",
                attributes: { ram: "8GB", storage: "256GB", color: "silver" },
                originalPrice: 27590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086047/Macbook_Pro_M1_2021_y9jc-2s_ojw4jp.png",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080271/macbook-pro-m1-15-inch-2021-cu_eyuivu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080599/macbook-air-m1-2020-13inch-gold_vp1goi.jpg",
                ]
            },
            {
                id: "v2",
                attributes: { ram: "8GB", storage: "256GB", color: "space-gray" },
                originalPrice: 27590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086047/Macbook_Pro_M1_2021_y9jc-2s_ojw4jp.png",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080271/macbook-pro-m1-15-inch-2021-cu_eyuivu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080599/macbook-air-m1-2020-13inch-gold_vp1goi.jpg",
                ]
            },
            {
                id: "v3",
                attributes: { ram: "8GB", storage: "512GB", color: "silver" },
                originalPrice: 32590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v4",
                attributes: { ram: "8GB", storage: "512GB", color: "space-gray" },
                originalPrice: 31590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v5",
                attributes: { ram: "16GB", storage: "256GB", color: "silver" },
                originalPrice: 35990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v6",
                attributes: { ram: "16GB", storage: "256GB", color: "space-gray" },
                originalPrice: 36990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v7",
                attributes: { ram: "16GB", storage: "512GB", color: "silver" },
                originalPrice: 38990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v7",
                attributes: { ram: "16GB", storage: "512GB", color: "space-gray" },
                originalPrice: 38990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
        ]
    },
    {
        id: 4,
        name: "MacBook Pro M1 2020",
        slug: "macbook-pro-m1-2020",
        rating: 4.8,
        reviewCount: 150,
        badges: ["sale"],
        attributes: {
            ram: ["8GB", "16GB"],
            colors: [
                { key: "silver", label: "Bạc", hex: "#C0C0C0" },
                { key: "space-gray", label: "Xám không gian", hex: "#4B4B4B" },
            ],
            storages: ["256GB", "512GB"],
        },
        variants: [
            {
                id: "v1",
                attributes: { ram: "8GB", storage: "256GB", color: "silver" },
                originalPrice: 27590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086047/Macbook_Pro_M1_2021_y9jc-2s_ojw4jp.png",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080271/macbook-pro-m1-15-inch-2021-cu_eyuivu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080599/macbook-air-m1-2020-13inch-gold_vp1goi.jpg",
                ]
            },
            {
                id: "v2",
                attributes: { ram: "8GB", storage: "256GB", color: "space-gray" },
                originalPrice: 27590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086047/Macbook_Pro_M1_2021_y9jc-2s_ojw4jp.png",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080271/macbook-pro-m1-15-inch-2021-cu_eyuivu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080599/macbook-air-m1-2020-13inch-gold_vp1goi.jpg",
                ]
            },
            {
                id: "v3",
                attributes: { ram: "8GB", storage: "512GB", color: "silver" },
                originalPrice: 32590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v4",
                attributes: { ram: "8GB", storage: "512GB", color: "space-gray" },
                originalPrice: 31590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v5",
                attributes: { ram: "16GB", storage: "256GB", color: "silver" },
                originalPrice: 35990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v6",
                attributes: { ram: "16GB", storage: "256GB", color: "space-gray" },
                originalPrice: 36990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v7",
                attributes: { ram: "16GB", storage: "512GB", color: "silver" },
                originalPrice: 38990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v7",
                attributes: { ram: "16GB", storage: "512GB", color: "space-gray" },
                originalPrice: 38990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
        ]
    },
    {
        id: 5,
        name: "MacBook Pro M1 2020",
        slug: "macbook-pro-m1-2020",
        rating: 4.8,
        reviewCount: 150,
        badges: ["sale"],
        attributes: {
            ram: ["8GB", "16GB"],
            colors: [
                { key: "silver", label: "Bạc", hex: "#C0C0C0" },
                { key: "space-gray", label: "Xám không gian", hex: "#4B4B4B" },
            ],
            storages: ["256GB", "512GB"],
        },
        variants: [
            {
                id: "v1",
                attributes: { ram: "8GB", storage: "256GB", color: "silver" },
                originalPrice: 27590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086047/Macbook_Pro_M1_2021_y9jc-2s_ojw4jp.png",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080271/macbook-pro-m1-15-inch-2021-cu_eyuivu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080599/macbook-air-m1-2020-13inch-gold_vp1goi.jpg",
                ]
            },
            {
                id: "v2",
                attributes: { ram: "8GB", storage: "256GB", color: "space-gray" },
                originalPrice: 27590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086047/Macbook_Pro_M1_2021_y9jc-2s_ojw4jp.png",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080271/macbook-pro-m1-15-inch-2021-cu_eyuivu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080599/macbook-air-m1-2020-13inch-gold_vp1goi.jpg",
                ]
            },
            {
                id: "v3",
                attributes: { ram: "8GB", storage: "512GB", color: "silver" },
                originalPrice: 32590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v4",
                attributes: { ram: "8GB", storage: "512GB", color: "space-gray" },
                originalPrice: 31590000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v5",
                attributes: { ram: "16GB", storage: "256GB", color: "silver" },
                originalPrice: 35990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v6",
                attributes: { ram: "16GB", storage: "256GB", color: "space-gray" },
                originalPrice: 36990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v7",
                attributes: { ram: "16GB", storage: "512GB", color: "silver" },
                originalPrice: 38990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
            {
                id: "v7",
                attributes: { ram: "16GB", storage: "512GB", color: "space-gray" },
                originalPrice: 38990000,
                discountPercent: 10,
                stock: 5,
                images: [
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086337/macbook_a_awe3lu.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767086443/_0000_macbook_pro_13-in_silver_with_intel_processor_pure_side_left_screen__usen_5_fpiwfl.webp",
                    "https://res.cloudinary.com/dfass7bhc/image/upload/v1767080654/image_ekq7yg.jpg",
                ]
            },
        ]
    },
];