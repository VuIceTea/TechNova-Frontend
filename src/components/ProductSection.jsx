import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductSection({ products = [] }) {
    const scrollContainerRef = useRef(null);
    const { addToCart } = useCart();

    // Filter and limit products with high ratings (>= 4.5) to 10 products
    const highRatedProducts = products
        .filter(product => product.rating >= 4.5)
        .slice(0, 10);

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        e.stopPropagation();

        const defaultVariant = product.variants && product.variants.length > 0 ? {
            selectedColor: product.variants[0].colors?.[0] || null,
            selectedStorage: product.variants[0].storages?.[0] || null,
            selectedRam: product.variants[0].ram?.[0] || null,
            selectedScreenSize: product.variants[0].screenSize?.[0] || null,
        } : null;

        addToCart(product, defaultVariant);
        alert(`Đã thêm ${product.name} vào giỏ hàng!`);
    };

    const handleBuyNow = (e, product) => {
        e.preventDefault();
        e.stopPropagation();

        const defaultVariant = product.variants && product.variants.length > 0 ? {
            selectedColor: product.variants[0].colors?.[0] || null,
            selectedStorage: product.variants[0].storages?.[0] || null,
            selectedRam: product.variants[0].ram?.[0] || null,
            selectedScreenSize: product.variants[0].screenSize?.[0] || null,
        } : null;

        addToCart(product, defaultVariant);
        window.location.href = '/cart';
    };

    const handlePrevClick = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    const handleNextClick = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    return (
        <section className="w-full mx-auto max-w-350 px-2 md:px-4 mb-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-gray-900 dark:text-white text-2xl leading-tight font-bold tracking-[-0.015em]">Sản phẩm bán chạy</h2>
                <div className="flex items-center gap-2">
                    <button
                        className="w-8 h-8 bg-gray-200 dark:bg-[#282e39] rounded-full hover:bg-[#135bec] cursor-pointer transition-colors flex items-center justify-center"
                        onClick={handlePrevClick}
                    >
                        <ChevronLeftIcon className="text-white" fontSize="small" />
                    </button>

                    <button
                        className="w-8 h-8 bg-gray-200 dark:bg-[#282e39] rounded-full hover:bg-[#135bec] cursor-pointer transition-colors flex items-center justify-center"
                        onClick={handleNextClick}
                    >
                        <ChevronRightIcon className="text-gray-700 dark:text-white" fontSize="small" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {highRatedProducts.map((product) => {
                    const thumbnail = product.image;
                    const originalPrice = product.originalPrice || product.price;
                    const discountPercent = product.discountPercent || 0;
                    const discountedPrice = product.price;

                    return (
                        <Link
                            to={`/product/${product.slug}`}
                            className="group relative shrink-0 w-70 md:w-55 flex flex-col border border-solid border-gray-200 dark:border-[#282e39] rounded-lg bg-white dark:bg-[#1c1f27]/50 backdrop-blur-sm cursor-pointer hover:shadow-lg dark:hover:shadow-[#135bec]/5 transition-all duration-300 overflow-hidden"
                            key={product.id}
                        >
                            <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                                {product.isFlashSale && (
                                    <span
                                        className="w-fit text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-pulse whitespace-nowrap"
                                        style={{ background: 'linear-gradient(to right, #fbbf24, #f59e0b)' }}
                                    >
                                        ⚡ FLASH SALE
                                    </span>
                                )}
                                {product.badges?.includes('hot') && (
                                    <span
                                        className="w-fit text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap"
                                        style={{ background: 'linear-gradient(to right, #f97316, #dc2626)' }}
                                    >
                                        🔥 HOT
                                    </span>
                                )}
                                {product.badges?.includes('new') && (
                                    <span
                                        className="w-fit text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap"
                                        style={{ background: 'linear-gradient(to right, #3b82f6, #2563eb)' }}
                                    >
                                        ✨ MỚI
                                    </span>
                                )}
                                {product.discountPercent > 0 && (
                                    <span
                                        className="w-fit text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap"
                                        style={{ background: 'linear-gradient(to right, #dc2626, #b91c1c)' }}
                                    >
                                        -{product.discountPercent}%
                                    </span>
                                )}
                            </div>

                            <div className="relative w-full aspect-square bg-gray-100 dark:bg-white/5 overflow-hidden">
                                <img
                                    src={thumbnail}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Hover Action Buttons */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between px-4 pb-4">
                                    <button
                                        onClick={(e) => handleBuyNow(e, product)}
                                        className="bg-[#135bec] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 text-sm"
                                    >
                                        Mua ngay
                                    </button>
                                    <button
                                        onClick={(e) => handleAddToCart(e, product)}
                                        className="bg-white/80 hover:bg-white/60 text-gray-900 p-2 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                                        title="Thêm vào giỏ hàng"
                                    >
                                        <AddShoppingCartIcon fontSize="small" />
                                    </button>
                                </div>
                            </div>

                            <div className="px-4 py-4 flex flex-col gap-2">
                                <h3 className="text-gray-900 dark:text-white font-bold text-sm line-clamp-2 min-h-10">{product.name}</h3>
                                <span className="text-xs font-normal text-gray-600 dark:text-[#9da6b9] flex items-center gap-1 -mt-1">
                                    <StarIcon className="text-yellow-400 inline-block mb-0.5" fontSize="small" />
                                    {product.rating}
                                    <span>{product.reviewCount > 0 && `(${product.reviewCount} đánh giá)`}</span>
                                </span>
                                <div className="flex flex-col gap-1">
                                    {discountPercent > 0 ? (
                                        <>
                                            <span className="text-[12px] font-normal text-gray-500 dark:text-[#9da6b9] line-through">
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(originalPrice)}
                                            </span>
                                            <span className="text-[16px] font-bold text-red-500 dark:text-[#da2128]">
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discountedPrice)}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-[16px] font-bold text-red-500 dark:text-[#da2128]">
                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(originalPrice)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};