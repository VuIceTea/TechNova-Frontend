import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getNewsList } from '../services/newsServices';

const NewsDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [news, setNews] = useState(null);
    const [relatedNews, setRelatedNews] = useState([]);
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsList = await getNewsList();
                const currentNews = newsList.find(n => n.slug === slug);
                
                if (!currentNews) {
                    navigate('/news');
                    return;
                }

                setNews(currentNews);
                
                // Get 3 related news (same category or random)
                const related = newsList
                    .filter(n => n.slug !== slug)
                    .slice(0, 3);
                setRelatedNews(related);
                
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setLoading(false);
            }
        };

        fetchNews();
        window.scrollTo(0, 0);
    }, [slug, navigate]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        console.log('Comment submitted:', comment);
        alert('Cảm ơn bạn đã bình luận!');
        setComment('');
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric' 
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f6f6f8] dark:bg-[#101622] flex items-center justify-center">
                <div className="text-gray-900 dark:text-white">Đang tải...</div>
            </div>
        );
    }

    if (!news) return null;

    return (
        <div className="min-h-screen bg-[#f6f6f8] dark:bg-[#101622]">
            <main className="grow w-full max-w-350 mx-auto px-2 md:px-4 py-8">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                    <Link to="/" className="text-gray-500 dark:text-[#9da6b9] text-sm font-medium hover:text-[#135bec] transition-colors">
                        Trang chủ
                    </Link>
                    <span className="material-symbols-outlined text-gray-500 dark:text-[#9da6b9] text-[16px]">chevron_right</span>
                    <Link to="/news" className="text-gray-500 dark:text-[#9da6b9] text-sm font-medium hover:text-[#135bec] transition-colors">
                        Tin tức
                    </Link>
                    <span className="material-symbols-outlined text-gray-500 dark:text-[#9da6b9] text-[16px]">chevron_right</span>
                    <span className="text-gray-900 dark:text-white text-sm font-medium truncate max-w-50 md:max-w-none">
                        {news.title}
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: Article Content */}
                    <article className="lg:col-span-8 flex flex-col gap-6">
                        {/* Headline */}
                        <div>
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-[#135bec] uppercase bg-[#135bec]/10 rounded-full">
                                {news.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white mb-6">
                                {news.title}
                            </h1>

                            {/* Author & Meta */}
                            <div className="flex items-center justify-between border-y border-gray-200 dark:border-[#282e39] py-4">
                                <div className="flex items-center gap-4">
                                    <div 
                                        className="bg-center bg-no-repeat bg-cover rounded-full size-12"
                                        style={{ backgroundImage: `url("${news.author?.avatar}")` }}
                                    />
                                    <div>
                                        <p className="text-gray-900 dark:text-white text-base font-semibold">
                                            {news.author?.name || 'TechNova Team'}
                                        </p>
                                        <p className="text-gray-500 dark:text-[#9da6b9] text-sm">
                                            {news.author?.role || 'Biên tập viên'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-gray-500 dark:text-[#9da6b9] text-sm font-medium">
                                        {formatDate(news.publishedAt)}
                                    </span>
                                    <span className="text-gray-500 dark:text-[#9da6b9] text-xs flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                                        {news.readTime}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-[#282e39] relative group">
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                style={{ backgroundImage: `url("${news.thumbnail}")` }}
                            />
                        </div>

                        {/* Article Body */}
                        <div 
                            className="prose prose-invert prose-lg max-w-none text-gray-700 dark:text-[#d1d5db] leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: news.content }}
                        />

                        {/* Tags */}
                        {news.tags && news.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-6 pb-6 border-b border-gray-200 dark:border-[#282e39]">
                                {news.tags.map((tag) => (
                                    <Link
                                        key={tag}
                                        to={`/news?tag=${tag}`}
                                        className="px-3 py-1 bg-gray-200 dark:bg-[#282e39] hover:bg-gray-300 dark:hover:bg-[#343b49] text-gray-600 dark:text-[#9da6b9] hover:text-gray-900 dark:hover:text-white rounded-full text-sm transition-colors"
                                    >
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Comments Section */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Bình luận ({news.comments?.length || 0})
                            </h3>

                            {/* Comment Input */}
                            <form onSubmit={handleCommentSubmit} className="flex gap-4 mb-8">
                                <div className="shrink-0 bg-gray-300 dark:bg-[#282e39] rounded-full size-10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-gray-600 dark:text-[#9da6b9]">person</span>
                                </div>
                                <div className="flex-1">
                                    <textarea
                                        className="w-full bg-white dark:bg-[#1a1f2b] border border-gray-300 dark:border-[#282e39] rounded-lg p-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#5a6275] focus:ring-2 focus:ring-[#135bec] focus:border-transparent outline-none resize-y min-h-25"
                                        placeholder="Chia sẻ suy nghĩ của bạn về bài viết này..."
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                    <div className="flex justify-end mt-2">
                                        <button 
                                            type="submit"
                                            className="bg-[#135bec] hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                                        >
                                            Gửi bình luận
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {/* Comment List */}
                            {news.comments && news.comments.length > 0 && (
                                <div className="space-y-6">
                                    {news.comments.map((comment) => (
                                        <div key={comment.id} className="flex gap-4">
                                            <div 
                                                className="shrink-0 bg-center bg-no-repeat bg-cover rounded-full size-10"
                                                style={{ backgroundImage: `url("${comment.avatar}")` }}
                                            />
                                            <div className="flex-1">
                                                <div className="bg-gray-100 dark:bg-[#1a1f2b] p-4 rounded-xl rounded-tl-none">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h5 className="text-gray-900 dark:text-white font-semibold text-sm">
                                                            {comment.author}
                                                        </h5>
                                                        <span className="text-gray-400 dark:text-[#5a6275] text-xs">
                                                            {comment.time}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-700 dark:text-[#d1d5db] text-sm leading-relaxed">
                                                        {comment.content}
                                                    </p>
                                                </div>
                                                <div className="flex gap-4 mt-2 ml-2">
                                                    <button className="text-gray-500 dark:text-[#9da6b9] hover:text-gray-900 dark:hover:text-white text-xs flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                                                        Thích ({comment.likes || 0})
                                                    </button>
                                                    <button className="text-gray-500 dark:text-[#9da6b9] hover:text-gray-900 dark:hover:text-white text-xs flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-[16px]">reply</span>
                                                        Trả lời
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </article>

                    {/* Right Column: Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="sticky top-4 space-y-6">
                            {/* Share Actions */}
                            <div className="bg-white dark:bg-[#1a1f2b] rounded-xl p-5 border border-gray-200 dark:border-[#282e39]">
                                <h4 className="text-gray-900 dark:text-white font-bold mb-4">Chia sẻ bài viết</h4>
                                <div className="flex gap-2 justify-between">
                                    <button className="flex-1 bg-gray-200 dark:bg-[#282e39] hover:bg-gray-300 dark:hover:bg-[#343b49] text-gray-900 dark:text-white p-2 rounded-lg transition-colors flex justify-center items-center">
                                        <span className="material-symbols-outlined text-[20px]">share</span>
                                    </button>
                                    <button className="flex-1 bg-[#1da1f2]/20 hover:bg-[#1da1f2]/30 text-[#1da1f2] p-2 rounded-lg transition-colors flex justify-center items-center">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                    </button>
                                    <button className="flex-1 bg-[#1877f2]/20 hover:bg-[#1877f2]/30 text-[#1877f2] p-2 rounded-lg transition-colors flex justify-center items-center">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                                    </button>
                                    <button className="flex-1 bg-[#0a66c2]/20 hover:bg-[#0a66c2]/30 text-[#0a66c2] p-2 rounded-lg transition-colors flex justify-center items-center">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                    </button>
                                </div>
                            </div>

                            {/* Related Posts */}
                            {relatedNews.length > 0 && (
                                <div className="bg-white dark:bg-[#1a1f2b] rounded-xl p-5 border border-gray-200 dark:border-[#282e39]">
                                    <h4 className="text-gray-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#135bec]">trending_up</span>
                                        Tin nổi bật
                                    </h4>
                                    <div className="flex flex-col gap-4">
                                        {relatedNews.map((relatedItem) => (
                                            <Link 
                                                key={relatedItem.id}
                                                to={`/news/${relatedItem.slug}`}
                                                className="group flex gap-3 items-start"
                                            >
                                                <div 
                                                    className="shrink-0 w-20 h-16 bg-cover bg-center rounded-lg overflow-hidden relative"
                                                    style={{ backgroundImage: `url("${relatedItem.thumbnail}")` }}
                                                >
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                                </div>
                                                <div className="flex-1">
                                                    <h5 className="text-gray-900 dark:text-white text-sm font-medium leading-snug group-hover:text-[#135bec] transition-colors line-clamp-2">
                                                        {relatedItem.title}
                                                    </h5>
                                                    <span className="text-gray-400 dark:text-[#5a6275] text-xs mt-1 block">
                                                        {relatedItem.readTime}
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Newsletter Signup */}
                            <div className="bg-linear-to-br from-[#135bec]/20 to-white dark:to-[#1a1f2b] rounded-xl p-6 border border-[#135bec]/20 text-center relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#135bec]/20 blur-[50px] rounded-full"></div>
                                <h4 className="text-gray-900 dark:text-white font-bold mb-2 text-lg relative z-10">
                                    Đăng ký nhận tin
                                </h4>
                                <p className="text-gray-600 dark:text-[#9da6b9] text-sm mb-4 relative z-10">
                                    Nhận thông báo về các bài đánh giá công nghệ mới nhất hàng tuần.
                                </p>
                                <div className="flex flex-col gap-2 relative z-10">
                                    <input 
                                        className="bg-white dark:bg-[#111318]/80 border border-gray-300 dark:border-[#282e39] rounded-lg px-4 py-2 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-[#135bec] placeholder-gray-400 dark:placeholder-[#5a6275]"
                                        placeholder="Email của bạn"
                                        type="email"
                                    />
                                    <button className="bg-[#135bec] hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                                        Đăng ký
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* More Articles Section */}
                {relatedNews.length > 0 && (
                    <section className="mt-20 border-t border-gray-200 dark:border-[#282e39] pt-12">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Có thể bạn quan tâm
                            </h3>
                            <Link 
                                to="/news"
                                className="text-[#135bec] hover:text-blue-600 text-sm font-medium flex items-center gap-1 transition-colors"
                            >
                                Xem tất cả <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedNews.map((item) => (
                                <Link 
                                    key={item.id}
                                    to={`/news/${item.slug}`}
                                    className="group bg-white dark:bg-[#1a1f2b] rounded-xl overflow-hidden border border-gray-200 dark:border-[#282e39] hover:border-[#135bec]/50 transition-all hover:shadow-lg hover:shadow-[#135bec]/10 flex flex-col h-full"
                                >
                                    <div 
                                        className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                        style={{ backgroundImage: `url("${item.thumbnail}")` }}
                                    />
                                    <div className="p-5 flex flex-col flex-1">
                                        <span className="text-[#135bec] text-xs font-bold uppercase tracking-wider mb-2">
                                            {item.category}
                                        </span>
                                        <h4 className="text-gray-900 dark:text-white text-lg font-bold mb-3 leading-snug group-hover:text-[#135bec] transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-[#9da6b9] text-sm line-clamp-3 mb-4 flex-1">
                                            {item.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-gray-400 dark:text-[#5a6275] text-xs pt-4 border-t border-gray-200 dark:border-[#282e39]">
                                            <span>{formatDate(item.publishedAt)}</span>
                                            <span className="mx-1">•</span>
                                            <span>{item.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default NewsDetail;
