import React from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarIcon from '@mui/icons-material/Star';

export default function ProductSection({ products }) {
    const handlePrevClick = () => {
        // Logic for previous button click
    }

    const handleNextClick = () => {
        // Logic for next button click
    }

    return (
        <section className="w-full mx-auto max-w-350 px-2 md:px-4 mb-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-white text-2xl leading-tight font-bold tracking-[-0.015em]">Sản phẩm bán chạy</h2>
                <div className="flex items-center gap-2">
                    <button
                        className="w-8 h-8 bg-[#282e39] rounded-full hover:bg-[#135bec] cursor-pointer transition-colors"
                        onClick={handlePrevClick}
                    >
                        <ChevronLeftIcon className="text-white" fontSize="small" />
                    </button>

                    <button
                        className="w-8 h-8 bg-[#282e39] rounded-full hover:bg-[#135bec] cursor-pointer transition-colors"
                        onClick={handleNextClick}
                    >
                        <ChevronRightIcon className="text-white" fontSize="small" />
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 overflow-hidden">
                {products.map((product) => {
                    const thumbnail = product.variants[0].images[0];
                    const variant = product.variants[0];
                    const originalPrice = variant.originalPrice;
                    const discountPercent = variant.discountPercent || 0;
                    const discountedPrice = originalPrice * (1 - discountPercent / 100);

                    return (
                        <div
                            className="relative gap-4 flex flex-col border border-solid border-[#282e39] rounded-lg bg-[#1c1f27]/50 backdrop-blur-sm cursor-pointer hover:bg-[#135bec]/10 transition-colors overflow-hidden"
                            key={product.id}
                        >
                            {variant.discountPercent > 0 && (
                                <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded z-10">
                                    -{variant.discountPercent}%
                                </span>
                            )}

                            <img
                                src={thumbnail}
                                alt={product.name}
                                className="w-full object-cover"
                            />

                            <div className="px-4 pb-4 flex flex-col gap-2">
                                <h3 className="text-white font-bold text-sm line-clamp-1">{product.name}</h3>
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
                        </div>
                    );
                })}
            </div>
        </section>
    );
};