import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Bolt,
    LocalFireDepartment,
    Redeem,
    LocalShipping,
    ArrowForwardIos,
    ShoppingCart,
    Favorite,
    Star,
    StarHalf,
    StarBorder,
    Add,
    ConfirmationNumber
} from '@mui/icons-material';
import { getFlashSaleDeals, getPromoProducts, getCoupons, getPromoBanners } from '../services/dealsService';
import styles from './Promo.module.css';

const Promo = () => {
    const [flashSaleDeals, setFlashSaleDeals] = useState([]);
    const [promoProducts, setPromoProducts] = useState([]);
    const [coupons, setCoupons] = useState([]);
    const [banners, setBanners] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [countdown, setCountdown] = useState({ hours: 2, minutes: 15, seconds: 30 });

    useEffect(() => {
        const loadData = async () => {
            const [deals, products, couponData, bannerData] = await Promise.all([
                getFlashSaleDeals(),
                getPromoProducts(),
                getCoupons(),
                getPromoBanners()
            ]);

            setFlashSaleDeals(deals);
            setPromoProducts(products);
            setCoupons(couponData);
            setBanners(bannerData);
        };

        loadData();
    }, []);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                let { hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="text-yellow-400 text-[14px]" />);
        }

        if (hasHalfStar) {
            stars.push(<StarHalf key="half" className="text-yellow-400 text-[14px]" />);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarBorder key={`empty-${i}`} className="text-yellow-400 text-[14px]" />);
        }

        return stars;
    };

    const getProgressWidth = (sold, stock) => {
        const total = sold + stock;
        return Math.round((sold / total) * 100);
    };

    const getProgressLabel = (sold, stock) => {
        const progress = getProgressWidth(sold, stock);
        if (progress >= 90) return 'Sắp cháy hàng';
        if (progress >= 50) return `Đã bán ${sold}`;
        if (stock <= 5) return `Còn ${stock} sản phẩm`;
        return 'Vừa mở bán';
    };

    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN') + '₫';
    };

    return (
        <main className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col max-w-350 w-full mx-auto flex-1 gap-8 px-2 md:px-4 py-5">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2">
                    <Link
                        to="/"
                        className="text-slate-500 dark:text-[#9da6b9] hover:text-primary text-sm font-medium leading-normal"
                    >
                        Trang chủ
                    </Link>
                    <span className="text-slate-500 dark:text-[#9da6b9] text-sm font-medium leading-normal">/</span>
                    <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal">Khuyến mãi</span>
                </div>

                {/* Hero Carousel */}
                <div className="w-full">
                    <div className="flex flex-col md:flex-row gap-4 overflow-x-auto no-scrollbar snap-x">
                        {banners.map((banner, index) => (
                            <div
                                key={banner.id}
                                className={`snap-center shrink-0 w-full ${index === 0 ? 'md:w-[60%] lg:w-[65%]' : 'md:w-[38%] lg:w-[33%]'
                                    } flex flex-col gap-4 rounded-2xl bg-slate-50 dark:bg-[#1c1f27] shadow-sm ring-1 ring-slate-200 dark:ring-transparent overflow-hidden group relative min-h-[320px]`}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${banner.image})`
                                    }}
                                />
                                <div className="relative z-10 flex flex-col justify-end h-full p-8 gap-4 items-start">
                                    <span className={`${banner.badgeColor === 'orange' ? 'bg-orange-500/90' : 'bg-primary/90'
                                        } text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm`}>
                                        {banner.badge}
                                    </span>
                                    <div>
                                        <h1 className={`text-white ${index === 0 ? 'text-3xl md:text-5xl' : 'text-2xl'
                                            } font-bold leading-tight mb-2`}>
                                            {banner.title}
                                        </h1>
                                        <p className={`text-slate-200 ${index === 0 ? 'text-base md:text-lg' : 'text-sm'
                                            } font-medium ${index === 0 ? 'max-w-[500px]' : ''}`}>
                                            {banner.subtitle}
                                        </p>
                                    </div>
                                    <button className={`flex items-center justify-center rounded-lg ${index === 0 ? 'h-12 px-6 bg-white text-primary hover:bg-slate-100' : 'h-10 px-4 bg-primary text-white hover:bg-blue-600'
                                        } text-${index === 0 ? 'base' : 'sm'} font-bold transition-all shadow-lg mt-2`}>
                                        <span>{index === 0 ? 'Khám phá ngay' : 'Xem chi tiết'}</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filters */}
                <div className="sticky top-14 z-40 -mx-4 md:mx-0 px-4 py-2 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-transparent md:border-none">
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-transform active:scale-95 ${activeFilter === 'all'
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-white dark:bg-[#282e39] hover:bg-slate-100 dark:hover:bg-[#323945] ring-1 ring-slate-200 dark:ring-transparent'
                                }`}
                        >
                            <span className="text-sm font-medium leading-normal">Tất cả</span>
                        </button>
                        <button
                            onClick={() => setActiveFilter('flash')}
                            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-all ${activeFilter === 'flash'
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-white dark:bg-[#282e39] hover:bg-slate-100 dark:hover:bg-[#323945] ring-1 ring-slate-200 dark:ring-transparent'
                                }`}
                        >
                            <Bolt className={`${activeFilter === 'flash' ? 'text-white' : 'text-yellow-500'} text-[18px]`} />
                            <span className={`${activeFilter === 'flash' ? 'text-white' : 'text-slate-700 dark:text-white'} text-sm font-medium leading-normal`}>
                                Flash Sale
                            </span>
                        </button>
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#282e39] hover:bg-slate-100 dark:hover:bg-[#323945] ring-1 ring-slate-200 dark:ring-transparent pl-4 pr-4 transition-all">
                            <LocalFireDepartment className="text-red-500 text-[18px]" />
                            <span className="text-slate-700 dark:text-white text-sm font-medium leading-normal">Giảm giá sốc</span>
                        </button>
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#282e39] hover:bg-slate-100 dark:hover:bg-[#323945] ring-1 ring-slate-200 dark:ring-transparent pl-4 pr-4 transition-all">
                            <Redeem className="text-green-500 text-[18px]" />
                            <span className="text-slate-700 dark:text-white text-sm font-medium leading-normal">Mua 1 tặng 1</span>
                        </button>
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#282e39] hover:bg-slate-100 dark:hover:bg-[#323945] ring-1 ring-slate-200 dark:ring-transparent pl-4 pr-4 transition-all">
                            <LocalShipping className="text-blue-400 text-[18px]" />
                            <span className="text-slate-700 dark:text-white text-sm font-medium leading-normal">Miễn phí vận chuyển</span>
                        </button>
                    </div>
                </div>

                {/* Flash Sale Section */}
                <section className="flex flex-col gap-6 pt-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl md:text-[32px] font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                                ⚡ Flash Sale
                            </h2>
                            <div className="flex gap-1 items-center bg-slate-200 dark:bg-white/10 px-3 py-1 rounded-md">
                                <span className="text-sm font-bold text-slate-700 dark:text-white">
                                    {String(countdown.hours).padStart(2, '0')}
                                </span>
                                <span className="text-xs text-slate-500 dark:text-gray-400">:</span>
                                <span className="text-sm font-bold text-slate-700 dark:text-white">
                                    {String(countdown.minutes).padStart(2, '0')}
                                </span>
                                <span className="text-xs text-slate-500 dark:text-gray-400">:</span>
                                <span className="text-sm font-bold text-slate-700 dark:text-white">
                                    {String(countdown.seconds).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                        <Link
                            to="/category"
                            className="text-primary text-sm font-bold hover:underline flex items-center gap-1"
                        >
                            Xem tất cả <ArrowForwardIos className="text-sm" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {flashSaleDeals.map((deal) => (
                            <div
                                key={deal.id}
                                className="flex flex-col gap-3 p-3 rounded-xl bg-white dark:bg-[#1c1f27] border border-slate-100 dark:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
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
                                    <h3 className="text-slate-900 dark:text-white text-sm font-medium line-clamp-2 min-h-[40px]">
                                        {deal.name}
                                    </h3>
                                    <div className="flex items-end gap-2">
                                        <span className="text-primary text-base font-bold">{formatPrice(deal.salePrice)}</span>
                                        <span className="text-slate-400 text-xs line-through mb-0.5">
                                            {formatPrice(deal.originalPrice)}
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 mt-2 relative overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-red-500 to-orange-500 h-full rounded-full"
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

                {/* Coupon Section */}
                <section className="flex flex-col gap-6 pt-8">
                    <h2 className="text-2xl font-bold leading-tight px-2 text-slate-900 dark:text-white flex items-center gap-2">
                        <ConfirmationNumber className="text-green-500" />
                        Mã giảm giá cho bạn
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {coupons.map((coupon) => (
                            <div
                                key={coupon.id}
                                className="flex bg-white dark:bg-[#282e39] rounded-lg overflow-hidden shadow-sm border border-slate-200 dark:border-transparent relative group"
                            >
                                <div className={`w-24 ${coupon.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                                    coupon.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' :
                                        'bg-purple-100 dark:bg-purple-900/30'
                                    } flex items-center justify-center flex-col gap-1 p-2 border-r border-dashed border-slate-300 dark:border-slate-600`}>
                                    <span className={`${coupon.color === 'blue' ? 'text-primary' :
                                        coupon.color === 'orange' ? 'text-orange-500' :
                                            'text-purple-500'
                                        } text-lg font-bold`}>
                                        {coupon.code}
                                    </span>
                                    <span className={`text-xs ${coupon.color === 'blue' ? 'text-slate-500 dark:text-blue-200' :
                                        coupon.color === 'orange' ? 'text-slate-500 dark:text-orange-200' :
                                            'text-slate-500 dark:text-purple-200'
                                        }`}>
                                        Voucher
                                    </span>
                                </div>
                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-lg">{coupon.title}</p>
                                        <p className="text-sm text-slate-500 dark:text-[#9da6b9]">{coupon.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs text-slate-400">HSD: {coupon.expiryDate}</span>
                                        <button className="text-primary text-sm font-bold bg-primary/10 hover:bg-primary/20 px-3 py-1 rounded transition-colors">
                                            Lưu mã
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute top-0 bottom-0 left-[94px] w-4 -ml-2 flex flex-col justify-between">
                                    <div className="h-2 w-4 bg-background-light dark:bg-background-dark rounded-b-full" />
                                    <div className="h-2 w-4 bg-background-light dark:bg-background-dark rounded-t-full" />
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
                        {promoProducts.map((product) => (
                            <div
                                key={product.id}
                                className="flex flex-col gap-3 p-3 rounded-xl bg-white dark:bg-[#1c1f27] border border-slate-100 dark:border-transparent group"
                            >
                                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-slate-100 dark:bg-black/20 group-hover:opacity-90 transition-opacity">
                                    <div className="absolute top-2 right-2 p-1.5 bg-white/80 dark:bg-black/50 rounded-full cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                        <Favorite className="text-[16px]" />
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
                                                {renderStars(product.rating)}
                                            </div>
                                            <span className="text-[10px] text-slate-500">({product.reviews})</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-slate-900 dark:text-white text-base font-bold">
                                                {formatPrice(product.price)}
                                            </span>
                                            <button className="size-8 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors">
                                                <Add className="text-[18px]" />
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
        </main>
    );
};

export default Promo;
