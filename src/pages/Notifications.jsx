import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mockNotifications } from '../data/mockNotifications';

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(mockNotifications);
  const [activeTab, setActiveTab] = useState('all');

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isRead: true })));
    alert('Đã đánh dấu tất cả thông báo là đã đọc!');
  };

  const handleNotificationClick = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const handleTrackOrder = () => {
    alert('Đang theo dõi hành trình đơn hàng...');
    navigate('/orders');
  };

  const handleBuyNow = () => {
    alert('Chuyển đến giỏ hàng để hoàn tất đơn hàng!');
    navigate('/cart');
  };

  const handleCopyCoupon = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Đã copy mã giảm giá: ${code}`);
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(n => n.type === activeTab);

  const todayNotifications = filteredNotifications.filter(n => n.group === 'today');
  const earlierNotifications = filteredNotifications.filter(n => n.group === 'earlier');

  const getIconColorClass = (color) => {
    const colorMap = {
      primary: 'bg-[#13a4ec]/10 text-[#13a4ec]',
      orange: 'bg-orange-500/10 text-orange-500',
      emerald: 'bg-emerald-500/10 text-emerald-500',
      blue: 'bg-blue-500/10 text-blue-500'
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <div className="bg-[#fafafa] dark:bg-[#18181b] text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="layout-container flex h-full grow flex-col">
        <main className="grow px-3 md:px-4 lg:px-6 xl:px-8 py-8">
          <div className="max-w-400 mx-auto flex flex-col gap-6">
          {/* Page Heading */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Thông báo</h1>
              <p className="text-slate-500 dark:text-zinc-400 text-sm mt-1">Cập nhật những tin tức mới nhất dành riêng cho bạn</p>
            </div>
            <button 
              onClick={handleMarkAllRead}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-lg text-sm font-semibold transition-all"
            >
              <span className="material-symbols-outlined text-sm">done_all</span>
              <span>Đánh dấu tất cả đã đọc</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="flex border-b border-slate-200 dark:border-zinc-800 gap-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`flex items-center gap-2 pb-3 px-2 font-bold text-sm border-b-2 transition-colors ${
                  activeTab === 'all'
                    ? 'border-[#13a4ec] text-[#13a4ec]'
                    : 'border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200'
                }`}
              >
                <span>Tất cả</span>
                <span className="bg-[#13a4ec]/20 px-2 py-0.5 rounded-full text-[10px]">{unreadCount}</span>
              </button>
              <button
                onClick={() => setActiveTab('order')}
                className={`flex items-center gap-2 pb-3 px-2 font-bold text-sm border-b-2 transition-colors ${
                  activeTab === 'order'
                    ? 'border-[#13a4ec] text-[#13a4ec]'
                    : 'border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200'
                }`}
              >
                <span>Đơn hàng</span>
              </button>
              <button
                onClick={() => setActiveTab('promotion')}
                className={`flex items-center gap-2 pb-3 px-2 font-bold text-sm border-b-2 transition-colors ${
                  activeTab === 'promotion'
                    ? 'border-[#13a4ec] text-[#13a4ec]'
                    : 'border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200'
                }`}
              >
                <span>Khuyến mãi</span>
              </button>
            </div>
          </div>

          {/* Notification List */}
          <div className="space-y-8">
            {/* Group: Today */}
            {todayNotifications.length > 0 && (
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4 px-1">Hôm nay</h3>
                <div className="space-y-3">
                  {todayNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification.id)}
                      className={`flex gap-4 p-4 rounded-xl border transition-all cursor-pointer group relative overflow-hidden ${
                        notification.isRead
                          ? 'bg-slate-50 dark:bg-zinc-800/40 border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-[#262629]'
                          : 'bg-white dark:bg-[#262629] border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md'
                      }`}
                    >
                      {!notification.isRead && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#13a4ec]"></div>
                      )}
                      
                      <div className={`shrink-0 size-12 rounded-lg flex items-center justify-center ${getIconColorClass(notification.iconColor)}`}>
                        <span className="material-symbols-outlined text-2xl">{notification.icon}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`font-bold ${notification.isRead ? 'text-slate-700 dark:text-zinc-300' : 'text-slate-900 dark:text-zinc-100'}`}>
                            {notification.title}
                          </h4>
                          {!notification.isRead && (
                            <span className="text-[11px] font-medium text-[#13a4ec] bg-[#13a4ec]/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">Mới</span>
                          )}
                        </div>
                        
                        <p className={`text-sm leading-relaxed mb-3 ${notification.isRead ? 'text-slate-500 dark:text-zinc-500' : 'text-slate-600 dark:text-zinc-400'}`}>
                          {notification.message}
                        </p>

                        <div className="flex items-center gap-3">
                          {notification.action && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                if (notification.action === 'Mua ngay') {
                                  handleBuyNow();
                                } else if (notification.action === 'Theo dõi hành trình') {
                                  handleTrackOrder();
                                }
                              }}
                              className={`text-xs font-bold transition-all ${notification.action === 'Mua ngay' ? 'px-4 py-1.5 bg-[#13a4ec] hover:bg-[#13a4ec]/90 text-white rounded' : 'text-[#13a4ec] hover:underline'}`}
                            >
                              {notification.action}
                            </button>
                          )}
                          {notification.couponCode && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopyCoupon(notification.couponCode);
                              }}
                              className="text-xs font-mono bg-slate-200 dark:bg-zinc-700 px-2 py-0.5 rounded text-slate-700 dark:text-zinc-200 hover:bg-slate-300 dark:hover:bg-zinc-600 transition-colors cursor-pointer"
                              title="Click để copy"
                            >
                              {notification.couponCode}
                            </button>
                          )}
                          <span className="text-[11px] text-slate-400 dark:text-zinc-500">{notification.time}</span>
                        </div>
                      </div>

                      {!notification.isRead && (
                        <div className="shrink-0 flex items-center">
                          <div className="size-2.5 rounded-full bg-[#13a4ec] shadow-[0_0_8px_rgba(19,164,236,0.6)]"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Group: Earlier */}
            {earlierNotifications.length > 0 && (
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500 mb-4 px-1">Cũ hơn</h3>
                <div className="space-y-3 opacity-80">
                  {earlierNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification.id)}
                      className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-[#262629] transition-all cursor-pointer"
                    >
                      <div className={`shrink-0 size-12 rounded-lg flex items-center justify-center ${getIconColorClass(notification.iconColor)}`}>
                        <span className="material-symbols-outlined text-2xl">{notification.icon}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-slate-700 dark:text-zinc-300">{notification.title}</h4>
                        </div>
                        
                        <p className="text-sm text-slate-500 dark:text-zinc-500 leading-relaxed mb-2">
                          {notification.message}
                        </p>

                        <div className="flex items-center gap-3">
                          {notification.couponCode && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopyCoupon(notification.couponCode);
                              }}
                              className="text-xs font-mono bg-slate-200 dark:bg-zinc-700 px-2 py-0.5 rounded text-slate-700 dark:text-zinc-200 hover:bg-slate-300 dark:hover:bg-zinc-600 transition-colors cursor-pointer"
                              title="Click để copy"
                            >
                              {notification.couponCode}
                            </button>
                          )}
                          <span className="text-[11px] text-slate-400 dark:text-zinc-500">{notification.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Navigation Links */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-zinc-800 flex justify-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#13a4ec] transition-colors">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Quay lại Trang chủ
            </Link>
            <span className="text-slate-300 dark:text-zinc-700">|</span>
            <Link to="/profile" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#13a4ec] transition-colors">
              Hồ sơ cá nhân
              <span className="material-symbols-outlined text-lg">account_circle</span>
            </Link>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notifications;
