import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mockOrders } from '../data/mockOrders';
import { useCart } from '../context/CartContext';

const Orders = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('all');

  const handleReorder = (order) => {
    // Thêm tất cả sản phẩm trong đơn hàng vào giỏ
    order.products.forEach(product => {
      addToCart({
        id: Date.now() + Math.random(),
        name: product.name,
        price: parseInt(order.total.replace(/[₫,.]/g, '')) / order.products.length,
        image: product.image,
        quantity: product.quantity
      });
    });
    alert('Đã thêm tất cả sản phẩm vào giỏ hàng!');
    navigate('/cart');
  };

  const handleViewDetails = (orderId) => {
    alert(`Xem chi tiết đơn hàng #${orderId}\n\nChức năng chi tiết đơn hàng sẽ được phát triển ở phiên bản tiếp theo.`);
  };

  const handleTrackOrder = (orderId) => {
    alert(`Theo dõi đơn hàng #${orderId}\n\nĐơn hàng đang trên đường giao đến bạn.\nDự kiến giao: Hôm nay trước 6:00 PM`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'shipping':
        return 'warning';
      case 'cancelled':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'check_circle';
      case 'shipping':
        return 'local_shipping';
      case 'cancelled':
        return 'cancel';
      default:
        return 'schedule';
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <main className="grow px-3 md:px-4 lg:px-6 xl:px-8 py-8">
        <div className="max-w-400 mx-auto flex flex-col gap-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#135bec] flex items-center gap-1 transition-colors">
              <span className="material-symbols-outlined text-base">home</span>
              Trang chủ
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link to="/profile" className="hover:text-[#135bec] transition-colors">Tài khoản</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-slate-900 dark:text-slate-100">Đơn hàng của tôi</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
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
                  <Link to="/orders" className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg bg-[#135bec]/10 text-[#135bec] font-semibold">
                    <span className="material-symbols-outlined text-xl">receipt_long</span> Đơn hàng của tôi
                  </Link>
                  <Link to="/wishlist" className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-slate-50 dark:hover:bg-[#17191c] transition-colors">
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

            {/* Main Content */}
            <div className="flex-1">
              {/* Page Heading */}
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Đơn hàng của tôi</h2>
                <p className="text-slate-500 dark:text-slate-400">Theo dõi trạng thái và lịch sử mua hàng công nghệ của bạn.</p>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar mb-6">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-6 py-4 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === 'all'
                    ? 'text-[#135bec] border-[#135bec]'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white border-transparent'
                    }`}
                >
                  Tất cả
                </button>
                <button
                  onClick={() => setActiveTab('processing')}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === 'processing'
                    ? 'text-[#135bec] border-[#135bec]'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white border-transparent'
                    }`}
                >
                  Đang xử lý
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === 'shipping'
                    ? 'text-[#135bec] border-[#135bec]'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white border-transparent'
                    }`}
                >
                  Đang giao
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === 'completed'
                    ? 'text-[#135bec] border-[#135bec]'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white border-transparent'
                    }`}
                >
                  Hoàn thành
                </button>
                <button
                  onClick={() => setActiveTab('cancelled')}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === 'cancelled'
                    ? 'text-[#135bec] border-[#135bec]'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white border-transparent'
                    }`}
                >
                  Đã hủy
                </button>
              </div>

              {/* Search & Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white dark:bg-[#2E3236] border-slate-200 dark:border-slate-800 rounded-xl pl-12 pr-4 py-3 focus:ring-[#135bec] focus:border-[#135bec]"
                    placeholder="Tìm kiếm theo mã đơn hàng hoặc tên sản phẩm..."
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="bg-white dark:bg-[#2E3236] border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-[#135bec] focus:border-[#135bec] min-w-40"
                  >
                    <option value="all">Tất cả thời gian</option>
                    <option value="30days">30 ngày qua</option>
                    <option value="6months">6 tháng qua</option>
                    <option value="2023">Năm 2023</option>
                  </select>
                </div>
              </div>

              {/* Order List */}
              <div className="space-y-4">
                {mockOrders.map((order) => {
                  const statusColor = getStatusColor(order.status);
                  const statusIcon = getStatusIcon(order.status);

                  return (
                    <div key={order.id} className={`bg-white dark:bg-[#2E3236] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-${statusColor === 'primary' ? '[#135bec]' : statusColor}/50 transition-all group ${order.status === 'cancelled' ? 'opacity-75 grayscale hover:grayscale-0 hover:opacity-100' : ''}`}>
                      <div className="p-4 md:p-6 border-b border-slate-100 dark:border-slate-800/50 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 bg-${statusColor === 'success' ? '[#27C95B]' : statusColor === 'warning' ? '[#FFC94D]' : statusColor === 'danger' ? '[#D34747]' : '[#135bec]'}/10 text-${statusColor === 'success' ? '[#27C95B]' : statusColor === 'warning' ? '[#FFC94D]' : statusColor === 'danger' ? '[#D34747]' : '[#135bec]'} rounded-lg`}>
                            <span className="material-symbols-outlined">{statusIcon}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">#{order.id}</h4>
                            <p className="text-xs text-slate-500">Đặt ngày {order.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Trạng thái</p>
                            <span className={`text-sm font-bold ${statusColor === 'success' ? 'text-[#27C95B]' : statusColor === 'warning' ? 'text-[#FFC94D]' : statusColor === 'danger' ? 'text-[#D34747]' : 'text-[#135bec]'}`}>
                              {order.statusText}
                            </span>
                          </div>
                          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
                          <div className="text-right">
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Tổng cộng</p>
                            <p className="text-lg font-black text-[#135bec]">{order.total}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-4 overflow-hidden">
                          <div className="flex -space-x-3 overflow-hidden">
                            {order.products.map((product, idx) => (
                              <div key={idx} className="size-16 rounded-lg border-2 border-white dark:border-[#2E3236] bg-slate-100 dark:bg-slate-800 shrink-0">
                                <img className="w-full h-full object-cover rounded-md" src={product.image} alt={product.name} />
                              </div>
                            ))}
                            {order.additionalCount > 0 && (
                              <div className="size-16 rounded-lg border-2 border-white dark:border-[#2E3236] bg-slate-100 dark:bg-slate-800 shrink-0 flex items-center justify-center">
                                <span className="text-xs font-bold text-slate-500">+{order.additionalCount}</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{order.products[0].name}</p>
                            {order.additionalCount > 0 && (
                              <p className="text-xs text-slate-500 mt-1">Và {order.additionalCount} sản phẩm khác</p>
                            )}
                            {order.cancelReason && (
                              <p className="text-xs text-slate-500 mt-1">Lý do: {order.cancelReason}</p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 whitespace-nowrap">
                          {order.status === 'completed' && (
                            <>
                              <button
                                onClick={() => handleReorder(order)}
                                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold text-[#135bec] border border-[#135bec]/20 bg-[#135bec]/5 hover:bg-[#135bec]/10 rounded-lg transition-colors"
                              >
                                Mua lại
                              </button>
                              <button
                                onClick={() => handleViewDetails(order.id)}
                                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold text-white bg-[#135bec] hover:bg-[#135bec]/90 rounded-lg transition-colors flex items-center justify-center gap-2"
                              >
                                Xem chi tiết <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                              </button>
                            </>
                          )}
                          {order.status === 'shipping' && (
                            <button
                              onClick={() => handleTrackOrder(order.id)}
                              className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold text-white bg-[#135bec] hover:bg-[#135bec]/90 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                              Theo dõi đơn <span className="material-symbols-outlined text-sm">location_searching</span>
                            </button>
                          )}
                          {order.status === 'cancelled' && (
                            <button
                              onClick={() => handleViewDetails(order.id)}
                              className="px-6 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                            >
                              Xem chi tiết
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2">
                <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="size-10 flex items-center justify-center rounded-lg bg-[#135bec] text-white font-bold">1</button>
                <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">2</button>
                <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">3</button>
                <div className="px-2 text-slate-400">...</div>
                <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;
