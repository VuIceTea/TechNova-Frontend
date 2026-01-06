import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarIcon from '@mui/icons-material/Star';

export default function ProductSection({ products }) {
    const scrollContainerRef = useRef(null);

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
                <h2 className="text-white text-2xl leading-tight font-bold tracking-[-0.015em]">Sản phẩm bán chạy</h2>
                <div className="flex items-center gap-2">
                    <button
                        className="w-8 h-8 bg-[#282e39] rounded-full hover:bg-[#135bec] cursor-pointer transition-colors flex items-center justify-center"
                        onClick={handlePrevClick}
                    >
                        <ChevronLeftIcon className="text-white" fontSize="small" />
                    </button>

                    <button
                        className="w-8 h-8 bg-[#282e39] rounded-full hover:bg-[#135bec] cursor-pointer transition-colors flex items-center justify-center"
                        onClick={handleNextClick}
                    >
                        <ChevronRightIcon className="text-white" fontSize="small" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {products.map((product) => {
                    const thumbnail = product.image;
                    const originalPrice = product.originalPrice || product.price;
                    const discountPercent = product.discountPercent || 0;
                    const discountedPrice = product.price;

                    return (
                        <Link
                            to={`/product/${product.slug}`}
                            className="relative shrink-0 w-70 md:w-55 flex flex-col border border-solid border-[#282e39] rounded-lg bg-[#1c1f27]/50 backdrop-blur-sm cursor-pointer hover:bg-[#135bec]/10 transition-colors overflow-hidden"
                            key={product.id}
                        >
                            <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                                {product.badges?.includes('hot') && (
                                    <span
                                        className="text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg"
                                        style={{ background: 'linear-gradient(to right, #f97316, #dc2626)' }}
                                    >
                                        🔥 HOT
                                    </span>
                                )}
                                {product.badges?.includes('new') && (
                                    <span
                                        className="text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg"
                                        style={{ background: 'linear-gradient(to right, #3b82f6, #2563eb)' }}
                                    >
                                        ✨ MỚI
                                    </span>
                                )}
                                {product.discountPercent > 0 && (
                                    <span
                                        className="text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg"
                                        style={{ background: 'linear-gradient(to right, #dc2626, #b91c1c)' }}
                                    >
                                        -{product.discountPercent}%
                                    </span>
                                )}
                            </div>

                            <div className="w-full aspect-square bg-white/5 overflow-hidden">
                                <img
                                    src={thumbnail}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="px-4 py-4 flex flex-col gap-2">
                                <h3 className="text-white font-bold text-sm line-clamp-2 min-h-10">{product.name}</h3>
                                <span className="text-xs font-normal text-[#9da6b9] flex items-center gap-1">
                                    <StarIcon className="text-yellow-400 inline-block mb-0.5" fontSize="small" />
                                    {product.rating}
                                    <span>{product.reviewCount > 0 && `(${product.reviewCount} đánh giá)`}</span>
                                </span>
                                <div className="flex flex-col gap-1">
                                    {discountPercent > 0 ? (
                                        <>
                                            <span className="text-[12px] font-normal text-[#9da6b9] line-through">
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(originalPrice)}
                                            </span>
                                            <span className="text-[16px] font-medium text-white">
                                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discountedPrice)}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-[16px] font-medium text-white">
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