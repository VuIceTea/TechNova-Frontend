export const mockProducts = [
    // Laptop gaming & MacBook 
    {
        id: 1,
        name: "Laptop Asus TUF Gaming F16 FX607VJ",
        slug: "laptop-asus-tuf-gaming-f16-fx607vj",
        category: "laptop-gaming",
        brand: "Asus",
        rating: 4.8,
        reviewCount: 120,
        badges: ["hot", "sale"],
        specs: {
            cpu: "Intel Core i7",
            gpu: "RTX 4060",
            ram: "16GB",
            storage: "512GB"
        },
        price: 21690000,
        originalPrice: 24490000,
        discountPercent: 11,
        stock: 20,
        image: "https://cdn.pokde.net/wp-content/uploads/2024/03/xc-20240229_163706.jpg",
        gallery: [
            "https://cdn.pokde.net/wp-content/uploads/2024/03/xc-20240229_163706.jpg",
            "https://microless.com/cdn/products/13b376918ed44bce10857535644dcce3-hi.jpg",
            "https://microless.com/cdn/products/78190d03b239aba0c23c3b06f7c5818f-hi.jpg",
            "https://microless.com/cdn/products/452fe407a04ce1de445d0e2fc71eb934-hi.jpg"
        ],
        description: "Laptop Asus TUF Gaming F16 mang đến hiệu năng mạnh mẽ với CPU Intel Core i7 thế hệ mới và GPU RTX 4060, đáp ứng mọi nhu cầu gaming và làm việc. Thiết kế bền bỉ theo tiêu chuẩn quân đội Mỹ MIL-STD-810H.",
        fullDescription: `
            <p class="mb-4">Laptop Asus TUF Gaming F16 FX607VJ là chiếc laptop gaming đầu tiên của Asus sử dụng thiết kế mới với vỏ kim loại cao cấp và bền bỉ theo tiêu chuẩn quân đội Mỹ MIL-STD-810H.</p>
            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Hiệu năng đỉnh cao cho mọi tác vụ</h4>
            <p class="mb-4">CPU Intel Core i7 thế hệ 13 kết hợp cùng GPU NVIDIA RTX 4060 mang đến hiệu năng đồ họa tuyệt vời, xử lý mượt mà các tựa game AAA và ứng dụng đồ họa chuyên nghiệp.</p>
            <ul class="list-disc pl-5 space-y-2">
                <li>Màn hình 16 inch Full HD 144Hz cho trải nghiệm game mượt mà</li>
                <li>RAM 16GB DDR5 cho đa nhiệm mạnh mẽ</li>
                <li>SSD 512GB NVMe tốc độ cao</li>
                <li>Hệ thống tản nhiệt Arc Flow với 2 quạt và 4 ống dẫn nhiệt</li>
            </ul>
        `,
        shortSpecs: [
            { icon: 'memory', label: 'CPU', value: 'Intel Core i7-13650HX' },
            { icon: 'monitor', label: 'Màn hình', value: '16 inch Full HD 144Hz' },
            { icon: 'videogame_asset', label: 'GPU', value: 'NVIDIA RTX 4060 8GB' }
        ],
        fullSpecs: [
            { label: 'CPU', value: 'Intel Core i7-13650HX (14 nhân, 20 luồng, 2.6GHz up to 4.9GHz, 24MB Cache)' },
            { label: 'RAM', value: '16GB DDR5 4800MHz (2x8GB, hỗ trợ tối đa 32GB)' },
            { label: 'Ổ cứng', value: '512GB SSD NVMe PCIe 4.0 (1 slot M.2 mở rộng)' },
            { label: 'Card đồ họa', value: 'NVIDIA GeForce RTX 4060 8GB GDDR6' },
            { label: 'Màn hình', value: '16 inch Full HD (1920x1080), 144Hz, IPS, 100% sRGB' },
            { label: 'Bàn phím', value: 'Bàn phím RGB per-key, có numpad' },
            { label: 'Kết nối', value: 'WiFi 6 AX, Bluetooth 5.2, RJ45 LAN' },
            { label: 'Cổng kết nối', value: '1x USB-C 3.2, 3x USB-A 3.2, 1x HDMI 2.1, 1x Audio Jack 3.5mm' },
            { label: 'Pin', value: '90Wh, sạc 200W' },
            { label: 'Trọng lượng', value: '2.2 kg' },
            { label: 'Hệ điều hành', value: 'Windows 11 Home' }
        ],
        variants: [{
            colors: [
                { name: 'Đen Xám', code: '#2A2A2A' },
                { name: 'Xanh Gunmetal', code: '#3C4447' }
            ],
            storages: ['512GB', '1TB']
        }],
        ratingDistribution: {
            5: 81,
            4: 12,
            3: 4,
            2: 1,
            1: 2
        },
        reviews: [
            {
                avatar: 'MH',
                name: 'Minh Hoàng',
                rating: 5,
                date: '2 ngày trước',
                comment: 'Máy đẹp tuyệt vời, hiệu năng mạnh mẽ. Chơi game rất mượt, tản nhiệt tốt!',
                avatarBg: 'bg-primary/20',
                avatarColor: 'text-primary'
            },
            {
                avatar: 'TA',
                name: 'Tuấn Anh',
                rating: 4,
                date: '1 tuần trước',
                comment: 'Laptop gaming chất lượng, giá hợp lý. Tuy nhiên hơi nặng một chút.',
                avatarBg: 'bg-purple-500/20',
                avatarColor: 'text-purple-500'
            }
        ]
    },
    {
        id: 2,
        name: "Laptop MSI Katana 15 B13VFK",
        slug: "laptop-msi-katana-15-b13vfk",
        category: "laptop-gaming",
        brand: "MSI",
        rating: 4.6,
        reviewCount: 95,
        badges: ["sale"],
        specs: {
            cpu: "Intel Core i7",
            gpu: "RTX 4060",
            ram: "16GB",
            storage: "512GB"
        },
        price: 28490000,
        originalPrice: 30990000,
        discountPercent: 8,
        stock: 15,
        image: "https://asset.msi.com/resize/image/global/product/product_16924039845a4650eae389921acb63fc0f7e166f1f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        gallery: [
            "https://asset.msi.com/resize/image/global/product/product_16924039845a4650eae389921acb63fc0f7e166f1f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
            "https://i.pcmag.com/imagery/reviews/01FIvTZt1sIxZydOira9RYm-5.jpg",
            "https://www.gadgetpilipinas.net/wp-content/uploads/2023/07/MSI-Katana-15-B13VFK-Review-MSI-Katana-15-RTX-4060-2023-Review.jpg",
            "https://www.gdgtme.com/wp-content/uploads/2023/03/MSI-Katana-15-B13V-6-1024x768.jpg"
        ]
    },
    {
        id: 3,
        name: "Laptop Acer Nitro V 15 ANV15",
        slug: "laptop-acer-nitro-v-15-anv15",
        category: "laptop-gaming",
        brand: "Acer",
        rating: 4.7,
        reviewCount: 110,
        badges: ["hot"],
        specs: {
            cpu: "AMD Ryzen 7",
            gpu: "RTX 4050",
            ram: "16GB",
            storage: "512GB"
        },
        price: 24990000,
        originalPrice: 26990000,
        discountPercent: 7,
        stock: 18,
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/58060edb-d464-431f-89da-5e0e803996eb.jpg;maxHeight=1920;maxWidth=900?format=webp",
        gallery: [
            "https://images.hothardware.com/contentimages/newsitem/62627/content/acer-nitro-v-15-rear-angled.jpg",
            "https://reviewcentralme.com/wp-content/uploads/2023/09/Nitro_v15.jpg",
            "https://images.hothardware.com/contentimages/newsitem/62627/content/16x9_2133x1200_highres-acer-nitro-v.jpg",
            "https://root-nation.com/wp-content/uploads/2025/01/acer-nitro-v15-anv15-41-r99y-ph61.jpg"
        ]
    },
    {
        id: 4,
        name: "Laptop Lenovo LOQ 15IAX9E",
        slug: "laptop-lenovo-loq-15iax9e",
        category: "laptop-gaming",
        brand: "Lenovo",
        rating: 4.7,
        reviewCount: 85,
        badges: [],
        specs: {
            cpu: "Intel Core i7",
            gpu: "RTX 4050",
            ram: "16GB",
            storage: "512GB"
        },
        price: 20790000,
        originalPrice: 23990000,
        discountPercent: 13,
        stock: 12,
        image: "https://m.media-amazon.com/images/I/71sBZzbbbqL._AC_UF894,1000_QL80_.jpg",
        gallery: [
            "https://laptopmedia.com/wp-content/uploads/2025/01/2-65-e1737565103110.jpg",
            "https://www.dateks.lv/images/pic/1200/630/385/1800.jpg",
            "https://laptopmedia.com/wp-content/uploads/2025/06/Lenovo-LOQ-Essential-15-Gen-9-15IAX9E-review-The-Best-Ultra-Budget-Gaming-Laptop.jpg",
            "https://images.expertreviews.co.uk/wp-content/uploads/2024/08/lenovo_loq_15iax9i_review_front_view.jpg?width=744&height=419&format=webply"
        ]
    },
    {
        id: 5,
        name: "Laptop HP Victus 15 FA2731TX",
        slug: "laptop-hp-victus-15-fa2731tx",
        category: "laptop-gaming",
        brand: "HP",
        rating: 4.5,
        reviewCount: 70,
        badges: ["new"],
        specs: {
            cpu: "Intel Core i7",
            gpu: "RTX 4050",
            ram: "16GB",
            storage: "512GB"
        },
        price: 21490000,
        originalPrice: 24045000,
        discountPercent: 11,
        stock: 25,
        image: "https://m.media-amazon.com/images/I/51M6WboY3BL._AC_UF350,350_QL80_.jpg",
        gallery: [
            "https://m.media-amazon.com/images/I/51M6WboY3BL._AC_UF350,350_QL80_.jpg",
            "https://m.media-amazon.com/images/I/51fUKtubGsL._AC_UF894,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/51N5D9eIwqL._AC_UF894,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/51j1tv8KCdL._AC_UF894,1000_QL80_.jpg"
        ]
    },
    {
        id: 6,
        name: "Laptop Asus ROG Strix G16",
        slug: "laptop-asus-rog-strix-g16",
        category: "laptop-gaming",
        brand: "Asus",
        rating: 4.9,
        reviewCount: 150,
        badges: ["hot"],
        specs: {
            cpu: "Intel Core i9",
            gpu: "RTX 4070",
            ram: "32GB",
            storage: "1TB"
        },
        price: 44490000,
        originalPrice: 46990000,
        discountPercent: 5,
        stock: 8,
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6578/6578920_sd.jpg;maxHeight=1920;maxWidth=900?format=webp",
        gallery: [
            "https://koru-cottage.com/wp-content/uploads/2023/10/ROG-Strix-G16.jpg",
            "https://www.notebookcheck.net/fileadmin/Notebooks/Asus/ROG_Strix_G16_G614JZ/Asus_ROG_Strix_14.jpg",
            "https://i.ytimg.com/vi/4P2JxbYLvA4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD-cavYSxazjAo92stT2pMvm5WnYQ",
            "https://dlcdnwebimgs.asus.com/files/media/71a33ba1-1be2-44c1-9541-70b4c800abf8/v1/images/m-ksp-c_1.webp"
        ]
    },
    {
        id: 7,
        name: "Laptop MSI Raider GE76",
        slug: "laptop-msi-raider-ge76",
        category: "laptop-gaming",
        brand: "MSI",
        rating: 4.8,
        reviewCount: 100,
        badges: ["hot", "sale"],
        specs: {
            cpu: "Intel Core i9",
            gpu: "RTX 4080",
            ram: "32GB",
            storage: "2TB"
        },
        price: 58990000,
        originalPrice: 64990000,
        discountPercent: 9,
        stock: 5,
        image: "https://asset.msi.com/resize/image/global/product/product_164744992243f3c748034f58032b697bc51f089ea5.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        gallery: [
            "https://i.ytimg.com/vi/8C3i5CQ6QAU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDQ3ZDtkvnBBcYpQNGjUrsCO1IjGg",
            "https://assetsio.gnwcdn.com/msi%20ge76%20raider%20main%20image.jpg?width=690&quality=85&format=jpg&dpr=3&auto=webp",
            "https://www.engineering.com/wp-content/uploads/2024/05/3_thumbnail2.png",
            "https://c1.neweggimages.com/ProductImageCompressAll300/34-155-720-V85.jpg"
        ]
    },
    {
        id: 8,
        name: "Laptop Gigabyte Aorus Gaming",
        slug: "laptop-gigabyte-aorus-gaming",
        category: "laptop-gaming",
        brand: "Gigabyte",
        rating: 4.6,
        reviewCount: 80,
        badges: ["new"],
        specs: {
            cpu: "Intel Core i7",
            gpu: "RTX 4060",
            ram: "16GB",
            storage: "1TB"
        },
        price: 29990000,
        originalPrice: 32990000,
        discountPercent: 9,
        stock: 14,
        image: "https://m.media-amazon.com/images/I/718c2m76w0L._AC_UF350,350_QL80_.jpg",
        gallery: [
            "https://b2c-contenthub.com/wp-content/uploads/2024/05/Gigabyte-Aorus-16X-left-angle.jpg?quality=50&strip=all&w=1200",
            "https://s.yimg.com/ny/api/res/1.2/yqECu9zIS6krrwpD0e8QAg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://o.aolcdn.com/hss/storage/midas/38ec1d6d84d43b6957a7bf1f9c1d75c0/200214005/gigabyte-AORUS-x3-plus.jpg",
            "https://i.ytimg.com/vi/gnTtRprh0uY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBonYetaufdlIr_-mRRa5AvGEfnAg",
            "https://www.notebookcheck.net/fileadmin/Notebooks/Aorus/MASTER_16_AM6H/title-4.jpg"
        ]
    },
    {
        id: 9,
        name: "Laptop Dell Gaming G15 (current gen)",
        slug: "laptop-dell-gaming-g15",
        category: "laptop-gaming",
        brand: "Dell",
        rating: 4.7,
        reviewCount: 130,
        badges: ["hot"],
        specs: {
            cpu: "Intel Core i7",
            gpu: "RTX 4060",
            ram: "16GB",
            storage: "1TB"
        },
        price: 31990000,
        originalPrice: 35990000,
        discountPercent: 11,
        stock: 10,
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5521-se/media-gallery/g15-5521-se-bk-rgbkb-115w/notebook-g-15-5521-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=393&qlt=100,1&resMode=sharp2&size=393,320&chrss=full",
        gallery: [
            "https://laptopmedia.com/wp-content/uploads/2023/05/1-55-e1685458987401.jpg",
            "https://i.insider.com/652eac84be9edfa8eda2c156?width=800&format=jpeg&auto=webp",
            "https://laptopmedia.com/wp-content/uploads/2021/10/dellg155515featured.jpg",
            "https://blog.bestbuy.ca/wp-content/uploads/2021/08/DSC00278-min.jpg"
        ]
    },
    {
        id: 10,
        name: "MacBook Pro 14 M5",
        slug: "macbook-pro-14-m5",
        category: "macbook",
        brand: "Apple",
        rating: 4.9,
        reviewCount: 200,
        badges: ["hot"],
        specs: {
            cpu: "Apple M5",
            gpu: "M5 GPU",
            ram: "16GB",
            storage: "512GB"
        },
        price: 41990000,
        stock: 10,
        image: "https://i.pcmag.com/imagery/reviews/06VwWWP1ukSWKSgnAATzoRM-1..v1760989347.jpg",
        gallery: [
            "https://i.pcmag.com/imagery/reviews/06VwWWP1ukSWKSgnAATzoRM-9.fit_lim.size_1050x.jpg",
            "https://www.macworld.com/wp-content/uploads/2025/04/M4-MacBook-Pros-right-angle.jpg?quality=50&strip=all",
            "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2025/10/apple-macbook-pro-14-in-m5-hero.png",
            "https://cdn.mos.cms.futurecdn.net/cvQtDKDUTNSoy9ycSko8Ve.jpg"
        ]
    },
    // Phone
    {
        id: 11,
        name: "iPhone 15 Pro Max - Titan Tự Nhiên",
        slug: "iphone-15-pro-max-titan-tu-nhien",
        category: "smartphone",
        brand: "Apple",
        rating: 4.8,
        reviewCount: 128,
        badges: ["hot", "sale"],
        specs: {
            chip: "A17 Pro",
            camera: "48MP Fusion",
            screen: "6.7 inch Super Retina XDR",
            storage: "256GB"
        },
        price: 34990000,
        originalPrice: 40990000,
        discountPercent: 15,
        stock: 30,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2lBmk9OmvSqPupKWr1P7kknto1pHWZ8zhk_PtKBuzRU1MLeB3_Qc44X8SRwiNtFRVTp1rhd98Jc11cXmlrXkajABq0HKQSjetmj6xxkhA0DKJUXUuXDG-4CGONtn9JqxZaSieyeQdy7d2SCrbHusSMK9ZPQhKCC_OQSA-kCQYZTNuEgsmz_kMR7xPkpPPa5QM-2v7LDuyHzseacMkBzs4sj751dO2dH5K76yEYOvv_Hq1pC0g82icIJvitxJN2sObUC4XuSo9Ql_b",
        gallery: [
            "https://i.ytimg.com/vi/bRbFqSX2PP0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDPSrlzgVwQQAfF62iVkkMwcaRr0g",
            "https://i0.wp.com/lukaesenko.com/wp-content/uploads/2024/11/pexels-japy-29020349-copy.jpg?fit=1600%2C1067&ssl=1",
            "https://cdn.mos.cms.futurecdn.net/VcNfLPoyjzKkB2a9xr5QB5.jpg",
            "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-16-pro-max/gallery/desert-titanium-1.jpg"
        ],
        description: "iPhone 15 Pro Max. Thiết kế từ titan chuẩn hàng không vũ trụ, bền bỉ và nhẹ hơn bao giờ hết. Chip A17 Pro mang lại hiệu năng đồ họa đột phá. Nút Tác Vụ tùy chỉnh theo ý muốn.",
        fullDescription: `
            <p class="mb-4">iPhone 15 Pro Max là chiếc iPhone đầu tiên có thiết kế từ titan chuẩn hàng không vũ trụ, cùng loại hợp kim sử dụng cho các tàu vũ trụ thực hiện các sứ mệnh đến sao Hỏa.</p>
            <div class="my-8 rounded-xl overflow-hidden">
                <div class="w-full h-80 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsHiXIrCurYG3ZXP5ogyllhLQyiTW-s6pYwYXpdOSZR2qhnw8sQNY80Bg8J--m7tAjGVlq4Gel7wQMFoMQrq6PiKkze1mQybQ-L0y718BhFWS0wLGbnSbfWfILoA371k8d6CzdkMr_M589hurUc0cw_dOYuo-0xT1B-u_sMygghQwvMhPbrBZJ8FLOHVexaHL07jq3vlxcUr18_saw8P-R-9s7QhbsrHvEtf34eji70ydtpLWDCb1UKlmeWQN0TYgVLiQzQd0-KDRQ');"></div>
            </div>
            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Chip A17 Pro. Chiến thắng ngoạn mục cho game.</h4>
            <p class="mb-4">Đây là con chip mang lại hiệu năng đồ họa tốt nhất từ trước đến nay của Apple. Các game di động sẽ có hình ảnh và cảm giác vô cùng sống động, với môi trường chi tiết và các nhân vật chân thực hơn.</p>
            <ul class="list-disc pl-5 space-y-2">
                <li>GPU đẳng cấp Pro mới nhanh hơn đến 20%.</li>
                <li>Ray tracing nhanh hơn đến 4x so với A16 Bionic.</li>
                <li>CPU nhanh hơn đến 10% với 6 lõi hiệu năng cao.</li>
            </ul>
        `,
        shortSpecs: [
            { icon: 'memory', label: 'Chip xử lý', value: 'Apple A17 Pro (3nm)' },
            { icon: 'smartphone', label: 'Màn hình', value: '6.7 inch, Super Retina XDR' },
            { icon: 'photo_camera', label: 'Camera', value: 'Chính 48MP, Zoom quang 5x' }
        ],
        fullSpecs: [
            { label: 'Kích thước màn hình', value: '6.7 inches' },
            { label: 'Công nghệ màn hình', value: 'Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision' },
            { label: 'Camera sau', value: '48 MP (chính) + 12 MP (telephoto 5x) + 12 MP (góc siêu rộng)' },
            { label: 'Camera trước', value: '12 MP, f/1.9' },
            { label: 'Chipset', value: 'Apple A17 Pro (3 nm)' },
            { label: 'Pin', value: '4441 mAh, Sạc nhanh 25W' },
            { label: 'Hệ điều hành', value: 'iOS 17' }
        ],
        variants: [{
            colors: [
                { name: 'Titan Tự Nhiên', code: '#B6B5A9' },
                { name: 'Titan Xanh', code: '#414352' },
                { name: 'Titan Trắng', code: '#F2F3EE' },
                { name: 'Titan Đen', code: '#202532' }
            ],
            storages: ['256GB', '512GB', '1TB']
        }],
        ratingDistribution: {
            5: 81,
            4: 12,
            3: 4,
            2: 1,
            1: 2
        },
        reviews: [
            {
                avatar: 'MH',
                name: 'Minh Hoàng',
                rating: 5,
                date: '2 ngày trước',
                comment: 'Máy đẹp tuyệt vời, màu Titan tự nhiên nhìn rất sang. Giao hàng nhanh!',
                avatarBg: 'bg-[#135bec]/20',
                avatarColor: 'text-[#135bec]'
            },
            {
                avatar: 'TA',
                name: 'Tuấn Anh',
                rating: 4,
                date: '1 tuần trước',
                comment: 'Pin trâu, chụp ảnh đẹp. Tuy nhiên giá hơi cao so với mặt bằng chung.',
                avatarBg: 'bg-purple-500/20',
                avatarColor: 'text-purple-500'
            }
        ]
    },
    {
        id: 12,
        name: "Điện thoại iPhone 16 Pro Max",
        slug: "dien-thoai-iphone-16-pro-max",
        category: "smartphone",
        brand: "Apple",
        rating: 4.9,
        reviewCount: 350,
        badges: ["hot", "new"],
        specs: {
            chip: "A18 Pro",
            camera: "48MP Fusion",
            screen: "6.9 inch Super Retina XDR",
            storage: "256GB"
        },
        price: 34990000,
        originalPrice: 38990000,
        discountPercent: 10,
        stock: 30,
        image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.landing-big_2x.jpg",
        gallery: [
            "https://i.ytimg.com/vi/bRbFqSX2PP0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDPSrlzgVwQQAfF62iVkkMwcaRr0g",
            "https://i0.wp.com/lukaesenko.com/wp-content/uploads/2024/11/pexels-japy-29020349-copy.jpg?fit=1600%2C1067&ssl=1",
            "https://cdn.mos.cms.futurecdn.net/VcNfLPoyjzKkB2a9xr5QB5.jpg",
            "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-16-pro-max/gallery/desert-titanium-1.jpg"
        ]
    },
    {
        id: 13,
        name: "Điện thoại Samsung Galaxy S24 Ultra",
        slug: "dien-thoai-samsung-galaxy-s24-ultra",
        category: "smartphone",
        brand: "Samsung",
        rating: 4.8,
        reviewCount: 280,
        badges: ["hot", "sale"],
        specs: {
            chip: "Snapdragon 8 Gen 3",
            camera: "200MP",
            screen: "6.8 inch Dynamic AMOLED",
            storage: "512GB"
        },
        price: 30990000,
        originalPrice: 34990000,
        discountPercent: 11,
        stock: 25,
        image: "https://images.samsung.com/levant/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-blue-back-mo.jpg?imbypass=true",
        gallery: [
            "https://images.samsung.com/levant/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-yellow-back-mo.jpg?imbypass=true",
            "https://cdn.mos.cms.futurecdn.net/iF3mgEfjeKWNLW9YxqZeuF.jpeg",
            "https://img.global.news.samsung.com/uk/wp-content/uploads/2024/09/001-Truly-Pro-How-Galaxy-S24Ultra-Unleashes-Your-Inner-Photographer.jpg",
            "https://images.samsung.com/levant/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-violet-back-mo.jpg?imbypass=true"
        ]
    },
    {
        id: 14,
        name: "Điện thoại Google Pixel 9 Pro",
        slug: "dien-thoai-google-pixel-9-pro",
        category: "smartphone",
        brand: "Google",
        rating: 4.7,
        reviewCount: 180,
        badges: ["new"],
        specs: {
            chip: "Google Tensor G4",
            camera: "50MP",
            screen: "6.7 inch OLED",
            storage: "256GB"
        },
        price: 25990000,
        stock: 20,
        image: "https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/415210-smartphones-google-pixel-9-pro-10041020.png",
        gallery: [
            "https://lh3.googleusercontent.com/E3SXpQuTnr2_r_nufGVPzXUGMJ9RLZy2TSRQi5h8yh8rGN_-1fjw3XLLaKlO6K3-WzrUvBFBx7PLR1P4-cC3nFP_AzWxCu582-8NTVk=rw-e365-nu-w2880-v1",
            "https://lh3.googleusercontent.com/0KSCWElJQL9wcDa58Lpml9jq2IWY5AD8Ick3XVdtyZ_cu0VxkKWWcr8D7nR98_VPoBQjAUZ1tQCJdok_4qYoSV1hykjeeRb2JU_irg=w1200",
            "https://www.cnet.com/a/img/resize/ad99814a887ec09d80ab6cbb3915f564329ab597/hub/2024/08/20/2f65435a-2b82-4deb-b26d-56aa74663e09/pixel-9-pro-xl-review-lanxon-43.jpg?auto=webp&fit=crop&height=900&width=1200",
            "https://www.droid-life.com/2024/07/12/pixel-9-pro-goes-up-against-pixel-9-in-early-hands-on-video/pixel-9-and-pixel-9-pro-1/"
        ]
    },
    {
        id: 14,
        name: "Điện thoại Xiaomi 14 Ultra",
        slug: "dien-thoai-xiaomi-14-ultra",
        category: "smartphone",
        brand: "Xiaomi",
        rating: 4.8,
        reviewCount: 220,
        badges: ["sale"],
        specs: {
            chip: "Snapdragon 8 Gen 3",
            camera: "50MP Leica",
            screen: "6.73 inch AMOLED",
            storage: "512GB"
        },
        price: 24990000,
        originalPrice: 27990000,
        discountPercent: 11,
        stock: 18,
        image: "https://gbatemp.net/data/reviews/boxart/full/2460.jpg?1710775344",
        gallery: [
            "https://www.cnet.com/a/img/resize/005920f02fb933dd741737d9fc28dfc28e3624b4/hub/2024/04/04/89d09a95-5483-4846-9495-0ff02091e2ec/xiaomi-14-ultra-promo-lanxon-cnet-review-18.jpg?auto=webp&width=1200",
            "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-14-ultra/m/78f9eac27b912d93298bf2a06f8821f4.jpg",
            "https://i.ytimg.com/vi/mEhRbMCJh08/maxresdefault.jpg",
            "http://reviewcentralme.com/wp-content/uploads/2024/02/Xiaomi-MWC-2024-1.jpg"
        ]
    },
    {
        id: 15,
        name: "Điện thoại OPPO Find X8 Pro",
        slug: "dien-thoai-oppo-find-x8-pro",
        category: "smartphone",
        brand: "OPPO",
        rating: 4.7,
        reviewCount: 150,
        badges: ["hot"],
        specs: {
            chip: "Dimensity 9300",
            camera: "50MP Hasselblad",
            screen: "6.78 inch AMOLED",
            storage: "512GB"
        },
        price: 27990000,
        stock: 22,
        image: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x8-series-en/find-x8-pro/products/932-720.png",
        gallery: [
            "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x8-series-en/find-x8-pro/products/932-720.png",
            "https://www.oppo.com/content/dam/oppo/product-asset-library/find/find-x8-series/en/oppo-find-x8-pro/white-apac/assets/images-color-konka-l-1-mo.jpg",
            "https://www.vopmart.com/media/wysiwyg/OPPO/oppo-find-x8-pro-review-02.jpg",
            "https://www.dxomark.com/wp-content/uploads/medias/post-179939/Oppo-Find-X8-Pro_featured-image-packshot-review.jpg"
        ]
    },
    // Audio
    {
        id: 16,
        name: "Tai nghe Apple AirPods Pro 2",
        slug: "tai-nghe-apple-airpods-pro-2",
        category: "audio",
        brand: "Apple",
        rating: 4.9,
        reviewCount: 500,
        badges: ["hot"],
        specs: {
            type: "True Wireless",
            noiseCancel: "Active ANC",
            battery: "30 giờ"
        },
        price: 6490000,
        originalPrice: 7490000,
        discountPercent: 13,
        stock: 40,
        image: "https://media.wired.com/photos/671577232009d044328f83e0/master/w_2560%2Cc_limit/AirPods%2520Pro%25202%2520Abstract%2520Background%2520102024%2520SOURCE%2520Apple.jpg",
        gallery: [
            "https://i.rtings.com/assets/products/s8HlCeNR/apple-airpods-pro-2nd-generation-truly-wireless/design-medium.jpg?format=auto",
            "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907.jpg.landing-big_2x.jpg",
            "https://cdn.outsideonline.com/wp-content/uploads/2022/09/AIRPODS_PRO2_h.jpg",
            "https://i.rtings.com/assets/products/Tt1f03oR/apple-airpods-pro-2nd-generation-truly-wireless/build-quality-small.jpg?format=auto"
        ]
    },
    {
        id: 17,
        name: "Tai nghe Sony WH-1000XM5",
        slug: "tai-nghe-sony-wh-1000xm5",
        category: "audio",
        brand: "Sony",
        rating: 4.8,
        reviewCount: 320,
        badges: ["sale"],
        specs: {
            type: "Over-ear",
            noiseCancel: "Best-in-class ANC",
            battery: "30 giờ"
        },
        price: 8490000,
        originalPrice: 9990000,
        discountPercent: 15,
        stock: 28,
        image: "https://i.ytimg.com/vi/v6EjmbMgv80/maxresdefault.jpg",
        gallery: [
            "https://www.techhive.com/wp-content/uploads/2023/04/Detail-view-of-the-Sony-WH-1000XMg-gesture-pad-2.jpg?quality=50&strip=all",
            "http://www.moon-audio.com/cdn/shop/files/sony-wh-1000xm5-main-02__79373.1669671666.1280.1280.jpg?v=1719253283",
            "https://i.rtings.com/assets/products/Nc33W9lA/sony-wh-1000xm5-wireless/design-medium.jpg?format=auto",
            "https://b2c-contenthub.com/wp-content/uploads/2022/05/Sony-WH-1000XM5-ear-cup-side.jpg?quality=50&strip=all&w=1200"
        ]
    },
    {
        id: 18,
        name: "Loa JBL Charge 5",
        slug: "loa-jbl-charge-5",
        category: "audio",
        brand: "JBL",
        rating: 4.7,
        reviewCount: 250,
        badges: ["hot"],
        specs: {
            type: "Bluetooth Portable",
            power: "40W",
            battery: "20 giờ",
            waterproof: "IP67"
        },
        price: 4490000,
        stock: 35,
        image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw0f3b5f7b/JBL_Charge5_Hero_Blue-1605x1605px.png?sw=535&sh=535",
        gallery: [
            "https://i.rtings.com/assets/products/sVaiMndk/jbl-charge-5/design-medium.jpg?format=auto",
            "https://www.cnet.com/a/img/resize/87c90c32f89d68929800e1f50ae223d357be73d8/hub/2021/01/07/4b75e972-2142-48b2-94db-3919b14d5f26/jbl-charge-5.png?auto=webp&fit=crop&height=675&width=1200",
            "https://www.popsci.com/wp-content/uploads/2021/06/14/IMG_0476-scaled.jpg?quality=85&w=768",
            "https://i.ytimg.com/vi/ytnsieD3enU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCyZk_Znh99kiW5AIgZpbK5qoc2AQ"
        ]
    },
    {
        id: 19,
        name: "Tai nghe Bose QuietComfort Ultra",
        slug: "tai-nghe-bose-quietcomfort-ultra",
        category: "audio",
        brand: "Bose",
        rating: 4.8,
        reviewCount: 180,
        badges: ["new"],
        specs: {
            type: "Over-ear",
            noiseCancel: "Advanced ANC",
            battery: "24 giờ"
        },
        price: 9490000,
        stock: 15,
        image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/content_pages/headphones/qc_ultra/assets/images/product_images/QCUH_Black_PDP_hero.png/jcr:content/renditions/cq5dam.web.1920.1920.png",
        gallery: [
            "https://www.cnet.com/a/img/resize/3abd8c492ec5abf4dd80dba42545b827f731e0f9/hub/2023/09/14/49921644-463c-4a06-bc85-dc8b362bba81/bose-quietcomfort-ultra-headphones-1.jpg?auto=webp&fit=crop&height=900&width=1200",
            "https://www.cnet.com/a/img/resize/c9d8fcca10fcf12be1f26cff5192948c5e033be2/hub/2023/10/05/c0041317-8d33-4e63-a688-211449b763c3/bose-quietcomfort-ultra-earbuds-silver2.jpg?auto=webp&fit=crop&height=362&width=644",
            "https://www.zdnet.com/a/img/2023/10/30/cdd61de8-2409-43b9-b926-ad65690ab327/qcultrahero.jpg",
            "https://sm.mashable.com/mashable_sea/review/r/review-bos/review-bose-quietcomfort-ultra-are-the-most-comfortable-head_hy16.jpg"
        ]
    },
    {
        id: 20,
        name: "Tai nghe Samsung Galaxy Buds3 Pro",
        slug: "tai-nghe-samsung-galaxy-buds3-pro",
        category: "audio",
        brand: "Samsung",
        rating: 4.6,
        reviewCount: 200,
        badges: ["sale"],
        specs: {
            type: "True Wireless",
            noiseCancel: "ANC",
            battery: "30 giờ"
        },
        price: 5490000,
        originalPrice: 6490000,
        discountPercent: 15,
        stock: 32,
        image: "https://image-us.samsung.com/us/galaxy-buds3-pro/images/galaxy-buds3-pro-crystal-tw-off-mo.jpg?imbypass=true",
        gallery: [
            "https://image-us.samsung.com/us/galaxy-buds3-pro/images/galaxy-buds3-pro-new-design-colorchip-silver02-mo.jpg?imbypass=true",
            "https://images.samsung.com/is/image/samsung/assets/us/galaxy-buds3-pro/images/galaxy-buds3-pro-intuitive-control-tab01-startframe-mo_0710.jpg?imbypass=true",
            "https://image-us.samsung.com/SamsungUS/home/mobile/audio/headphones/buds3-gallery/SCOMB6Q6-887-SM-R630_001_Front_White_RGB-1600x1200.jpg?$product-details-jpg$",
            "https://www.androidauthority.com/wp-content/uploads/2024/07/Samsung-Galaxy-Buds-3-Pro-close-up.jpg"
        ]
    },
    // Smartwatch 
    {
        id: 21,
        name: "Đồng hồ Apple Watch Ultra 2",
        slug: "dong-ho-apple-watch-ultra-2",
        category: "smartwatch",
        brand: "Apple",
        rating: 4.9,
        reviewCount: 400,
        badges: ["hot"],
        specs: {
            screen: "1.92 inch Retina",
            features: "GPS, Dive, Health",
            battery: "36 giờ"
        },
        price: 21990000,
        stock: 20,
        image: "https://www.apple.com/ecc-shared/apple-watch-ultra-2/images/meta/apple-watch-ultra-2__epn0vw7597qu_og.png",
        gallery: [
            "https://www.apple.com/newsroom/images/2023/09/apple-unveils-apple-watch-ultra-2/article/Apple-Watch-Ultra-2-hero-230912_Full-Bleed-Image.jpg.large.jpg",
            "https://www.apple.com/newsroom/images/2023/09/apple-unveils-apple-watch-ultra-2/article/Apple-Watch-Ultra-2-side-button-Digital-Crown-230912_Full-Bleed-Image.jpg.large.jpg",
            "https://cdn.cs.1worldsync.com/dc/8a/dc8addd4-fdef-4d3d-aef7-ef0fbc35f440.jpg",
            "https://i.insider.com/6500c5f81afe8f0019e90db9?width=700"
        ]
    },
    {
        id: 22,
        name: "Đồng hồ Samsung Galaxy Watch 7",
        slug: "dong-ho-samsung-galaxy-watch-7",
        category: "smartwatch",
        brand: "Samsung",
        rating: 4.7,
        reviewCount: 260,
        badges: ["new"],
        specs: {
            screen: "1.5 inch AMOLED",
            features: "AI Health, GPS",
            battery: "2 ngày"
        },
        price: 8490000,
        stock: 28,
        image: "https://image-us.samsung.com/us/galaxy-watch7/designstudio/SM-L310NZG_ET-SNL31LK.jpg?$product-details-jpg$",
        gallery: [
            "https://i.insider.com/668da36d39de72f47bc9d509?width=800&format=jpeg&auto=webp",
            "https://i.ytimg.com/vi/8pCLyj-dwFQ/maxresdefault.jpg",
            "https://i.ytimg.com/vi/B_VSUOdVvsQ/maxresdefault.jpg",
            "https://i.ytimg.com/vi/4lJK5eKhlns/maxresdefault.jpg"
        ]
    },
    {
        id: 23,
        name: "Đồng hồ Garmin Venu 3",
        slug: "dong-ho-garmin-venu-3",
        category: "smartwatch",
        brand: "Garmin",
        rating: 4.8,
        reviewCount: 190,
        badges: ["hot"],
        specs: {
            screen: "AMOLED",
            features: "Sport tracking, GPS",
            battery: "14 ngày"
        },
        price: 12490000,
        stock: 18,
        image: "https://static.garmincdn.com/en_US/prod/664098/010-02885-11.png",
        gallery: [
            "https://garminrumors.com/wp-content/uploads/elementor/thumbs/Venu-3-Series-scaled-r3g2kaiqe016rf7d4ov2hdcib1e6vu3qz46i4ko9io.jpg",
            "https://cdn.mos.cms.futurecdn.net/SicvCQA8CsHUG3TXoyQdmj.jpeg",
            "https://i.ytimg.com/vi/TUM2bQvrMVM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpBve-gD6o2WJmebEYW4L6LOJBXQ",
            "https://garminrumors.com/wp-content/uploads/2025/01/Venu-3-Elevate-Gen-5-v-4-scaled.jpg"
        ]
    },
    {
        id: 24,
        name: "Đồng hồ Huawei Watch GT 5",
        slug: "dong-ho-huawei-watch-gt-5",
        category: "smartwatch",
        brand: "Huawei",
        rating: 4.6,
        reviewCount: 170,
        badges: ["sale"],
        specs: {
            screen: "1.43 inch AMOLED",
            features: "Health monitor",
            battery: "14 ngày"
        },
        price: 7490000,
        originalPrice: 8990000,
        discountPercent: 17,
        stock: 25,
        image: "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt5-pro/images/s16/huawei-watch-gt-5-pro-strap.png",
        gallery: [
            "https://www.wareable.com/wp-content/uploads/sites/6/2024/09/Vili_Blue_Special-Angle_02_EN_PNG_5000PX_20240829-1024x576.jpg",
            "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt5-pro/images/kv/huawei-watch-gt-5-pro-kv.jpg",
            "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt5/img/s16/huawei-watch-gt-5-strap.png",
            "https://www.huaweicentral.com/wp-content/uploads/2024/09/Watch-GT-5-variants.jpg"
        ]
    },
    {
        id: 25,
        name: "Đồng hồ Xiaomi Watch S3",
        slug: "dong-ho-xiaomi-watch-s3",
        category: "smartwatch",
        brand: "Xiaomi",
        rating: 4.5,
        reviewCount: 140,
        badges: [],
        specs: {
            screen: "1.43 inch AMOLED",
            features: "HyperOS, Health",
            battery: "15 ngày"
        },
        price: 4490000,
        stock: 30,
        image: "https://xiaomiplanet.sk/wp-content/uploads/2023/10/xiaomi-watch-s3-oficialne-foto.jpg",
        gallery: [
            "https://www.vopmart.com/media/magefan_blog/xiaomi-watch-s3-review-01.jpg",
            "https://www.gadgetmatch.com/wp-content/uploads/2024/03/xiaomi-watch-s3-barcelona-plus-20240306-10.jpg",
            "https://www.vopmart.com/media/wysiwyg/Xiaomi/Watch/xiaomi-watch-s3-review-06.jpg",
            "https://www.cnet.com/a/img/resize/aaf2f3a7226a790b62c2cc1f3dd601843be4a3ed/hub/2024/02/25/d232f49e-cee5-4df8-a502-152475465c5d/xiaomi-watches-mwc-2024.jpg?auto=webp&fit=crop&height=675&width=1200"
        ]
    },
    // Smart home
    {
        id: 26,
        name: "Camera Google Nest Cam Indoor",
        slug: "camera-google-nest-cam-indoor",
        category: "smart-home",
        brand: "Google",
        rating: 4.7,
        reviewCount: 210,
        badges: ["hot"],
        specs: {
            type: "Indoor WiFi Camera",
            resolution: "1080p HDR",
            features: "Night vision, AI detect"
        },
        price: 2990000,
        stock: 35,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGEhjM57k655I5pX7EdiHVxIwQq373lXsV9M_Wzqw9H1IlfCeTVf1v7ZRnNJhi3ENtCaTjcWYcPVZT9X__Ikt-9WgWPwq0Z06FJONs0L-qAEjDl3Jr9E5qAw1zG25PIcRpGeLbPxZzkbg/s512/Image+1+_+blog.jpg",
        gallery: [
            "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b8ec6350-31c9-4440-9995-0229766e70b8.__CR0,0,600,450_PT0_SX600_V1___.jpg",
            "https://www.cnet.com/a/img/resize/972cc85011b8d862f25b21c05f61c43731a68ac0/hub/2021/10/06/2ea83d98-3971-4f5e-b968-93d7e696c2af/20211005-134622.jpg?auto=webp&fit=crop&height=362&width=644",
            "https://reviewed-com-res.cloudinary.com/image/fetch/s--iTvHEQL8--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1558020250785/Nest-Cam-vs-Nest-Cam-IQ.jpg",
            "https://i.ytimg.com/vi/owo-l45k9z8/maxresdefault.jpg"
        ]
    },
    {
        id: 27,
        name: "Bóng đèn Philips Hue White & Color",
        slug: "bong-den-philips-hue-white-color",
        category: "smart-home",
        brand: "Philips",
        rating: 4.8,
        reviewCount: 300,
        badges: ["sale"],
        specs: {
            type: "Smart Bulb E27",
            features: "16 triệu màu, Voice control",
            power: "9W"
        },
        price: 1490000,
        originalPrice: 1790000,
        discountPercent: 17,
        stock: 50,
        image: "https://m.media-amazon.com/images/I/41ve63H9SjL._AC_UF894,1000_QL80_.jpg",
        gallery: [
            "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xMTE0NTI4Mi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTc2NTM4ODI4N30.N4Gs_o5L1i2isOb5-E9epXMaJN2bVqRxtCyP2GNBO0A/img.jpg?width=1200&height=800&quality=50&coordinates=0%2C54%2C0%2C-1",
            "https://m.media-amazon.com/images/I/617BRWxzN8L._AC_UF894,1000_QL80_.jpg",
            "https://b2c-contenthub.com/wp-content/uploads/2024/01/philips-hue-secure-camera-starter-kit.jpg?quality=50&strip=all&w=1200",
            "https://www.assets.signify.com/is/image/Signify/046677592530-929004235501-E26-UI-ATF-APP?wid=1280&hei=960&qlt=82"
        ]
    },
    {
        id: 28,
        name: "Loa thông minh Amazon Echo Dot 5th Gen",
        slug: "loa-thong-minh-amazon-echo-dot-5",
        category: "smart-home",
        brand: "Amazon",
        rating: 4.7,
        reviewCount: 400,
        badges: ["hot"],
        specs: {
            type: "Smart Speaker",
            features: "Alexa, 360 sound"
        },
        price: 1490000,
        stock: 45,
        image: "https://m.media-amazon.com/images/I/51uw7oiDdyL._AC_UF350,350_QL80_.jpg",
        gallery: [
            "https://www.androidauthority.com/wp-content/uploads/2022/11/An-angle-on-the-5th-gen-Echo-Dot-with-Clock.jpg",
            "http://reviewcentralme.com/wp-content/uploads/2022/12/Amazon-Echo-Dot-5th-generation-review-1.jpg",
            "https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/407823-smart-speakers-amazon-echo-dot-5th-gen-w-clock-10033746.png",
            "https://www.cnet.com/a/img/resize/19412a37446ca922d1f41e579727fc182ddadab2/hub/2022/10/20/100951b8-b753-40c9-bd7a-aaee5a6fdcee/img-2839.jpg?auto=webp&width=1200"
        ]
    },
    {
        id: 29,
        name: "Ổ cắm thông minh TP-Link Kasa Smart Plug",
        slug: "o-cam-thong-minh-tp-link-kasa",
        category: "smart-home",
        brand: "TP-Link",
        rating: 4.6,
        reviewCount: 280,
        badges: [],
        specs: {
            type: "WiFi Smart Plug",
            features: "Voice control, Schedule"
        },
        price: 690000,
        stock: 60,
        image: "https://i.pcmag.com/imagery/reviews/02bedfMfwsBrVRtalw4whcm-1.fit_lim.size_1200x630.v1657119959.png",
        gallery: [
            "https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2019/35/624/g624HS107-F.jpg",
            "https://homekitnews.com/wp-content/uploads/2023/03/kasa-smart-plug-matter-nw-fi.jpg",
            "https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2019/35/624/g624HS107-M.jpg",
            "https://media.cnn.com/api/v1/images/stellar/prod/kasa-smart-plug.jpg?c=16x9&q=h_833,w_1480,c_fill"
        ]
    },
    {
        id: 30,
        name: "Chuông cửa Ring Video Doorbell",
        slug: "chuong-cua-ring-video-doorbell",
        category: "smart-home",
        brand: "Ring",
        rating: 4.7,
        reviewCount: 320,
        badges: ["new"],
        specs: {
            type: "Video Doorbell",
            resolution: "1080p",
            features: "Motion detect, 2-way talk"
        },
        price: 3490000,
        stock: 22,
        image: "https://images.squarespace-cdn.com/content/v1/587923d39f745695a9b5207b/1496676997732-ICWYJD2296ADUD4MULBG/SimplyHome+RING+Doorbell+Product+Photo",
        gallery: [
            "https://www.techhive.com/wp-content/uploads/2023/04/ring-video-doorbell-4-angle-2-100895330-orig-1.jpg?quality=50&strip=all&w=1024",
            "https://images.ctfassets.net/a3peezndovsu/4bth2uz7cA1JyL2LqSd9oU/37f2d4d3da87b6ac955ffb38cc2bf755/ring_video_doorbell_5050_split_plus_desktop_2x.jpg",
            "https://www.digitaltrends.com/tachyon/2021/03/ring_video_doorbell_pro_2_angle2-scaled.jpg?fit=2560%2C1920",
            "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:125,cw:1250,ch:938,q:80,w:1250/w9YKLCBUQF9UUnYCe7HoWH.jpeg"
        ]
    }
].map(product => ({
    ...product,
    gallery: product.gallery || [product.image],
    description: product.description || `${product.name} - Sản phẩm chính hãng ${product.brand}, chất lượng cao với giá cả hợp lý. ${product.badges?.includes('hot') ? 'Sản phẩm bán chạy nhất!' : ''}`,
    fullDescription: product.fullDescription || `
        <p class="mb-4">${product.name} là sản phẩm chất lượng cao từ thương hiệu ${product.brand}, được thiết kế để đáp ứng mọi nhu cầu của bạn.</p>
        <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Tính năng nổi bật</h4>
        <p class="mb-4">Với công nghệ tiên tiến và thiết kế hiện đại, ${product.name} mang đến trải nghiệm sử dụng tuyệt vời.</p>
        <ul class="list-disc pl-5 space-y-2">
            ${Object.entries(product.specs).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}
        </ul>
    `,
    shortSpecs: product.shortSpecs || Object.entries(product.specs).slice(0, 3).map(([key, value]) => {
        const iconMap = {
            // Laptop/PC
            'cpu': 'memory',
            'gpu': 'videogame_asset',
            'ram': 'storage',
            'storage': 'hard_drive',

            // Smartphone
            'chip': 'memory',
            'camera': 'photo_camera',
            'screen': 'smartphone',

            // Audio
            'type': 'headphones',
            'noiseCancel': 'headset_off',
            'battery': 'battery_charging_full',

            // Smartwatch
            'features': 'fitness_center',

            // Smart Home
            'resolution': 'high_quality',

            // Common
            'display': 'monitor',
            'processor': 'settings',
            'connectivity': 'wifi'
        };

        return {
            icon: iconMap[key] || 'info',
            label: key.charAt(0).toUpperCase() + key.slice(1),
            value: value
        };
    }),
    fullSpecs: product.fullSpecs || Object.entries(product.specs).map(([key, value]) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1),
        value: value
    })),
    variants: product.variants || [{
        colors: [],
        storages: []
    }],
    ratingDistribution: product.ratingDistribution || {
        5: 70,
        4: 20,
        3: 5,
        2: 3,
        1: 2
    },
    reviews: product.reviews || [
        {
            avatar: 'NV',
            name: 'Nguyễn Văn A',
            rating: 5,
            date: '1 tuần trước',
            comment: 'Sản phẩm tuyệt vời, đáng tiền. Giao hàng nhanh, đóng gói cẩn thận.',
            avatarBg: 'bg-[#135bec]/20',
            avatarColor: 'text-[#135bec]'
        },
        {
            avatar: 'LTB',
            name: 'Lê Thị B',
            rating: 4,
            date: '2 tuần trước',
            comment: 'Chất lượng tốt, giá hợp lý. Dịch vụ chăm sóc khách hàng tốt.',
            avatarBg: 'bg-green-500/20',
            avatarColor: 'text-green-500'
        }
    ]
}));