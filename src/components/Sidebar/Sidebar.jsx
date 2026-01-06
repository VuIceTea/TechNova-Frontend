import { useState } from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import styles from './Sidebar.module.css';

const Sidebar = ({ filters, onFilterChange }) => {
    const [priceRange, setPriceRange] = useState(filters.priceRange);
    const [minPrice, setMinPrice] = useState(filters.priceRange[0]);
    const [maxPrice, setMaxPrice] = useState(filters.priceRange[1]);

    const categories = [
        { id: 'all', label: 'Tất cả sản phẩm' },
        { id: 'laptop-gaming', label: 'Laptop Gaming' },
        { id: 'laptop-van-phong', label: 'Laptop Văn phòng' },
        { id: 'macbook', label: 'Macbook' },
        { id: 'laptop-do-hoa', label: 'Laptop Đồ họa' },
        { id: 'smartphone', label: 'Điện thoại' },
        { id: 'audio', label: 'Âm thanh' },
        { id: 'smartwatch', label: 'Đồng hồ thông minh' },
        { id: 'smart-home', label: 'Nhà thông minh' }
    ];

    const brands = [
        { id: 'Apple', label: 'Apple', count: 5 },
        { id: 'Samsung', label: 'Samsung', count: 4 },
        { id: 'Asus', label: 'Asus', count: 3 },
        { id: 'MSI', label: 'MSI', count: 2 },
        { id: 'Lenovo', label: 'Lenovo', count: 2 },
        { id: 'Acer', label: 'Acer', count: 2 },
        { id: 'HP', label: 'HP', count: 2 },
        { id: 'Dell', label: 'Dell', count: 1 },
        { id: 'Google', label: 'Google', count: 2 },
        { id: 'Xiaomi', label: 'Xiaomi', count: 2 },
        { id: 'Sony', label: 'Sony', count: 1 },
        { id: 'JBL', label: 'JBL', count: 1 },
        { id: 'Bose', label: 'Bose', count: 1 },
        { id: 'Garmin', label: 'Garmin', count: 1 },
        { id: 'Huawei', label: 'Huawei', count: 1 },
        { id: 'Philips', label: 'Philips', count: 1 },
        { id: 'Amazon', label: 'Amazon', count: 1 },
        { id: 'TP-Link', label: 'TP-Link', count: 1 },
        { id: 'Ring', label: 'Ring', count: 1 }
    ];

    const ramOptions = ['8GB', '16GB', '32GB', '64GB'];

    const handleBrandToggle = (brandId) => {
        const newBrands = filters.brands.includes(brandId)
            ? filters.brands.filter(b => b !== brandId)
            : [...filters.brands, brandId];
        onFilterChange({ brands: newBrands });
    };

    const handleRamToggle = (ram) => {
        const newRam = filters.ram.includes(ram)
            ? filters.ram.filter(r => r !== ram)
            : [...filters.ram, ram];
        onFilterChange({ ram: newRam });
    };

    const handleSliderChange = (e) => {
        const value = parseInt(e.target.value);
        setMaxPrice(value);
        setPriceRange([minPrice, value]);
    };

    const handleMinPriceChange = (e) => {
        const value = parseInt(e.target.value.replace(/\./g, '')) || 0;
        setMinPrice(value);
        setPriceRange([value, maxPrice]);
        onFilterChange({ priceRange: [value, maxPrice] });
    };

    const handleMaxPriceChange = (e) => {
        const value = parseInt(e.target.value.replace(/\./g, '')) || 0;
        setMaxPrice(value);
        setPriceRange([minPrice, value]);
        onFilterChange({ priceRange: [minPrice, value] });
    };

    const applyPriceFilter = () => {
        onFilterChange({ priceRange });
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price);
    };

    return (
        <aside className={styles.sidebar}>
            {/* Categories */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    <CategoryIcon className={styles.titleIcon} />
                    Danh mục
                </h3>
                <div className={styles.categoryList}>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`${styles.categoryItem} ${filters.category === category.id ? styles.active : ''}`}
                            onClick={() => onFilterChange({ category: category.id })}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.divider}></div>

            {/* Price Range */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Mức giá
                </h3>
                <div className={styles.priceRange}>
                    <div className={styles.sliderContainer}>
                        <input
                            type="range"
                            min="0"
                            max="100000000"
                            step="1000000"
                            value={maxPrice}
                            onChange={handleSliderChange}
                            onMouseUp={applyPriceFilter}
                            onTouchEnd={applyPriceFilter}
                            className={styles.slider}
                        />
                        <div className={styles.sliderTrack}>
                            <div
                                className={styles.sliderFill}
                                style={{ width: `${(maxPrice / 50000000) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                    <div className={styles.priceInputs}>
                        <div className={styles.priceInputWrapper}>
                            <span className={styles.currency}>₫</span>
                            <input
                                type="text"
                                value={formatPrice(minPrice)}
                                onChange={handleMinPriceChange}
                                className={styles.priceInput}
                            />
                        </div>
                        <span className={styles.priceSeparator}>-</span>
                        <div className={styles.priceInputWrapper}>
                            <span className={styles.currency}>₫</span>
                            <input
                                type="text"
                                value={formatPrice(maxPrice)}
                                onChange={handleMaxPriceChange}
                                className={styles.priceInput}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.divider}></div>

            {/* Brands */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Thương hiệu
                </h3>
                <div className={styles.checkboxList}>
                    {brands.map(brand => (
                        <label key={brand.id} className={styles.checkboxItem}>
                            <input
                                type="checkbox"
                                checked={filters.brands.includes(brand.id)}
                                onChange={() => handleBrandToggle(brand.id)}
                                className={styles.checkbox}
                            />
                            <span className={styles.checkboxLabel}>{brand.label}</span>
                            <span className={styles.brandCount}>{brand.count}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className={styles.divider}></div>

            {/* RAM */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    RAM
                </h3>
                <div className={styles.buttonGroup}>
                    {ramOptions.map(ram => (
                        <button
                            key={ram}
                            className={`${styles.filterButton} ${filters.ram.includes(ram) ? styles.active : ''}`}
                            onClick={() => handleRamToggle(ram)}
                        >
                            {ram}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
