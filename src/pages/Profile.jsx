import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import VerifiedIcon from '@mui/icons-material/Verified';
import IdCardIcon from '@mui/icons-material/BadgeOutlined';
import HomePinIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import LockIcon from '@mui/icons-material/Lock';
import PasswordIcon from '@mui/icons-material/Password';
import SecurityIcon from '@mui/icons-material/Security';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SaveIcon from '@mui/icons-material/Save';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FaceIcon from '@mui/icons-material/Face';

const Profile = () => {
    const { user, logout, updateProfile } = useAuth();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('account');

    const [profileData, setProfileData] = useState({
        fullName: user?.name || 'Nguyễn Thị B',
        nickname: 'Bella Nguyen',
        email: user?.email || 'nguyenb@example.com',
        phone: '0987 *** 123',
        birthdate: '1995-08-15',
        gender: 'female'
    });

    const [notifications, setNotifications] = useState({
        orderUpdates: true,
        promotions: false
    });

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleSaveProfile = () => {
        updateProfile(profileData);
        alert('Thông tin đã được cập nhật!');
    };

    return (
        <div className="bg-[#f6f6f8] dark:bg-[#111722] min-h-screen text-slate-900 dark:text-white overflow-x-hidden transition-colors duration-200">
            {/* Main Content Area */}
            <main className="grow px-3 md:px-4 lg:px-6 xl:px-8 py-8">
                <div className="max-w-400 mx-auto flex flex-col gap-6">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Link className="hover:text-[#135bec] dark:hover:text-white transition-colors" to="/">Trang chủ</Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900 dark:text-white font-medium">Thông tin cá nhân</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-6 mt-2">
                        {/* Side Navigation */}
                        <aside className="w-full lg:w-1/4 shrink-0">
                            <div className="bg-white dark:bg-[#192233] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-[#232f48] h-full">
                                {/* User Summary */}
                                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100 dark:border-[#232f48]">
                                    <div className="relative group">
                                        <div className="size-14 bg-gray-100 dark:bg-[#282e39] rounded-full flex items-center justify-center">
                                            <PersonIcon className="text-gray-700 dark:text-white" style={{ fontSize: '32px' }} />
                                        </div>
                                        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                            <EditIcon className="text-white text-sm" />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <h3 className="font-bold text-lg truncate text-slate-900 dark:text-white">{profileData.fullName}</h3>
                                        <p className="text-[#135bec] text-sm font-medium flex items-center gap-1">
                                            <VerifiedIcon style={{ fontSize: '16px' }} />
                                            {user?.membershipLevel || 'Thành viên Vàng'}
                                        </p>
                                    </div>
                                </div>

                                {/* Menu */}
                                <nav className="flex flex-col gap-1">
                                    <button
                                        onClick={() => setActiveSection('account')}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${activeSection === 'account' ? 'bg-[#135bec]/10 text-[#135bec]' : 'text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'} font-medium transition-all`}
                                    >
                                        <PersonIcon style={{ fontSize: '22px' }} />
                                        Thông tin tài khoản
                                    </button>
                                    <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-all">
                                        <InventoryIcon style={{ fontSize: '22px' }} />
                                        Đơn hàng của tôi
                                    </button>
                                    <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-all">
                                        <FavoriteIcon style={{ fontSize: '22px' }} />
                                        Sản phẩm yêu thích
                                    </button>
                                    <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-all">
                                        <LocationOnIcon style={{ fontSize: '22px' }} />
                                        Sổ địa chỉ
                                    </button>
                                    <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-all">
                                        <NotificationsIcon style={{ fontSize: '22px' }} />
                                        Thông báo
                                        <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
                                    </button>
                                    <div className="h-px bg-gray-100 dark:bg-[#232f48] my-2"></div>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
                                    >
                                        <LogoutIcon style={{ fontSize: '22px' }} />
                                        Đăng xuất
                                    </button>
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content Panel */}
                        <section className="flex-1 min-w-0">
                            {/* Page Heading */}
                            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Hồ sơ của tôi</h1>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                                </div>
                                <button
                                    onClick={handleSaveProfile}
                                    className="bg-[#135bec] hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-[#135bec]/30"
                                >
                                    <SaveIcon style={{ fontSize: '20px' }} />
                                    Lưu thay đổi
                                </button>
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-[1.5fr,1fr] gap-6">
                                {/* Personal Info Form */}
                                <div className="bg-white dark:bg-[#192233] rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-[#232f48]">
                                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                        <IdCardIcon className="text-[#135bec]" />
                                        Thông tin chung
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Họ và tên</label>
                                                <div className="relative">
                                                    <input
                                                        className="w-full bg-gray-50 dark:bg-[#111722] border border-gray-200 dark:border-[#232f48] rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] outline-none transition-all pl-10"
                                                        placeholder="Nhập họ tên của bạn"
                                                        type="text"
                                                        value={profileData.fullName}
                                                        onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                                                    />
                                                    <PersonIcon className="absolute left-3 top-3.5 text-slate-400 text-[20px]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                                <div className="relative">
                                                    <input
                                                        className="w-full bg-gray-50 dark:bg-[#111722] border border-gray-200 dark:border-[#232f48] rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] outline-none transition-all pl-10 disabled:opacity-70 disabled:cursor-not-allowed"
                                                        readOnly
                                                        type="email"
                                                        value={profileData.email}
                                                    />
                                                    <MailIcon className="absolute left-3 top-3.5 text-slate-400 text-[20px]" />
                                                    <button className="absolute right-3 top-3.5 text-[#135bec] text-xs font-medium hover:underline">Thay đổi</button>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Số điện thoại</label>
                                                <div className="relative">
                                                    <input
                                                        className="w-full bg-gray-50 dark:bg-[#111722] border border-gray-200 dark:border-[#232f48] rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] outline-none transition-all pl-10"
                                                        type="tel"
                                                        value={profileData.phone}
                                                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                                                    />
                                                    <PhoneIcon className="absolute left-3 top-3.5 text-slate-400 text-[20px]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Ngày sinh</label>
                                                <div className="relative">
                                                    <input
                                                        className="w-full bg-gray-50 dark:bg-[#111722] border border-gray-200 dark:border-[#232f48] rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] outline-none transition-all pl-10"
                                                        type="date"
                                                        value={profileData.birthdate}
                                                        onChange={(e) => setProfileData({ ...profileData, birthdate: e.target.value })}
                                                    />
                                                    <CalendarMonthIcon className="absolute left-3 top-3.5 text-slate-400 text-[20px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Giới tính</label>
                                                <div className="flex items-center gap-6 h-12.5 px-2">
                                                    <label className="flex items-center gap-2 cursor-pointer group">
                                                        <input
                                                            checked={profileData.gender === 'female'}
                                                            className="w-4 h-4 text-[#135bec] border-gray-300 focus:ring-[#135bec] bg-gray-100 dark:bg-[#111722] dark:border-gray-600"
                                                            name="gender"
                                                            type="radio"
                                                            onChange={() => setProfileData({ ...profileData, gender: 'female' })}
                                                        />
                                                        <span className="text-slate-700 dark:text-slate-300 group-hover:text-[#135bec] transition-colors">Nữ</span>
                                                    </label>
                                                    <label className="flex items-center gap-2 cursor-pointer group">
                                                        <input
                                                            checked={profileData.gender === 'male'}
                                                            className="w-4 h-4 text-[#135bec] border-gray-300 focus:ring-[#135bec] bg-gray-100 dark:bg-[#111722] dark:border-gray-600"
                                                            name="gender"
                                                            type="radio"
                                                            onChange={() => setProfileData({ ...profileData, gender: 'male' })}
                                                        />
                                                        <span className="text-slate-700 dark:text-slate-300 group-hover:text-[#135bec] transition-colors">Nam</span>
                                                    </label>
                                                    <label className="flex items-center gap-2 cursor-pointer group">
                                                        <input
                                                            checked={profileData.gender === 'other'}
                                                            className="w-4 h-4 text-[#135bec] border-gray-300 focus:ring-[#135bec] bg-gray-100 dark:bg-[#111722] dark:border-gray-600"
                                                            name="gender"
                                                            type="radio"
                                                            onChange={() => setProfileData({ ...profileData, gender: 'other' })}
                                                        />
                                                        <span className="text-slate-700 dark:text-slate-300 group-hover:text-[#135bec] transition-colors">Khác</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column (Address & Security) */}
                                <div className="flex flex-col gap-6">
                                    {/* Address Card */}
                                    <div className="bg-white dark:bg-[#192233] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-[#232f48] flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-4">
                                            <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                                                <HomePinIcon className="text-[#135bec]" />
                                                Địa chỉ mặc định
                                            </h2>
                                            <a className="text-sm text-[#135bec] font-medium hover:underline" href="#">Quản lý</a>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-[#111722] border border-gray-200 dark:border-[#232f48] rounded-lg p-4 flex-1">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className="font-medium text-slate-900 dark:text-white mb-1">Nhà Riêng</p>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                                        Toà nhà TechHub, Số 123 Đường Công Nghệ,<br />
                                                        Quận Cầu Giấy, Hà Nội
                                                    </p>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                                                        (+84) 987 *** 123
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="mt-4 w-full py-2.5 border border-dashed border-[#135bec]/40 text-[#135bec] rounded-lg text-sm font-medium hover:bg-[#135bec]/5 transition-colors flex items-center justify-center gap-2">
                                            <AddIcon style={{ fontSize: '18px' }} />
                                            Thêm địa chỉ mới
                                        </button>
                                    </div>

                                    {/* Security Quick Links */}
                                    <div className="bg-white dark:bg-[#192233] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-[#232f48]">
                                        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                            <LockIcon className="text-[#135bec]" />
                                            Bảo mật
                                        </h2>
                                        <div className="space-y-3">
                                            <a className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg group transition-colors" href="#">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                                                        <PasswordIcon style={{ fontSize: '20px' }} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium text-slate-900 dark:text-white">Đổi mật khẩu</span>
                                                        <span className="text-xs text-slate-500 dark:text-slate-400">Cập nhật lần cuối 30 ngày trước</span>
                                                    </div>
                                                </div>
                                                <ChevronRightIcon className="text-slate-400 group-hover:translate-x-1 transition-transform text-[18px]" />
                                            </a>
                                            <a className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg group transition-colors" href="#">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
                                                        <SecurityIcon style={{ fontSize: '20px' }} />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium text-slate-900 dark:text-white">Xác thực 2 bước</span>
                                                        <span className="text-xs text-slate-500 dark:text-slate-400">Đang bật</span>
                                                    </div>
                                                </div>
                                                <ChevronRightIcon className="text-slate-400 group-hover:translate-x-1 transition-transform text-[18px]" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Notification Settings */}
                            <div className="mt-6 bg-white dark:bg-[#192233] rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-[#232f48]">
                                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <NotificationsActiveIcon className="text-[#135bec]" />
                                    Cài đặt thông báo
                                </h2>
                                <div className="space-y-4">
                                    <label className="flex items-center justify-between p-4 border border-gray-100 dark:border-[#232f48] rounded-lg cursor-pointer hover:border-[#135bec]/50 transition-colors">
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white">Thông báo đơn hàng</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Nhận cập nhật về trạng thái đơn hàng của bạn</p>
                                        </div>
                                        <div className="relative inline-flex items-center cursor-pointer shrink-0">
                                            <input
                                                checked={notifications.orderUpdates}
                                                className="sr-only peer"
                                                type="checkbox"
                                                onChange={(e) => setNotifications({ ...notifications, orderUpdates: e.target.checked })}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-[#135bec] relative">
                                                <div className="absolute top-0.5 left-0.5 bg-white border border-gray-300 dark:border-gray-600 rounded-full h-5 w-5 transition-transform duration-300 peer-checked:translate-x-full" style={{ transform: notifications.orderUpdates ? 'translateX(20px)' : 'translateX(0)' }}></div>
                                            </div>
                                        </div>
                                    </label>
                                    <label className="flex items-center justify-between p-4 border border-gray-100 dark:border-[#232f48] rounded-lg cursor-pointer hover:border-[#135bec]/50 transition-colors">
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white">Khuyến mãi & Ưu đãi</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Nhận thông tin về các chương trình giảm giá mới nhất</p>
                                        </div>
                                        <div className="relative inline-flex items-center cursor-pointer shrink-0">
                                            <input
                                                checked={notifications.promotions}
                                                className="sr-only peer"
                                                type="checkbox"
                                                onChange={(e) => setNotifications({ ...notifications, promotions: e.target.checked })}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-[#135bec] relative">
                                                <div className="absolute top-0.5 left-0.5 bg-white border border-gray-300 dark:border-gray-600 rounded-full h-5 w-5 transition-transform duration-300" style={{ transform: notifications.promotions ? 'translateX(20px)' : 'translateX(0)' }}></div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;
