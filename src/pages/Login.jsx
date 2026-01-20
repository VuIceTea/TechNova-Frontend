import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import BoltIcon from '@mui/icons-material/Bolt';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const { login } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = login(email, password);
        if (result.success) {
            navigate(from, { replace: true });
        }
    };

    return (
        <div className="bg-[#f6f6f8] dark:bg-[#111722] font-display text-gray-900 dark:text-white h-screen flex flex-col overflow-hidden">
            {/* Main Content */}
            <main className="flex flex-1 w-full relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#232f48 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="layout-container flex w-full justify-center items-center py-4 px-4 md:px-10 z-10">
                    <div className="flex w-full max-w-275 overflow-hidden rounded-2xl border border-gray-300 dark:border-[#232f48] bg-white/80 dark:bg-[#192233]/50 backdrop-blur-sm shadow-2xl flex-col md:flex-row h-[85vh] max-h-175">
                        {/* Left Side: Visual/Branding */}
                        <div
                            className="hidden md:flex md:w-1/2 relative bg-cover bg-center flex-col justify-between p-6"
                            style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5jYygF5EL_hHLQMyuPde_4DDzZeqljdOb_2nxsWnv6jKo5N0wsdLw4DLotK7q8ZDsM2V-jFC9HFyNAtgKSeWvkgaZGy0XefsGqf9A9Ml-6BYBgtr-3OKN0poZ_WaEFjZNIXja79-rWLc2FnRmFpIxKxlasGAxXFK3C3q31cfvGU47g1M2qmIIjygFozbLf95mF6MgYc-Hh5EkG0BN4b6C_Qepzhz8EYA0aZh12fPfcBHk69hJpQ0h_PKxyqlBQazgpNud0MVYkjcF')"
                            }}
                        >
                            {/* Dark Overlay for better text visibility */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20 dark:from-black/80 dark:via-black/60 dark:to-black/30"></div>

                            {/* Logo - Top */}
                            <Link to="/" className="relative z-10 flex items-center gap-3 hover:opacity-80 transition-opacity">
                                <svg className="w-10 h-10 text-[#135bec]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
                                </svg>
                                <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">TechNova</h2>
                            </Link>

                            {/* Content - Bottom */}
                            <div className="relative z-10">

                                <h2 className="text-2xl font-bold text-white mb-1.5 drop-shadow-lg">Công nghệ tương lai</h2>
                                <p className="text-gray-100 text-sm leading-relaxed drop-shadow-md">
                                    Trải nghiệm mua sắm thiết bị điện tử hàng đầu với TechNova. Đăng nhập để khám phá ưu đãi dành riêng cho bạn.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Login Form */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 lg:p-6 bg-white dark:bg-[#192233] relative overflow-hidden">
                            {/* Theme Toggle Switch */}
                            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                                <LightModeIcon className="text-yellow-500 dark:text-gray-500 transition-colors" fontSize="small" />
                                <button
                                    onClick={toggleTheme}
                                    className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#135bec] focus:ring-offset-2"
                                    style={{ backgroundColor: theme === 'dark' ? '#135bec' : '#d1d5db' }}
                                    aria-label="Chuyển đổi theme"
                                >
                                    <span
                                        className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-300"
                                        style={{ transform: theme === 'dark' ? 'translateX(26px)' : 'translateX(4px)' }}
                                    />
                                </button>
                                <DarkModeIcon className="text-gray-400 dark:text-blue-400 transition-colors" fontSize="small" />
                            </div>

                            <div className="max-w-95 mx-auto w-full">
                                {/* Headline */}
                                <div className="text-center mb-4">
                                    <h1 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight mb-1.5">Chào mừng trở lại!</h1>
                                    <p className="text-gray-600 dark:text-[#92a4c9] text-sm">Vui lòng đăng nhập để tiếp tục.</p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                    {/* Email Input */}
                                    <label className="flex flex-col">
                                        <span className="text-gray-900 dark:text-white text-sm font-medium leading-normal pb-1.5">Email hoặc Tên đăng nhập</span>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-[#92a4c9]">
                                                <MailIcon style={{ fontSize: '18px' }} />
                                            </div>
                                            <input
                                                className="form-input flex w-full rounded-lg text-gray-900 dark:text-white border border-gray-300 dark:border-[#232f48] bg-gray-50 dark:bg-[#111722] h-10 pl-9 pr-4 placeholder:text-gray-400 dark:placeholder:text-[#92a4c9]/50 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all text-sm font-normal leading-normal"
                                                placeholder="example@technova.com"
                                                type="text"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </label>

                                    {/* Password Input */}
                                    <label className="flex flex-col">
                                        <span className="text-gray-900 dark:text-white text-sm font-medium leading-normal pb-1.5">Mật khẩu</span>
                                        <div className="relative flex w-full items-center rounded-lg">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-[#92a4c9]">
                                                <LockIcon style={{ fontSize: '18px' }} />
                                            </div>
                                            <input
                                                className="form-input flex w-full rounded-lg text-gray-900 dark:text-white border border-gray-300 dark:border-[#232f48] bg-gray-50 dark:bg-[#111722] h-10 pl-9 pr-10 placeholder:text-gray-400 dark:placeholder:text-[#92a4c9]/50 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all text-sm font-normal leading-normal"
                                                placeholder="********"
                                                type={showPassword ? 'text' : 'password'}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <button
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-[#92a4c9] hover:text-gray-900 dark:hover:text-white cursor-pointer"
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <VisibilityOffIcon style={{ fontSize: '20px' }} /> : <VisibilityIcon style={{ fontSize: '20px' }} />}
                                            </button>
                                        </div>
                                    </label>

                                    {/* Options: Remember Me & Forgot Password */}
                                    <div className="flex items-center justify-between mt-1">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input
                                                className="rounded border-gray-300 dark:border-[#232f48] bg-gray-50 dark:bg-[#111722] text-[#135bec] focus:ring-offset-white dark:focus:ring-offset-[#111722] focus:ring-[#135bec] h-4 w-4"
                                                type="checkbox"
                                                checked={rememberMe}
                                                onChange={(e) => setRememberMe(e.target.checked)}
                                            />
                                            <span className="text-sm text-gray-600 dark:text-[#92a4c9] group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Nhớ mật khẩu</span>
                                        </label>
                                        <Link className="text-sm font-medium text-[#135bec] hover:text-[#1d6bf5] hover:underline transition-colors" to="/forgot-password">
                                            Quên mật khẩu?
                                        </Link>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-[#135bec] hover:bg-[#1d6bf5] text-white text-sm font-bold tracking-wide transition-all shadow-lg shadow-[#135bec]/25 mt-1"
                                    >
                                        Đăng nhập
                                    </button>
                                </form>

                                {/* Social Login */}
                                <div className="mt-4">
                                    <div className="relative flex py-1.5 items-center">
                                        <div className="grow border-t border-gray-300 dark:border-[#232f48]"></div>
                                        <span className="shrink-0 mx-3 text-gray-500 dark:text-[#92a4c9] text-[10px] uppercase tracking-wider font-medium">Hoặc đăng nhập với</span>
                                        <div className="grow border-t border-gray-300 dark:border-[#232f48]"></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 mt-3">
                                        <button className="flex items-center justify-center gap-2 h-9 rounded-lg border border-gray-300 dark:border-[#232f48] bg-gray-50 dark:bg-[#111722] hover:bg-gray-100 dark:hover:bg-[#232f48]/50 transition-colors text-gray-900 dark:text-white text-xs font-medium">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"></path>
                                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                            </svg>
                                            Google
                                        </button>
                                        <button className="flex items-center justify-center gap-2 h-9 rounded-lg border border-gray-300 dark:border-[#232f48] bg-gray-50 dark:bg-[#111722] hover:bg-gray-100 dark:hover:bg-[#232f48]/50 transition-colors text-gray-900 dark:text-white text-xs font-medium">
                                            <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                                            </svg>
                                            Facebook
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Footer link */}
                            <div className="mt-4 text-center">
                                <p className="text-gray-600 dark:text-[#92a4c9] text-xs">
                                    Bạn chưa có tài khoản? <Link className="text-[#135bec] font-bold hover:underline" to="/register">Đăng ký ngay</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
