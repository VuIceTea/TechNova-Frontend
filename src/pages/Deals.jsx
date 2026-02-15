import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockFlashSaleDeals, mockPromoProducts, mockCoupons, mockPromoBanners } from '../data/mockDeals';
import { mockVouchers } from '../data/mockVouchers';

const Deals = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 30 });

    // Flash sale countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                        }
                    }
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const filters = [
        { id: 'all', label: 'Tất cả', icon: null },
        { id: 'flash', label: 'Flash Sale', icon: 'bolt', color: 'text-yellow-500' },
        { id: 'hot', label: 'Giảm giá sốc', icon: 'local_fire_department', color: 'text-red-500' },
        { id: 'bogo', label: 'Mua 1 tặng 1', icon: 'redeem', color: 'text-green-500' },
        { id: 'freeship', label: 'Miễn phí vận chuyển', icon: 'local_shipping', color: 'text-blue-400' }
    ];

    const getProgressWidth = (sold, stock) => {
        const total = sold + stock;
        return Math.min((sold / total) * 100, 100);
    };

    const getProgressLabel = (sold, stock) => {
        const percentage = getProgressWidth(sold, stock);
        if (percentage >= 90) return 'Sắp cháy hàng';
        if (percentage >= 75) return `Đã bán ${sold}`;
        if (percentage <= 30) return 'Vừa mở bán';
        return `Đã bán ${sold}`;
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const getVoucherColorClasses = (color) => {
        const colorMap = {
            blue: 'bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-200',
            orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-500 dark:text-orange-200',
            purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-200',
            green: 'bg-green-100 dark:bg-green-900/30 text-green-500 dark:text-green-200',
            pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-500 dark:text-pink-200',
            red: 'bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-200'
        };
        return colorMap[color] || colorMap.blue;
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <div className="max-w-300 mx-auto px-4 md:px-10 lg:px-40 py-5">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 px-4 mb-8">
                    <Link
                        to="/"
                        className="text-slate-500 dark:text-[#9da6b9] hover:text-primary text-sm font-medium leading-normal transition-colors"
                    >
                        Trang chủ
                    </Link>
                    <span className="text-slate-500 dark:text-[#9da6b9] text-sm font-medium leading-normal">/</span>
                    <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal">Khuyến mãi</span>
                </div>

                {/* Hero Carousel */}
                <div className="w-full mb-8">
                    <div className="flex flex-col md:flex-row gap-4 overflow-x-auto no-scrollbar snap-x">
                        {/* Banner 1 - Main */}
                        <div className="snap-center shrink-0 w-full md:w-[60%] lg:w-[65%] flex flex-col gap-4 rounded-2xl bg-slate-50 dark:bg-[#1c1f27] shadow-sm ring-1 ring-slate-200 dark:ring-transparent overflow-hidden group relative min-h-80">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200")`
                                }}
                            />
                            <div className="relative z-10 flex flex-col justify-end h-full p-8 gap-4 items-start">
                                <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                                    SỰ KIỆN HOT
                                </span>
                                <div>
                                    <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-2">
                                        SUMMER TECH FEST
                                    </h1>
                                    <p className="text-slate-200 text-base md:text-lg font-medium max-w-125">
                                        Đại tiệc công nghệ mùa hè. Giảm đến 50% cho các thiết bị hàng đầu từ Apple, Samsung, Sony.
                                    </p>
                                </div>
                                <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white text-primary hover:bg-slate-100 text-base font-bold transition-all shadow-lg mt-2">
                                    <span>Khám phá ngay</span>
                                </button>
                            </div>
                        </div>

                        {/* Banner 2 - Side */}
                        <div className="snap-center shrink-0 w-full md:w-[38%] lg:w-[33%] flex flex-col gap-4 rounded-2xl bg-slate-50 dark:bg-[#1c1f27] shadow-sm ring-1 ring-slate-200 dark:ring-transparent overflow-hidden relative min-h-80">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800")`
                                }}
                            />
                            <div className="relative z-10 flex flex-col justify-end h-full p-6 gap-3 items-start">
                                <span className="bg-orange-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                                    MỚI RA MẮT
                                </span>
                                <div>
                                    <h2 className="text-white text-2xl font-bold leading-tight">Laptop Gaming 2024</h2>
                                    <p className="text-slate-300 text-sm font-medium mt-1">
                                        Trải nghiệm hiệu năng đỉnh cao.
                                    </p>
                                </div>
                                <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white hover:bg-blue-600 text-sm font-bold transition-all">
                                    <span>Xem chi tiết</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Chips */}
                <div className="sticky top-18 z-40 -mx-4 md:mx-0 px-4 py-2 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-transparent md:border-none mb-8">
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setSelectedFilter(filter.id)}
                                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-all ${selectedFilter === filter.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                    : 'bg-white dark:bg-[#282e39] hover:bg-slate-100 dark:hover:bg-[#323945] ring-1 ring-slate-200 dark:ring-transparent'
                                    }`}
                            >
                                {filter.icon && (
                                    <span className={`material-symbols-outlined text-[18px] ${selectedFilter === filter.id ? 'text-white' : filter.color}`}>
                                        {filter.icon}
                                    </span>
                                )}
                                <span className={`text-sm font-medium leading-normal ${selectedFilter === filter.id ? 'text-white' : 'text-slate-700 dark:text-white'
                                    }`}>
                                    {filter.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Flash Sale Section */}
                <section className="flex flex-col gap-6 pt-4 mb-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl md:text-[32px] font-bold leading-tight flex items-center gap-2">
                                <span className="text-yellow-500">⚡</span>
                                <span className="bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                    Flash Sale
                                </span>
                            </h2>
                            <div className="flex gap-2 items-center bg-slate-200 dark:bg-white/10 px-3 py-1.5 rounded-md">
                                <span className="text-xs font-medium text-slate-600 dark:text-gray-300 uppercase tracking-wide">
                                    Flash Sale
                                </span>
                                <div className="flex gap-1 items-center">
                                    <span className="text-sm font-bold text-slate-700 dark:text-white">
                                        {String(timeLeft.hours).padStart(2, '0')}
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-gray-400">:</span>
                                    <span className="text-sm font-bold text-slate-700 dark:text-white">
                                        {String(timeLeft.minutes).padStart(2, '0')}
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-gray-400">:</span>
                                    <span className="text-sm font-bold text-slate-700 dark:text-white">
                                        {String(timeLeft.seconds).padStart(2, '0')}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Link
                            to="/deals/flash-sale"
                            className="text-primary text-sm font-bold hover:underline flex items-center gap-1"
                        >
                            Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {mockFlashSaleDeals.map((deal) => (
                            <div
                                key={deal.id}
                                className="flex flex-col gap-3 p-3 rounded-xl bg-white dark:bg-[#1c1f27] border border-slate-100 dark:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-slate-100 dark:bg-black/20">
                                    <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                                        -{deal.discount}%
                                    </div>
                                    <img
                                        src={deal.image}
                                        alt={deal.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-slate-900 dark:text-white text-sm font-medium line-clamp-2 min-h-10">
                                        {deal.name}
                                    </h3>
                                    <div className="flex items-end gap-2">
                                        <span className="text-primary text-base font-bold">
                                            {formatPrice(deal.salePrice)}
                                        </span>
                                        <span className="text-slate-400 text-xs line-through mb-0.5">
                                            {formatPrice(deal.originalPrice)}
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 mt-2 relative overflow-hidden">
                                        <div
                                            className="bg-linear-to-r from-red-500 to-orange-500 h-full rounded-full transition-all duration-300"
                                            style={{ width: `${getProgressWidth(deal.sold, deal.stock)}%` }}
                                        />
                                        <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white uppercase tracking-wider">
                                            {getProgressLabel(deal.sold, deal.stock)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Voucher Section */}
                <section className="flex flex-col gap-6 pt-8 mb-10">
                    <h2 className="text-2xl font-bold leading-tight px-2 text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500">confirmation_number</span>
                        Mã giảm giá cho bạn
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {mockVouchers.slice(0, 6).map((voucher) => (
                            <div
                                key={voucher.id}
                                className="flex bg-white dark:bg-[#282e39] rounded-lg overflow-hidden shadow-sm border border-slate-200 dark:border-transparent relative group"
                            >
                                <div className={`w-24 flex items-center justify-center flex-col gap-1 p-2 border-r border-dashed border-slate-300 dark:border-slate-600 ${getVoucherColorClasses(voucher.color)}`}>
                                    <span className="text-lg font-bold">{voucher.code}</span>
                                    <span className="text-xs">Voucher</span>
                                </div>
                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-lg">{voucher.title}</p>
                                        <p className="text-sm text-slate-500 dark:text-[#9da6b9]">{voucher.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs text-slate-400">HSD: {voucher.expiryDate}</span>
                                        <button className="text-primary text-sm font-bold bg-primary/10 hover:bg-primary/20 px-3 py-1 rounded transition-colors">
                                            Lưu mã
                                        </button>
                                    </div>
                                </div>

                                <div className="absolute top-0 bottom-0 left-23.5 w-4 -ml-2 flex flex-col justify-between">
                                    <div className="h-2 w-4 bg-background-light dark:bg-background-dark rounded-b-full"></div>
                                    <div className="h-2 w-4 bg-background-light dark:bg-background-dark rounded-t-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Regular Product Grid */}
                <section className="flex flex-col gap-6 pt-8 pb-10">
                    <h2 className="text-2xl font-bold leading-tight px-2 text-slate-900 dark:text-white">
                        Dành riêng cho bạn
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {mockPromoProducts.map((product) => (
                            <div
                                key={product.id}
                                className="flex flex-col gap-3 p-3 rounded-xl bg-white dark:bg-[#1c1f27] border border-slate-100 dark:border-transparent group cursor-pointer hover:shadow-lg transition-all"
                            >
                                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-slate-100 dark:bg-black/20 group-hover:opacity-90 transition-opacity">
                                    <div className="absolute top-2 right-2 p-1.5 bg-white/80 dark:bg-black/50 rounded-full cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[16px]">favorite</span>
                                    </div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                                        {product.category}
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white text-sm font-medium line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <div className="mt-auto flex flex-col">
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <span
                                                        key={i}
                                                        className={`material-symbols-outlined text-[14px] ${i < Math.floor(product.rating) ? 'fill-current' : ''
                                                            }`}
                                                    >
                                                        {i < Math.floor(product.rating) ? 'star' :
                                                            i < product.rating ? 'star_half' : 'star_border'}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-[10px] text-slate-500">({product.reviews})</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-slate-900 dark:text-white text-base font-bold">
                                                {formatPrice(product.price)}
                                            </span>
                                            <button className="size-8 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">add</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6">
                        <button className="px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-[#282e39] font-medium transition-colors">
                            Xem thêm sản phẩm
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Deals;
