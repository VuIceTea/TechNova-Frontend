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
          <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <Link className="hover:text-[#135bec] dark:hover:text-white transition-colors" to="/">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white font-medium">Sản phẩm yêu thích</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-1/4 shrink-0">
              <div className="bg-white dark:bg-[#1e2227] rounded-xl border border-slate-200 dark:border-[#2d343b] p-6">
                {/* User Summary */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-[#2d343b]">
                  <div className="relative group">
                    <div className="size-14 bg-gray-100 dark:bg-[#282e39] rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-gray-700 dark:text-white" style={{ fontSize: '32px' }}>person</span>
                    </div>
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <span className="material-symbols-outlined text-white text-sm">edit</span>
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-bold text-lg truncate text-slate-900 dark:text-white">Nguyễn Văn A</h3>
                    <p className="text-[#135bec] text-sm font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified</span>
                      Thành viên Bạc
                    </p>
                  </div>
                </div>

                {/* Menu */}
                <nav className="flex flex-col gap-1">
                  <Link to="/profile" className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-[#17191c] transition-colors">
                    <span className="material-symbols-outlined text-xl">person</span> Thông tin cá nhân
                  </Link>
                  <Link to="/orders" className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-[#17191c] transition-colors">
                    <span className="material-symbols-outlined text-xl">receipt_long</span> Đơn hàng của tôi
                  </Link>
                  <Link to="/wishlist" className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg bg-[#135bec]/10 text-[#135bec] font-semibold">
                    <span className="material-symbols-outlined text-xl">favorite</span> Sản phẩm yêu thích
                  </Link>
                  <Link to="/addresses" className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-[#17191c] transition-colors">
                    <span className="material-symbols-outlined text-xl">location_on</span> Sổ địa chỉ
                  </Link>
                  <Link to="/profile" className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-[#17191c] transition-colors">
                    <span className="material-symbols-outlined text-xl">payments</span> Phương thức thanh toán
                  </Link>
                  <Link to="/notifications" className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-[#17191c] transition-colors">
                    <span className="material-symbols-outlined text-xl">notifications</span> Thông báo
                    <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
                  </Link>
                  <div className="h-px bg-slate-200 dark:bg-[#2d343b] my-2"></div>
                  <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors text-red-500">
                    <span className="material-symbols-outlined text-xl">logout</span> Đăng xuất
                  </Link>
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Page Heading */}
              <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0e1b1b] dark:text-white font-display">Danh sách yêu thích</h1>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Bạn đang lưu giữ <span className="font-bold text-[#135bec]">{wishlistItems.length.toString().padStart(2, '0')}</span> sản phẩm công nghệ tuyệt vời.
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
                    className={`py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'all'
                      ? 'border-[#135bec] text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 hover:text-[#135bec]'
                      }`}
                  >
                    Tất cả
                  </button>
                  <button
                    onClick={() => setActiveTab('phone')}
                    className={`py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'phone'
                      ? 'border-[#14b8b8] text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 hover:text-[#135bec]'
                      }`}
                  >
                    Điện thoại
                  </button>
                  <button
                    onClick={() => setActiveTab('laptop')}
                    className={`py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'laptop'
                      ? 'border-[#135bec] text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 hover:text-[#135bec]'
                      }`}
                  >
                    Laptop & Tablet
                  </button>
                  <button
                    onClick={() => setActiveTab('accessories')}
                    className={`py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'accessories'
                      ? 'border-[#135bec] text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 hover:text-[#135bec]'
                      }`}
                  >
                    Phụ kiện
                  </button>
                  <button
                    onClick={() => setActiveTab('audio')}
                    className={`py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'audio'
                      ? 'border-[#135bec] text-gray-900 dark:text-white'
                      : 'border-transparent text-gray-500 hover:text-[#135bec]'
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
                    <div key={product.id} className="product-card group relative flex flex-col rounded-2xl bg-white dark:bg-[#2d343b] p-4 transition-all duration-300 border border-transparent hover:border-[#14b8b8]/10 shadow-sm hover:shadow-md hover:-translate-y-1">
                      <button
                        onClick={() => handleRemoveItem(product.id)}
                        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-sm text-[#ea340b] hover:bg-[#ea340b] hover:text-white transition-all"
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
                        <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#135bec]">{product.brand}</span>
                        <h3 className="mb-2 text-lg font-bold leading-tight font-display group-hover:text-[#135bec] transition-colors">{product.name}</h3>

                        <div className="mt-auto space-y-4">
                          <p className="text-xl font-extrabold text-[#0e1b1b] dark:text-white">{product.price}</p>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#135bec] py-3 text-sm font-bold text-white hover:brightness-105 active:scale-95 transition-all"
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
                  <Link to="/category" className="inline-block rounded-xl bg-[#135bec] px-8 py-4 font-bold text-white hover:scale-105 transition-all">
                    Khám phá ngay
                  </Link>
                </div>
                <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[#14b8b8]/20 blur-3xl"></div>
                <div className="absolute top-10 right-10 hidden lg:block opacity-20">
                  <span className="material-symbols-outlined text-[160px]">devices_other</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wishlist;
