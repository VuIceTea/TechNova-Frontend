import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ProductDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    useEffect(() => {
        const foundProduct = mockProducts.find(p => p.slug === slug);
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedVariant(foundProduct.variants?.[0] || null);
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (product) {
            checkScrollButtons();
            const container = scrollContainerRef.current;
            if (container) {
                container.addEventListener('scroll', checkScrollButtons);
                window.addEventListener('resize', checkScrollButtons);
                return () => {
                    container.removeEventListener('scroll', checkScrollButtons);
                    window.removeEventListener('resize', checkScrollButtons);
                };
            }
        }
    }, [product]);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Đang tải...</div>;
    }

    const handleQuantityChange = (delta) => {
        const newQty = Math.max(1, Math.min(product.stock, quantity + delta));
        setQuantity(newQty);
    };

    const handleAddToCart = () => {
        console.log('Add to cart:', { product, quantity, variant: selectedVariant });
        // TODO: Implement cart functionality
    };

    const getCategoryName = () => {
        const categoryNames = {
            'laptop-gaming': 'Laptop Gaming',
            'macbook': 'MacBook',
            'smartphone': 'Điện thoại',
            'audio': 'Tai nghe & Loa',
            'smartwatch': 'Đồng hồ thông minh',
            'smart-home': 'Nhà thông minh'
        };
        return categoryNames[product.category] || 'Sản phẩm';
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarIcon key={`full-${i}`} className="text-yellow-500" style={{ fontSize: 20 }} />);
        }
        if (hasHalfStar) {
            stars.push(<StarHalfIcon key="half" className="text-yellow-500" style={{ fontSize: 20 }} />);
        }
        const remaining = 5 - Math.ceil(rating);
        for (let i = 0; i < remaining; i++) {
            stars.push(<StarOutlineIcon key={`empty-${i}`} className="text-yellow-500" style={{ fontSize: 20 }} />);
        }
        return stars;
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + '₫';
    };

    const relatedProducts = mockProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 8);

    const gallery = product.gallery || [product.image];

    return (
        <div className="min-h-screen flex flex-col bg-[#f6f6f8] dark:bg-[#101622]">
            {/* Main Content */}
            <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
                    <Link to="/" className="text-gray-500 dark:text-[#9da6b9] hover:text-[#135bec] transition-colors">
                        Trang chủ
                    </Link>
                    <span className="material-symbols-outlined text-[16px] text-gray-400">chevron_right</span>
                    <Link
                        to={`/category?category=${product.category}`}
                        className="text-gray-500 dark:text-[#9da6b9] hover:text-[#135bec] transition-colors"
                    >
                        {getCategoryName()}
                    </Link>
                    <span className="material-symbols-outlined text-[16px] text-gray-400">chevron_right</span>
                    <span className="text-gray-900 dark:text-white font-medium">{product.name}</span>
                </div>

                {/* Product Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 pb-12 border-b border-gray-200 dark:border-[#282e39]">
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="w-full aspect-4/3 rounded-xl overflow-hidden bg-gray-100 dark:bg-[#1a2230] border border-gray-200 dark:border-[#282e39] relative group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                                style={{ backgroundImage: `url('${gallery[selectedImage]}')` }}
                            />
                            {product.discountPercent > 0 && (
                                <div className="absolute top-4 left-4">
                                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        -{product.discountPercent}%
                                    </span>
                                </div>
                            )}
                            {/* Navigation Buttons */}
                            {gallery.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setSelectedImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeftIcon />
                                    </button>
                                    <button
                                        onClick={() => setSelectedImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        aria-label="Next image"
                                    >
                                        <ChevronRightIcon />
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {gallery.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`w-24 h-24 shrink-0 rounded-lg border-2 ${selectedImage === idx ? 'border-[#135bec]' : 'border-transparent hover:border-gray-400'
                                        } overflow-hidden p-1 bg-white dark:bg-[#1a2230] transition-all`}
                                >
                                    <div
                                        className="w-full h-full rounded bg-cover bg-center"
                                        style={{ backgroundImage: `url('${img}')` }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Info */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-[#135bec] text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                                    Hàng chính hãng
                                </span>
                                <div className="flex items-center gap-1">
                                    <StarIcon className="text-yellow-500" style={{ fontSize: 16 }} />
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {product.rating} ({product.reviewCount} đánh giá)
                                    </span>
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                                {product.name}
                            </h1>
                        </div>

                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-bold text-[#135bec]">{formatPrice(product.price)}</span>
                            {product.originalPrice && (
                                <span className="text-xl text-gray-500 line-through">
                                    {formatPrice(product.originalPrice)}
                                </span>
                            )}
                        </div>

                        <p className="text-base text-gray-600 dark:text-gray-400 font-body leading-relaxed">
                            {product.description}
                        </p>

                        {/* Variants */}
                        {product.variants && product.variants.length > 0 && (
                            <div className="space-y-4">
                                {product.variants[0].colors && (
                                    <div>
                                        <span className="text-sm font-bold text-gray-900 dark:text-white block mb-3">
                                            Màu sắc: <span className="text-gray-500 font-normal">
                                                {selectedVariant?.colors?.[0]?.name || 'Chọn màu'}
                                            </span>
                                        </span>
                                        <div className="flex gap-3">
                                            {product.variants[0].colors?.map((color, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setSelectedVariant({ ...selectedVariant, selectedColor: color })}
                                                    className={`w-10 h-10 rounded-full ${selectedVariant?.selectedColor?.code === color.code
                                                        ? 'ring-2 ring-offset-2 ring-[#135bec] ring-offset-[#f6f6f8] dark:ring-offset-[#101622]'
                                                        : 'hover:ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-600 ring-offset-[#f6f6f8] dark:ring-offset-[#101622]'
                                                        } transition-all`}
                                                    style={{ backgroundColor: color.code }}
                                                    title={color.name}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {product.variants[0].storages && (
                                    <div>
                                        <span className="text-sm font-bold text-gray-900 dark:text-white block mb-3">
                                            Dung lượng:
                                        </span>
                                        <div className="grid grid-cols-4 gap-3">
                                            {product.variants[0].storages?.map((storage, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setSelectedVariant({ ...selectedVariant, selectedStorage: storage })}
                                                    className={`py-3 px-2 rounded-lg border ${selectedVariant?.selectedStorage === storage
                                                        ? 'border-[#135bec] bg-[#135bec]/10 text-[#135bec] font-bold'
                                                        : 'border-gray-300 dark:border-gray-700 hover:border-[#135bec] bg-white dark:bg-[#1a2230]'
                                                        } text-sm font-medium text-center transition-all`}
                                                >
                                                    {storage}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                className='bg-[#135bec] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#135bec]/25'
                            >
                                Mua ngay
                            </button>
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-[#135bec] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#135bec]/25"
                            >
                                <ShoppingCartIcon />
                                Thêm vào giỏ hàng
                            </button>
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className={`size-12 rounded-lg border ${isFavorite
                                    ? 'border-red-500 text-red-500'
                                    : 'border-gray-300 dark:border-gray-700 text-gray-500 hover:text-red-500 hover:border-red-500'
                                    } flex items-center justify-center transition-colors bg-white dark:bg-[#1a2230]`}
                            >
                                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                            </button>
                        </div>

                        {/* Short Specs */}
                        <div className="bg-gray-100 dark:bg-[#1a2230] rounded-xl p-5 mt-2">
                            <ul className="space-y-3">
                                {product.shortSpecs?.map((spec, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-[#135bec] text-[20px] mt-0.5">
                                            {spec.icon}
                                        </span>
                                        <div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 block">
                                                {spec.label}
                                            </span>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                {spec.value}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Specs & Desc */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-[#282e39] pb-2">
                                Đặc điểm nổi bật
                            </h3>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 font-body">
                                <div dangerouslySetInnerHTML={{ __html: product.fullDescription }} />
                            </div>
                        </section>

                        {/* Technical Specs Table */}
                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-[#282e39] pb-2">
                                Thông số kỹ thuật
                            </h3>
                            <div className="border border-gray-200 dark:border-[#282e39] rounded-xl overflow-hidden">
                                <table className="w-full text-sm text-left font-body">
                                    <tbody className="divide-y divide-gray-200 dark:divide-[#282e39]">
                                        {product.fullSpecs?.map((spec, idx) => (
                                            <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-[#1a2230]/50' : 'bg-white dark:bg-transparent'}>
                                                <th className="px-6 py-4 font-medium text-gray-900 dark:text-white w-1/3">
                                                    {spec.label}
                                                </th>
                                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                                    {spec.value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>

                    {/* Reviews Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2">
                                Đánh giá & Nhận xét
                            </h3>
                            <div className="bg-gray-100 dark:bg-[#1a2230] rounded-xl p-6 mb-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex flex-col">
                                        <span className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter">
                                            {product.rating}
                                        </span>
                                        <div className="flex text-yellow-500 my-1">
                                            {renderStars(product.rating)}
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Dựa trên {product.reviewCount} nhận xét
                                        </span>
                                    </div>
                                </div>

                                {/* Rating Bars */}
                                {product.ratingDistribution && (
                                    <div className="space-y-2">
                                        {[5, 4, 3, 2, 1].map(star => (
                                            <div key={star} className="flex items-center gap-2 text-sm">
                                                <span className="w-3">{star}</span>
                                                <span className="material-symbols-outlined text-[14px] text-gray-400">star</span>
                                                <div className="flex-1 h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-[#135bec] rounded-full"
                                                        style={{ width: `${product.ratingDistribution[star]}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs text-gray-500 w-8 text-right">
                                                    {product.ratingDistribution[star]}%
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* User Reviews List */}
                            {product.reviews && product.reviews.length > 0 && (
                                <div className="space-y-4">
                                    {product.reviews.slice(0, 2).map((review, idx) => (
                                        <div key={idx} className="border-b border-gray-200 dark:border-[#282e39] pb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <div className={`size-8 rounded-full ${review.avatarBg} flex items-center justify-center ${review.avatarColor} font-bold text-xs`}>
                                                        {review.avatar}
                                                    </div>
                                                    <span className="font-bold text-sm text-gray-900 dark:text-white">
                                                        {review.name}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-gray-500">{review.date}</span>
                                            </div>
                                            <div className="flex text-yellow-500 mb-2">
                                                {renderStars(review.rating)}
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 font-body">
                                                {review.comment}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <button className="w-full mt-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                Xem tất cả đánh giá
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-20 mb-12 relative">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Sản phẩm tương tự
                        </h3>

                        {/* Navigation Buttons */}
                        {showLeftArrow && (
                            <button
                                onClick={scrollLeft}
                                className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#1a2230] border border-gray-200 dark:border-[#282e39] rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-[#282e39] transition-colors"
                                style={{ marginTop: '1.5rem' }}
                            >
                                <ChevronLeftIcon className="text-gray-700 dark:text-white" />
                            </button>
                        )}

                        {showRightArrow && (
                            <button
                                onClick={scrollRight}
                                className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#1a2230] border border-gray-200 dark:border-[#282e39] rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-[#282e39] transition-colors"
                                style={{ marginTop: '1.5rem' }}
                            >
                                <ChevronRightIcon className="text-gray-700 dark:text-white" />
                            </button>
                        )}

                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        >
                            {relatedProducts.map(relatedProduct => (
                                <Link
                                    key={relatedProduct.id}
                                    to={`/product/${relatedProduct.slug}`}
                                    className="group flex flex-col rounded-xl bg-white dark:bg-[#1a2230] border border-gray-200 dark:border-[#282e39] hover:border-[#135bec]/50 transition-all hover:shadow-lg dark:hover:shadow-[#135bec]/5 overflow-hidden shrink-0 w-70"
                                >
                                    <div className="aspect-square bg-gray-100 dark:bg-[#111318] relative overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                                            style={{ backgroundImage: `url('${relatedProduct.image}')` }}
                                        />
                                        {relatedProduct.badges?.includes('hot') && (
                                            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                                HOT
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-4 group-hover:bg-gray-50 dark:group-hover:bg-[#282e39] transition-colors">
                                        <h4 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1">
                                            {relatedProduct.name}
                                        </h4>
                                        <div className="flex items-center gap-1 mt-1">
                                            <StarIcon className="text-yellow-500" style={{ fontSize: 14 }} />
                                            <span className="text-xs text-gray-500">{relatedProduct.rating}</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className="text-lg font-bold text-[#135bec]">
                                                {formatPrice(relatedProduct.price)}
                                            </span>
                                            <button className="size-8 rounded-full bg-[#135bec]/10 text-[#135bec] flex items-center justify-center hover:bg-[#135bec] hover:text-white transition-colors">
                                                <AddShoppingCartIcon style={{ fontSize: 18 }} />
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ProductDetail;
