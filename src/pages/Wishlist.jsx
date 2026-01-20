import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockWishlist } from '../data/mockWishlist';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('all');
  const [wishlistItems, setWishlistItems] = useState(mockWishlist);

  const handleRemoveItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    alert('Đã xóa sản phẩm khỏi danh sách yêu thích!');
  };

  const handleClearAll = () => {
    if (window.confirm('Bạn có chắc muốn xóa tất cả sản phẩm yêu thích?')) {
      setWishlistItems([]);
      alert('Đã xóa tất cả sản phẩm yêu thích!');
    }
  };

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: parseInt(item.price.replace(/[₫,.]/g, '')),
      image: item.image,
      quantity: 1
    });
    alert(`Đã thêm ${item.name} vào giỏ hàng!`);
  };

  const filteredItems = activeTab === 'all' 
    ? wishlistItems 
    : wishlistItems.filter(item => item.category === activeTab);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#fafafa] dark:bg-[#1a1c20] text-[#0e1b1b] dark:text-gray-100 transition-colors duration-300">
      <main className="grow px-3 md:px-4 lg:px-6 xl:px-8 py-8">
        <div className="max-w-400 mx-auto flex flex-col gap-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">
          <Link to="/" className="hover:text-[#14b8b8]">Trang chủ</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-gray-900 dark:text-white">Sản phẩm yêu thích</span>
        </nav>

        {/* Page Heading */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0e1b1b] dark:text-white font-display">Danh sách yêu thích</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Bạn đang lưu giữ <span className="font-bold text-[#14b8b8]">{wishlistItems.length.toString().padStart(2, '0')}</span> sản phẩm công nghệ tuyệt vời.
            </p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleClearAll}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 font-bold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              <span className="material-symbols-outlined text-sm">delete_sweep</span>
              Xóa tất cả
            </button>
          </div>
        </div>

        {/* Tabs/Filters */}
        <div className="mb-8 border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
          <div className="flex gap-10 whitespace-nowrap min-w-max">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-4 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'all'
                  ? 'border-[#14b8b8] text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-500 hover:text-[#14b8b8]'
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setActiveTab('phone')}
              className={`py-4 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'phone'
                  ? 'border-[#14b8b8] text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-500 hover:text-[#14b8b8]'
              }`}
            >
              Điện thoại
            </button>
            <button
              onClick={() => setActiveTab('laptop')}
              className={`py-4 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'laptop'
                  ? 'border-[#14b8b8] text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-500 hover:text-[#14b8b8]'
              }`}
            >
              Laptop & Tablet
            </button>
            <button
              onClick={() => setActiveTab('accessories')}
              className={`py-4 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'accessories'
                  ? 'border-[#14b8b8] text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-500 hover:text-[#14b8b8]'
              }`}
            >
              Phụ kiện
            </button>
            <button
              onClick={() => setActiveTab('audio')}
              className={`py-4 text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'audio'
                  ? 'border-[#14b8b8] text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-500 hover:text-[#14b8b8]'
              }`}
            >
              Âm thanh
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700 mb-4">favorite_border</span>
            <p className="text-lg text-gray-500 dark:text-gray-400">Chưa có sản phẩm yêu thích nào</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((product) => (
              <div key={product.id} className="product-card group relative flex flex-col rounded-2xl bg-white dark:bg-[#1a1c20] p-4 transition-all duration-300 border border-transparent hover:border-[#14b8b8]/10 shadow-sm hover:shadow-md hover:-translate-y-1">
                <button 
                  onClick={() => handleRemoveItem(product.id)}
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-sm text-[#F0B3A6] hover:bg-[#F0B3A6] hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
                
                <div className="mb-4 aspect-square overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <div 
                    className="h-full w-full bg-cover bg-center mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  ></div>
                </div>

                <div className="flex flex-1 flex-col">
                  <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#14b8b8]">{product.brand}</span>
                  <h3 className="mb-2 text-lg font-bold leading-tight font-display group-hover:text-[#14b8b8] transition-colors">{product.name}</h3>
                  
                  <div className="mt-auto space-y-4">
                    <p className="text-xl font-extrabold text-[#0e1b1b] dark:text-white">{product.price}</p>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#14b8b8] py-3 text-sm font-bold text-white hover:brightness-105 active:scale-95 transition-all"
                    >
                      <span className="material-symbols-outlined text-lg">shopping_bag</span>
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Suggestion Banner */}
        <div className="mt-20 rounded-3xl bg-[#0e1b1b] p-8 md:p-12 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-black font-display leading-tight">Mọi thứ sẵn sàng trong giỏ hàng?</h2>
            <p className="text-gray-400 text-lg">Đừng bỏ lỡ ưu đãi đặc biệt lên đến 15% cho các sản phẩm trong danh sách yêu thích của bạn.</p>
            <Link to="/category" className="inline-block rounded-xl bg-[#14b8b8] px-8 py-4 font-bold text-white hover:scale-105 transition-all">
              Khám phá ngay
            </Link>
          </div>
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[#14b8b8]/20 blur-3xl"></div>
          <div className="absolute top-10 right-10 hidden lg:block opacity-20">
            <span className="material-symbols-outlined text-[160px]">devices_other</span>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Wishlist;
