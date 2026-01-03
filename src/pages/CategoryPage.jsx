import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';
import Breadcrumb from '../components/SidebarFilter/Breadcrumb';
import Sidebar from '../components/Sidebar/Sidebar';
import ProductCard from '../components/SidebarFilter/ProductCard';
import Pagination from '../components/SidebarFilter/Pagination';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        category: searchParams.get('category') || 'all',
        brands: [],
        priceRange: [0, 80000000],
        ram: [],
        sortBy: 'newest'
    });

    const productsPerPage = 9;

    // Update filters when URL search params change
    useEffect(() => {
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl && categoryFromUrl !== filters.category) {
            setFilters(prev => ({ ...prev, category: categoryFromUrl }));
        }
    }, [searchParams]);

    useEffect(() => {
        let products = filters.category === 'all'
            ? [...mockProducts]
            : mockProducts.filter(p => p.category === filters.category);

        // Filter by brands
        if (filters.brands.length > 0) {
            products = products.filter(p => filters.brands.includes(p.brand));
        }

        // Filter by price range
        products = products.filter(p =>
            p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
        );

        // Filter by RAM
        if (filters.ram.length > 0) {
            products = products.filter(p =>
                filters.ram.some(ram => p.specs.ram === ram)
            );
        }

        // Sort products
        switch (filters.sortBy) {
            case 'price-asc':
                products.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                products.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                products.sort((a, b) => b.id - a.id);
                break;
            default:
                break;
        }

        setFilteredProducts(products);
        setCurrentPage(1);
    }, [filters]);

    const getCategoryTitle = () => {
        const categories = {
            'all': 'Tất cả sản phẩm',
            'laptop-gaming': 'Laptop Gaming',
            'laptop-van-phong': 'Laptop Văn phòng',
            'macbook': 'Macbook',
            'laptop-do-hoa': 'Laptop Đồ họa',
            'smartphone': 'Điện thoại',
            'audio': 'Âm thanh',
            'smartwatch': 'Đồng hồ thông minh',
            'smart-home': 'Nhà thông minh'
        };
        return categories[filters.category] || 'Sản phẩm';
    };

    // Pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFilterChange = (newFilters) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    return (
        <div className={styles.categoryPage}>
            <div className={styles.container}>
                <Breadcrumb category={getCategoryTitle()} />

                <div className={styles.content}>
                    <Sidebar filters={filters} onFilterChange={handleFilterChange} />

                    <div className={styles.productsSection}>
                        <div className={styles.header}>
                            <div className={styles.titleSection}>
                                <h1 className={styles.title}>{getCategoryTitle()}</h1>
                                <p className={styles.subtitle}>
                                    Hiển thị {currentProducts.length} trong số {filteredProducts.length} sản phẩm
                                </p>
                            </div>
                            <div className={styles.sortSection}>
                                <label className={styles.sortLabel}>Sắp xếp theo:</label>
                                <select
                                    value={filters.sortBy}
                                    onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
                                    className={styles.sortSelect}
                                >
                                    <option value="newest">Phổ biến nhất</option>
                                    <option value="price-asc">Giá: Thấp đến Cao</option>
                                    <option value="price-desc">Giá: Cao đến Thấp</option>
                                    <option value="rating">Mới nhất</option>
                                </select>
                            </div>
                        </div>

                        {/* Active Filters Chips */}
                        {(filters.brands.length > 0 || filters.ram.length > 0) && (
                            <div className={styles.activeFilters}>
                                {filters.brands.map(brand => (
                                    <div key={brand} className={styles.filterChip}>
                                        <CheckIcon className={styles.chipIcon} />
                                        <span className={styles.chipText}>{brand}</span>
                                        <button
                                            className={styles.chipClose}
                                            onClick={() => handleFilterChange({
                                                brands: filters.brands.filter(b => b !== brand)
                                            })}
                                        >
                                            <CloseIcon className={styles.closeIcon} />
                                        </button>
                                    </div>
                                ))}
                                {filters.ram.map(ram => (
                                    <div key={ram} className={styles.filterChip}>
                                        <CheckIcon className={styles.chipIcon} />
                                        <span className={styles.chipText}>{ram}</span>
                                        <button
                                            className={styles.chipClose}
                                            onClick={() => handleFilterChange({
                                                ram: filters.ram.filter(r => r !== ram)
                                            })}
                                        >
                                            <CloseIcon className={styles.closeIcon} />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    className={styles.clearAll}
                                    onClick={() => handleFilterChange({ brands: [], ram: [] })}
                                >
                                    Xóa tất cả
                                </button>
                            </div>
                        )}


                        <div className={styles.productsGrid}>
                            {currentProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
