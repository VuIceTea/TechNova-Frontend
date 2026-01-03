export const mockProducts = [
    // Laptop gaming & MacBook (id 1-10)
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
        image: "https://www.asus.com/media/global/SKU/90NR0HV6-M00010/cygmaakobfcl7spp.png",
        gallery: [
            "https://www.asus.com/media/global/SKU/90NR0HV6-M00010/cygmaakobfcl7spp.png",
            "https://dlcdnwebimgs.asus.com/gain/a0d0b3c7-4e2f-4e5c-8a8e-cff3e8fc5c5f/w717/h525",
            "https://dlcdnwebimgs.asus.com/gain/f64c7c7d-3a0a-4a0c-8a6c-ba2e8e8d5e1f/w717/h525",
            "https://dlcdnwebimgs.asus.com/gain/c5c8c5c7-3a0a-4a0c-8a6c-ba2e8e8d5e1f/w717/h525"
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
        image: "https://asset.msi.com/resize/image/global/product/product_16924039845a4650eae389921acb63fc0f7e166f1f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
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
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/58060edb-d464-431f-89da-5e0e803996eb.jpg;maxHeight=1920;maxWidth=900?format=webp"
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
        image: "https://m.media-amazon.com/images/I/71sBZzbbbqL._AC_UF894,1000_QL80_.jpg"
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
        image: "https://m.media-amazon.com/images/I/51M6WboY3BL._AC_UF350,350_QL80_.jpg"
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
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6578/6578920_sd.jpg;maxHeight=1920;maxWidth=900?format=webp"
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
        image: "https://asset.msi.com/resize/image/global/product/product_164744992243f3c748034f58032b697bc51f089ea5.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
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
        image: "https://m.media-amazon.com/images/I/718c2m76w0L._AC_UF350,350_QL80_.jpg"
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
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5521-se/media-gallery/g15-5521-se-bk-rgbkb-115w/notebook-g-15-5521-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=393&qlt=100,1&resMode=sharp2&size=393,320&chrss=full"
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
        image: "https://i.pcmag.com/imagery/reviews/06VwWWP1ukSWKSgnAATzoRM-1..v1760989347.jpg"
    },
    // Điện thoại (id 11-15)
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
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD2lBmk9OmvSqPupKWr1P7kknto1pHWZ8zhk_PtKBuzRU1MLeB3_Qc44X8SRwiNtFRVTp1rhd98Jc11cXmlrXkajABq0HKQSjetmj6xxkhA0DKJUXUuXDG-4CGONtn9JqxZaSieyeQdy7d2SCrbHusSMK9ZPQhKCC_OQSA-kCQYZTNuEgsmz_kMR7xPkpPPa5QM-2v7LDuyHzseacMkBzs4sj751dO2dH5K76yEYOvv_Hq1pC0g82icIJvitxJN2sObUC4XuSo9Ql_b",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBkHstsXCkiHG16bVqcUf39GbeviQsUhzgqufNa8CLZj1DGiwg3GdPJf70SxA1WSa7EkMHdyBGxHGW0hljnvkrZn_XJTBM8Zc28y-tpROX12SeSUEbQ8JP44X-zpPasDRsSPMke6hp8vdILw1UcuVfOWTSUfrdy6FYP3GKZvHZTjYcX28x2ddz4Y1-ID6kDKv4GA13GcuvDNr4n4LQHR6SHVIyCmk-I_w5klSuf88gihKJHzT79Xqri9hd4w3936wVlneMlOCZ_g9yR",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD8OKkJjIgFv9UlqjPNX569JTvGZLPSYnKPyH75-xCBxIFhQvL4hnTCNArdBhf0epoV22i8D78p-vLXl1YC85W95WLoxlRxlTPR_Ez_LxbeoW93vBM5-WRjvEekyWOqWdnct8vLZUl2XdLG7RW6nXN6SEdnJEHYySbxx8joVq1ceMdN3gWy5LYMPPk0p6-zAPIS1Qvb5FDu01hcV_AxpNe-pzAjPF0B3aOCcN8mZo0y0KUPXIPxbXu8LOtb6OCzTeeD_Ovb8MACxtdV",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAx76g4cVkBU28-Wng_ZCmQHx2JpaPZ5u8RR7qPO22LOg-TRfISxo6iKDWMDdZwiBPf3s0rF9VL7a7HpAk2OToS1pN70AyBUM7zExN7NnC39rmt0KTQazdGZOmGWfahvIT59sClHzmZb20YjIPJ3JQdO7g95O8QkFMUR0mEZlrtQJw-EpsszQDUo3WQ1e4uC2wxFJEddXKzhB-CZif_JAcPvR1n8MjSF8WkQ6vM6-cEgeu_3jkIwPTimcyJab7k3x7dCnlE8Xsnthl7"
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
        image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.landing-big_2x.jpg"
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
        image: "https://images.samsung.com/levant/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-blue-back-mo.jpg?imbypass=true"
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
        image: "https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/415210-smartphones-google-pixel-9-pro-10041020.png"
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
        image: "https://gbatemp.net/data/reviews/boxart/full/2460.jpg?1710775344"
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
        image: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x8-series-en/find-x8-pro/products/932-720.png"
    },
    // Âm thanh (id 16-20)
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
        image: "https://media.wired.com/photos/671577232009d044328f83e0/master/w_2560%2Cc_limit/AirPods%2520Pro%25202%2520Abstract%2520Background%2520102024%2520SOURCE%2520Apple.jpg"
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
        image: "https://i.ytimg.com/vi/v6EjmbMgv80/maxresdefault.jpg"
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
        image: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw0f3b5f7b/JBL_Charge5_Hero_Blue-1605x1605px.png?sw=535&sh=535"
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
        image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/content_pages/headphones/qc_ultra/assets/images/product_images/QCUH_Black_PDP_hero.png/jcr:content/renditions/cq5dam.web.1920.1920.png"
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
        image: "https://image-us.samsung.com/us/galaxy-buds3-pro/images/galaxy-buds3-pro-crystal-tw-off-mo.jpg?imbypass=true"
    },
    // Đồng hồ thông minh (id 21-25)
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
        image: "https://www.apple.com/ecc-shared/apple-watch-ultra-2/images/meta/apple-watch-ultra-2__epn0vw7597qu_og.png"
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
        image: "https://image-us.samsung.com/us/galaxy-watch7/designstudio/SM-L310NZG_ET-SNL31LK.jpg?$product-details-jpg$"
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
        image: "https://static.garmincdn.com/en_US/prod/664098/010-02885-11.png"
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
        image: "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt5-pro/images/s16/huawei-watch-gt-5-pro-strap.png"
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
        image: "https://xiaomiplanet.sk/wp-content/uploads/2023/10/xiaomi-watch-s3-oficialne-foto.jpg"
    },
    // Nhà thông minh (id 26-30)
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
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGEhjM57k655I5pX7EdiHVxIwQq373lXsV9M_Wzqw9H1IlfCeTVf1v7ZRnNJhi3ENtCaTjcWYcPVZT9X__Ikt-9WgWPwq0Z06FJONs0L-qAEjDl3Jr9E5qAw1zG25PIcRpGeLbPxZzkbg/s512/Image+1+_+blog.jpg"
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
        image: "https://m.media-amazon.com/images/I/41ve63H9SjL._AC_UF894,1000_QL80_.jpg"
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
        image: "https://m.media-amazon.com/images/I/51uw7oiDdyL._AC_UF350,350_QL80_.jpg"
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
        image: "https://i.pcmag.com/imagery/reviews/02bedfMfwsBrVRtalw4whcm-1.fit_lim.size_1200x630.v1657119959.png"
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
        image: "https://images.squarespace-cdn.com/content/v1/587923d39f745695a9b5207b/1496676997732-ICWYJD2296ADUD4MULBG/SimplyHome+RING+Doorbell+Product+Photo"
    }
].map(product => ({
    ...product,
    // Add default values for products without extended data
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
        // Map thuộc tính specs với Material Icons phù hợp
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