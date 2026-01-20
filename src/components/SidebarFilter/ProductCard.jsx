import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { addToCart } = useCart();

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + '₫';
    };

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent Link navigation
        e.stopPropagation(); // Stop event bubbling

        // Initialize default variants
        const defaultVariant = product.variants && product.variants.length > 0 ? {
            selectedColor: product.variants[0].colors?.[0] || null,
            selectedStorage: product.variants[0].storages?.[0] || null,
            selectedRam: product.variants[0].ram?.[0] || null,
            selectedScreenSize: product.variants[0].screenSize?.[0] || null,
        } : null;

        addToCart(product, defaultVariant);

        // Optional: Show a brief notification
        alert(`Đã thêm ${product.name} vào giỏ hàng!`);
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarIcon key={i} className={styles.starFilled} />);
        }
        if (hasHalfStar) {
            stars.push(<StarHalfIcon key="half" className={styles.starFilled} />);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarOutlineIcon key={`empty-${i}`} className={styles.starEmpty} />);
        }
        return stars;
    };

    return (
        <Link to={`/product/${product.slug}`} className={styles.name}>
            <div
                className={styles.productCard}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {product.badges && product.badges.length > 0 && (
                    <div className={styles.badges}>
                        {product.isFlashSale && (
                            <span className={styles.badgeFlashSale}>⚡ FLASH SALE</span>
                        )}
                        {product.badges.includes('new') && (
                            <span className={styles.badgeNew}>MỚI</span>
                        )}
                        {product.badges.includes('sale') && product.discountPercent && (
                            <span className={styles.badgeSale}>GIẢM {product.discountPercent}%</span>
                        )}
                    </div>
                )}

                <div className={styles.imageWrapper}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className={styles.image}
                        loading="lazy"
                    />
                    {/* Hover Quick Actions */}
                    <div className={styles.hoverActions}>
                        <button className={styles.actionButton} title="Yêu thích">
                            <FavoriteIcon className={styles.actionIcon} />
                        </button>
                        <button className={styles.actionButton} title="So sánh">
                            <CompareArrowsIcon className={styles.actionIcon} />
                        </button>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.brandLabel}>{product.brand.toUpperCase()}</div>

                    {product.name}

                    <div className={styles.rating}>
                        <div className={styles.stars}>
                            {renderStars(product.rating)}
                        </div>
                        <span className={styles.reviewCount}>({product.reviewCount})</span>
                    </div>

                    <div className={styles.specs}>
                        {product.specs.cpu && (
                            <span className={styles.spec}>{product.specs.cpu}</span>
                        )}
                        {product.specs.gpu && (
                            <span className={styles.spec}>{product.specs.gpu}</span>
                        )}
                        {product.specs.ram && (
                            <span className={styles.spec}>{product.specs.ram}</span>
                        )}
                        {product.specs.chip && (
                            <span className={styles.spec}>{product.specs.chip}</span>
                        )}
                        {product.specs.camera && (
                            <span className={styles.spec}>{product.specs.camera}</span>
                        )}
                        {product.specs.screen && (
                            <span className={styles.spec}>{product.specs.screen}</span>
                        )}
                        {product.specs.storage && (
                            <span className={styles.spec}>{product.specs.storage}</span>
                        )}
                        {product.specs.type && (
                            <span className={styles.spec}>{product.specs.type}</span>
                        )}
                        {product.specs.noiseCancel && (
                            <span className={styles.spec}>{product.specs.noiseCancel}</span>
                        )}
                        {product.specs.battery && (
                            <span className={styles.spec}>{product.specs.battery}</span>
                        )}
                        {product.specs.features && (
                            <span className={styles.spec}>{product.specs.features}</span>
                        )}
                        {product.specs.resolution && (
                            <span className={styles.spec}>{product.specs.resolution}</span>
                        )}
                    </div>

                    <div className={styles.priceSection}>
                        <div className={styles.priceWrapper}>
                            <span className={styles.price}>{formatPrice(product.price)}</span>
                            {product.originalPrice && product.originalPrice !== product.price && (
                                <span className={styles.originalPrice}>
                                    {formatPrice(product.originalPrice)}
                                </span>
                            )}
                        </div>
                        <button
                            className={styles.addToCart}
                            onClick={handleAddToCart}
                            title="Thêm vào giỏ hàng"
                        >
                            <AddShoppingCartIcon className={styles.cartIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
