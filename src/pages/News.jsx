import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getNewsList } from '../services/newsServices';

const News = () => {
    const [newsList, setNewsList] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tất cả');
    const [sortBy, setSortBy] = useState('newest');
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [email, setEmail] = useState('');
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const categoryScrollRef = useRef(null);

    const categories = ['Tất cả', 'Công nghệ AI', 'Thực tế ảo', 'Di động', 'Laptop', 'Smart Home', 'Thủ thuật'];

    useEffect(() => {
        const fetchNews = async () => {
            const data = await getNewsList();
            setNewsList(data);
            setFilteredNews(data);
        };
        fetchNews();
    }, []);

    useEffect(() => {
        const checkScroll = () => {
            if (categoryScrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = categoryScrollRef.current;
                setShowLeftArrow(scrollLeft > 0);
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
            }
        };

        checkScroll();
        const scrollContainer = categoryScrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', checkScroll);
            }
            window.removeEventListener('resize', checkScroll);
        };
    }, [categories]);

    useEffect(() => {
        let filtered = [...newsList];

        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(news =>
                news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory !== 'Tất cả') {
            filtered = filtered.filter(news =>
                news.category.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        // Sort
        if (sortBy === 'newest') {
            filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        } else if (sortBy === 'oldest') {
            filtered.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
        } else if (sortBy === 'popular') {
            // For now, just use the order as is (could add a popularity field later)
            filtered = filtered;
        }

        setFilteredNews(filtered);
    }, [searchQuery, selectedCategory, sortBy, newsList]);

    const getTimeAgo = (dateString) => {
        const now = new Date();
        const published = new Date(dateString);
        const diffInHours = Math.floor((now - published) / (1000 * 60 * 60));

        if (diffInHours < 24) {
            if (diffInHours === 0) return 'Hôm nay';
            return `${diffInHours} giờ trước`;
        }

        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays === 1) return '1 ngày trước';
        if (diffInDays < 7) return `${diffInDays} ngày trước`;

        return published.toLocaleDateString('vi-VN');
    };

    const featuredNews = filteredNews.find(news => news.isFeatured) || filteredNews[0];
    const regularNews = filteredNews.filter(news => !news.isFeatured || news.id !== featuredNews?.id);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        console.log('Newsletter signup:', email);
        alert('Cảm ơn bạn đã đăng ký nhận tin!');
        setEmail('');
    };

    const scrollCategories = (direction) => {
        if (categoryScrollRef.current) {
            const scrollAmount = 200;
            const newScrollLeft = categoryScrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            categoryScrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#f6f6f8] dark:bg-[#101622]">
            <main className="flex-1 flex flex-col items-center w-full">
                <div className="w-full max-w-350 px-2 md:px-4 py-8 flex flex-col gap-8">
                    {/* Page Header */}
                    <section className="flex flex-col gap-4 border-b border-[#282e39] pb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                                    Tin tức TechNova
                                </h1>
                                <p className="text-gray-500 dark:text-[#9da6b9] mt-2 text-lg">
                                    Cập nhật những xu hướng công nghệ mới nhất, đánh giá sản phẩm và thủ thuật.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Search and Filters */}
                    <section className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between sticky top-18 z-40 bg-[#f6f6f8]/95 dark:bg-[#101622]/95 backdrop-blur-sm py-4 -my-4 border-b border-[#282e39] lg:border-none lg:bg-transparent lg:static">
                        {/* Search Bar */}
                        <div className="relative w-full lg:max-w-md group">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-[#9da6b9] group-focus-within:text-[#135bec] transition-colors">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input
                                className="block w-full p-3 pl-10 text-sm text-gray-900 dark:text-white border border-gray-200 dark:border-[#282e39] rounded-lg bg-white dark:bg-[#1c1f27] focus:ring-[#135bec] focus:border-[#135bec] placeholder-gray-500 dark:placeholder-[#9da6b9] transition-all outline-none"
                                placeholder="Tìm kiếm bài viết, chủ đề..."
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Category Filters and Controls */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full lg:w-auto">
                            {/* Category Buttons with Arrows */}
                            <div className="relative flex items-center gap-2 w-full sm:w-auto">
                                {/* Left Arrow */}
                                {showLeftArrow && (
                                    <button
                                        onClick={() => scrollCategories('left')}
                                        className="hidden sm:flex shrink-0 items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-[#1c1f27] border border-gray-200 dark:border-[#282e39] text-gray-500 dark:text-[#9da6b9] hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#282e39] transition-colors shadow-sm z-10"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                                    </button>
                                )}

                                {/* Categories Container */}
                                <div
                                    ref={categoryScrollRef}
                                    className="flex items-center gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth"
                                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0 ${selectedCategory === category
                                                ? 'bg-[#135bec] text-white'
                                                : 'bg-white dark:bg-[#1c1f27] border border-gray-200 dark:border-[#282e39] text-gray-500 dark:text-[#9da6b9] hover:text-gray-900 dark:hover:text-white hover:border-[#135bec]/50'
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>

                                {/* Right Arrow */}
                                {showRightArrow && (
                                    <button
                                        onClick={() => scrollCategories('right')}
                                        className="hidden sm:flex shrink-0 items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-[#1c1f27] border border-gray-200 dark:border-[#282e39] text-gray-500 dark:text-[#9da6b9] hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#282e39] transition-colors shadow-sm z-10"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                    </button>
                                )}
                            </div>

                            {/* Divider */}
                            <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-[#282e39] mx-2"></div>

                            {/* Sort and View Controls */}
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <select
                                    className="bg-white dark:bg-[#1c1f27] border border-gray-200 dark:border-[#282e39] text-gray-900 dark:text-white text-sm rounded-lg focus:ring-[#135bec] focus:border-[#135bec] block w-full sm:w-auto p-2.5 outline-none"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="newest">Mới nhất</option>
                                    <option value="popular">Phổ biến nhất</option>
                                    <option value="oldest">Cũ nhất</option>
                                </select>

                                {/* View Mode Toggle */}
                                <div className="flex border border-gray-200 dark:border-[#282e39] rounded-lg overflow-hidden bg-white dark:bg-[#1c1f27] shrink-0">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 transition-colors ${viewMode === 'grid'
                                            ? 'text-[#135bec] bg-[#135bec]/10'
                                            : 'text-gray-500 dark:text-[#9da6b9] hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#3b4354]'
                                            }`}
                                    >
                                        <span className="material-symbols-outlined text-[20px] block">grid_view</span>
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 transition-colors ${viewMode === 'list'
                                            ? 'text-[#135bec] bg-[#135bec]/10'
                                            : 'text-gray-500 dark:text-[#9da6b9] hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#3b4354]'
                                            }`}
                                    >
                                        <span className="material-symbols-outlined text-[20px] block">view_list</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Featured Article */}
                    {featuredNews && (
                        <section className="mt-4">
                            <Link to={`/news/${featuredNews.slug}`}>
                                <article className="relative group overflow-hidden rounded-2xl border border-gray-200 dark:border-[#282e39] bg-white dark:bg-[#1c1f27] cursor-pointer">
                                    <div className="flex flex-col md:flex-row">
                                        {/* Image */}
                                        <div className="md:w-2/3 h-75 md:h-112.5 overflow-hidden relative">
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="bg-[#135bec] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                                    Tin nổi bật
                                                </span>
                                            </div>
                                            <img
                                                alt={featuredNews.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                src={featuredNews.thumbnail}
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent md:hidden"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="md:w-1/3 p-6 md:p-8 lg:p-10 flex flex-col justify-center relative">
                                            <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-[#9da6b9]">
                                                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                                <span>{getTimeAgo(featuredNews.publishedAt)}</span>
                                                <span className="mx-1">•</span>
                                                <span className="material-symbols-outlined text-[18px]">schedule</span>
                                                <span>{featuredNews.readTime}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-[#135bec] transition-colors">
                                                {featuredNews.title}
                                            </h2>
                                            <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 md:line-clamp-none">
                                                {featuredNews.excerpt}
                                            </p>
                                            <span className="inline-flex items-center text-[#135bec] font-bold gap-1 w-fit">
                                                Đọc tiếp <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </section>
                    )}

                    {/* News Grid */}
                    <section className={viewMode === 'grid' 
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4"
                        : "flex flex-col gap-6 mt-4"
                    }>
                        {regularNews.map((news) => (
                            viewMode === 'grid' ? (
                                // Grid View
                                <article key={news.id} className="flex flex-col gap-4 group cursor-pointer h-full">
                                    {/* Image */}
                                    <Link to={`/news/${news.slug}`}>
                                        <div className="overflow-hidden rounded-xl h-56 w-full bg-gray-200 dark:bg-[#282e39] relative border border-gray-200 dark:border-[#282e39]">
                                            <span className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase">
                                                {news.category}
                                            </span>
                                            <img
                                                alt={news.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                src={news.thumbnail}
                                            />
                                        </div>
                                    </Link>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 gap-2">
                                        <Link to={`/news/${news.slug}`}>
                                            <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-snug group-hover:text-[#135bec] transition-colors">
                                                {news.title}
                                            </h3>
                                        </Link>
                                        <p className="text-gray-500 dark:text-[#9da6b9] text-sm line-clamp-2">
                                            {news.excerpt}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-200 dark:border-[#282e39]/50">
                                            <span className="text-gray-500 dark:text-[#9da6b9] text-xs flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">schedule</span>
                                                {getTimeAgo(news.publishedAt)}
                                            </span>
                                            <span className="text-gray-500 dark:text-[#9da6b9] text-xs">
                                                {news.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ) : (
                                // List View
                                <article key={news.id} className="group flex flex-col sm:flex-row gap-4 bg-white dark:bg-[#1c1f27] rounded-xl border border-gray-200 dark:border-[#282e39] hover:border-[#135bec]/50 transition-all p-4">
                                    {/* Image */}
                                    <Link to={`/news/${news.slug}`} className="shrink-0">
                                        <div className="overflow-hidden rounded-lg w-full sm:w-48 h-32 bg-gray-200 dark:bg-[#282e39] relative border border-gray-200 dark:border-[#282e39]">
                                            <span className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase">
                                                {news.category}
                                            </span>
                                            <img
                                                alt={news.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                src={news.thumbnail}
                                            />
                                        </div>
                                    </Link>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 gap-2 justify-between">
                                        <div>
                                            <Link to={`/news/${news.slug}`}>
                                                <h3 className="text-gray-900 dark:text-white text-lg md:text-xl font-bold leading-snug group-hover:text-[#135bec] transition-colors mb-2">
                                                    {news.title}
                                                </h3>
                                            </Link>
                                            <p className="text-gray-500 dark:text-[#9da6b9] text-sm line-clamp-2">
                                                {news.excerpt}
                                            </p>
                                        </div>

                                        {/* Meta Info */}
                                        <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-[#282e39]/50">
                                            <span className="text-gray-500 dark:text-[#9da6b9] text-xs flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">schedule</span>
                                                {getTimeAgo(news.publishedAt)}
                                            </span>
                                            <span className="text-gray-500 dark:text-[#9da6b9] text-xs">
                                                {news.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            )
                        ))}
                    </section>

                    {/* Newsletter Section */}
                    <section className="w-full bg-linear-to-r from-[#135bec]/20 to-indigo-900/20 border border-[#135bec]/30 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 my-4">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Đăng ký nhận tin tức công nghệ
                            </h3>
                            <p className="text-gray-700 dark:text-blue-100">
                                Nhận thông báo về bài viết mới nhất hàng tuần. Không spam, hủy đăng ký bất cứ lúc nào.
                            </p>
                        </div>
                        <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto gap-2">
                            <input
                                className="bg-white dark:bg-[#1c1f27] border border-gray-300 dark:border-[#282e39] rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none w-full md:w-64"
                                placeholder="Email của bạn..."
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#135bec] hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
                            >
                                Đăng ký
                            </button>
                        </form>
                    </section>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-2 py-8">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-[#282e39] bg-white dark:bg-[#1c1f27] text-gray-500 dark:text-[#9da6b9] hover:bg-gray-100 dark:hover:bg-[#282e39] hover:text-gray-900 dark:hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                        </button>

                        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#135bec] text-white font-bold shadow-lg shadow-blue-500/20">
                            1
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-[#282e39] bg-white dark:bg-[#1c1f27] text-gray-500 dark:text-[#9da6b9] hover:bg-gray-100 dark:hover:bg-[#282e39] hover:text-gray-900 dark:hover:text-white transition-colors">
                            2
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-[#282e39] bg-white dark:bg-[#1c1f27] text-gray-500 dark:text-[#9da6b9] hover:bg-gray-100 dark:hover:bg-[#282e39] hover:text-gray-900 dark:hover:text-white transition-colors">
                            3
                        </button>
                        <span className="text-gray-500 dark:text-[#9da6b9] px-2">...</span>
                        <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-[#282e39] bg-white dark:bg-[#1c1f27] text-gray-500 dark:text-[#9da6b9] hover:bg-gray-100 dark:hover:bg-[#282e39] hover:text-gray-900 dark:hover:text-white transition-colors">
                            8
                        </button>

                        <button
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-[#282e39] bg-white dark:bg-[#1c1f27] text-gray-500 dark:text-[#9da6b9] hover:bg-gray-100 dark:hover:bg-[#282e39] hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default News;
