import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockAddresses } from '../data/mockAddresses';

const AddressBook = () => {
  const [addresses, setAddresses] = useState(mockAddresses);

  const handleAddAddress = () => {
    const newAddress = {
      id: addresses.length + 1,
      name: prompt('Nhập tên người nhận:') || 'Người nhận mới',
      type: prompt('Loại địa chỉ (Nhà riêng/Công ty/Người thân):') || 'Khác',
      phone: prompt('Số điện thoại:') || '000 000 0000',
      address: prompt('Địa chỉ đầy đủ:') || 'Địa chỉ chưa cập nhật',
      isDefault: false,
      icon: 'location_on'
    };
    
    if (newAddress.name && newAddress.address !== 'Địa chỉ chưa cập nhật') {
      setAddresses([...addresses, newAddress]);
      alert('Đã thêm địa chỉ mới thành công!');
    }
  };

  const handleEditAddress = (id) => {
    const address = addresses.find(addr => addr.id === id);
    if (!address) return;

    const updatedName = prompt('Nhập tên người nhận:', address.name);
    const updatedPhone = prompt('Số điện thoại:', address.phone);
    const updatedAddress = prompt('Địa chỉ đầy đủ:', address.address);

    if (updatedName && updatedPhone && updatedAddress) {
      setAddresses(addresses.map(addr => 
        addr.id === id 
          ? { ...addr, name: updatedName, phone: updatedPhone, address: updatedAddress }
          : addr
      ));
      alert('Đã cập nhật địa chỉ thành công!');
    }
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
    alert('Đã đặt làm địa chỉ mặc định!');
  };

  const handleDelete = (id) => {
    const address = addresses.find(addr => addr.id === id);
    if (address?.isDefault) {
      alert('Không thể xóa địa chỉ mặc định! Vui lòng đặt địa chỉ khác làm mặc định trước.');
      return;
    }
    
    if (window.confirm('Bạn có chắc muốn xóa địa chỉ này?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
      alert('Đã xóa địa chỉ thành công!');
    }
  };

  const handleViewDeliveryZones = () => {
    alert('Khu vực giao hàng 2h:\n\n📍 TP. Hồ Chí Minh: Các quận nội thành\n📍 Hà Nội: Nội thành và một số quận ngoại thành\n\nGiao hàng tiêu chuẩn: Toàn quốc 3-5 ngày');
  };

  return (
    <div className="min-h-screen bg-[#f1f2f4] dark:bg-[#17191c] text-slate-900 dark:text-slate-100">
      {/* Top Navigation Bar */}
      <main className="grow px-3 md:px-4 lg:px-6 xl:px-8 py-8">
        <div className="max-w-400 mx-auto flex flex-col gap-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
          <Link to="/" className="hover:text-[#135bec]">Trang chủ</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link to="/profile" className="hover:text-[#135bec]">Tài khoản</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-900 dark:text-white font-medium">Sổ địa chỉ</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white dark:bg-[#1e2227] rounded-xl border border-slate-200 dark:border-[#2d343b] overflow-hidden">
              <div className="p-4 border-b border-slate-200 dark:border-[#2d343b]">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Quản lý tài khoản</p>
              </div>
              <nav className="flex flex-col">
                <Link to="/profile" className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-[#17191c] transition-colors">
                  <span className="material-symbols-outlined text-xl">person</span> Thông tin cá nhân
                </Link>
                <Link to="/orders" className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-[#17191c] transition-colors">
                  <span className="material-symbols-outlined text-xl">receipt_long</span> Đơn hàng của tôi
                </Link>
                <Link to="/addresses" className="flex items-center gap-3 px-4 py-3 text-sm bg-[#135bec]/10 text-[#135bec] border-r-4 border-[#135bec] font-semibold">
                  <span className="material-symbols-outlined text-xl">location_on</span> Sổ địa chỉ
                </Link>
                <Link to="/profile" className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-[#17191c] transition-colors">
                  <span className="material-symbols-outlined text-xl">payments</span> Phương thức thanh toán
                </Link>
                <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-[#17191c] transition-colors text-red-500">
                  <span className="material-symbols-outlined text-xl">logout</span> Đăng xuất
                </Link>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Page Heading Section */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Sổ địa chỉ</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Quản lý các địa điểm nhận hàng của bạn để thanh toán nhanh hơn.</p>
              </div>
              <button 
                onClick={handleAddAddress}
                className="flex items-center justify-center gap-2 bg-[#135bec] hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-[#135bec]/20"
              >
                <span className="material-symbols-outlined">add</span>
                Thêm địa chỉ mới
              </button>
            </div>

            {/* Address Cards Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className={`group relative bg-white dark:bg-[#1e2227] rounded-xl p-6 transition-all flex flex-col justify-between overflow-hidden ${
                    address.isDefault
                      ? 'border-2 border-[#135bec] shadow-lg shadow-[#135bec]/10 hover:shadow-xl hover:shadow-[#135bec]/20'
                      : 'border border-slate-200 dark:border-[#2d343b] hover:border-[#135bec]/50 hover:shadow-lg'
                  }`}
                >
                  {address.isDefault && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-[#135bec] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 uppercase tracking-widest">
                        <span className="material-symbols-outlined text-sm">verified</span> Mặc định
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`size-10 rounded-full ${address.isDefault ? 'bg-[#135bec]/10 text-[#135bec]' : 'bg-slate-100 dark:bg-[#17191c] text-slate-500'} flex items-center justify-center`}>
                        <span className="material-symbols-outlined">{address.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg leading-none">{address.name}</h3>
                        <p className={`text-sm font-medium mt-1 ${address.isDefault ? 'text-[#135bec]' : 'text-slate-500'}`}>{address.type}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-slate-600 dark:text-slate-400">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-lg shrink-0">call</span>
                        <span className="text-sm">{address.phone}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-lg shrink-0">location_on</span>
                        <span className="text-sm leading-relaxed">{address.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-[#2d343b] flex items-center justify-between">
                    {address.isDefault ? (
                      <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        Địa chỉ giao hàng mặc định
                      </div>
                    ) : (
                      <button 
                        onClick={() => handleSetDefault(address.id)}
                        className="text-sm font-semibold text-[#135bec] hover:underline underline-offset-4 decoration-2"
                      >
                        Đặt làm mặc định
                      </button>
                    )}
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleEditAddress(address.id)}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-[#17191c] rounded-lg text-slate-500 dark:text-slate-400 transition-colors" 
                        title="Chỉnh sửa"
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button 
                        onClick={() => handleDelete(address.id)}
                        className="p-2 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg text-slate-400 hover:text-red-500 transition-colors" 
                        title="Xóa"
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map/Visual Element */}
              <div className="relative rounded-xl overflow-hidden min-h-[240px] border border-slate-200 dark:border-[#2d343b]">
                <div 
                  className="absolute inset-0 bg-slate-200 dark:bg-[#1e2227] bg-cover bg-center opacity-50 dark:opacity-30"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRh2SXq1CIf3d1N5t98NKR-BJ-SnPiVJHtgrKQ6Eek1OBkotxHQR0xYhY46sCobV5IayXUOmh5tc05_cZSreZkt1Sm2wPGzICilpIXQXXsagcJ-iNXuOIS0LBvQTO9hlAUbZmcf68GgrK2XgJRV-0OfHY8e3uhhdCNISwUmvn3uxEsrn1s4Zm-OR6CH7ToBR4An3ZS8t5xLjwij_ptAHQdCjt_ZqPE-2rfLb5mu9m8zIO5Agc8rHtn_6qoNEu7uRRmULjJjt8LeOnY')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#f1f2f4] dark:from-[#17191c] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#135bec] mb-2">Giao hàng siêu tốc</p>
                  <h4 className="text-xl font-bold leading-tight">TechNova hỗ trợ giao hàng 2h tại TP.HCM & Hà Nội</h4>
                  <button 
                    onClick={handleViewDeliveryZones}
                    className="mt-4 text-sm font-medium underline hover:text-[#135bec] transition-colors"
                  >
                    Xem chi tiết khu vực hỗ trợ
                  </button>
                </div>
              </div>
            </div>

            {/* Tips / Info Section */}
            <div className="mt-12 bg-[#135bec]/5 border border-[#135bec]/20 rounded-xl p-6 flex gap-4">
              <span className="material-symbols-outlined text-[#135bec] text-3xl shrink-0">info</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Mẹo nhỏ</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Bạn có thể lưu tối đa 10 địa chỉ khác nhau. Việc đặt tên gợi nhớ (ví dụ: Nhà riêng, Công ty, Bố mẹ) sẽ giúp bạn dễ dàng lựa chọn hơn khi đặt hàng vào những dịp lễ tết hoặc tặng quà.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default AddressBook;
