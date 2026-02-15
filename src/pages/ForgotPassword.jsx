import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import MailIcon from '@mui/icons-material/Mail';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const { theme, toggleTheme } = useTheme();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Link khôi phục mật khẩu đã được gửi đến ${email}`);
    };

    return (
        <div className="bg-[#f6f6f8] dark:bg-[#111722] text-slate-900 dark:text-white font-display antialiased min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Pattern/Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-125 h-125 rounded-full bg-[#135bec]/5 blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-100 h-100 rounded-full bg-[#135bec]/10 blur-[80px]"></div>
            </div>

            {/* Theme Toggle Switch */}
            <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
                <LightModeIcon className="text-yellow-500 dark:text-gray-500 transition-colors" fontSize="small" />
                <button
                    onClick={toggleTheme}
                    className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none"
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

            {/* Main Content Area */}
            <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                {/* Central Card */}
                <div className="w-full max-w-120 flex flex-col gap-6">
                    {/* Logo Section (Centered above card) */}
                    <Link to="/" className="flex items-center justify-center gap-3 text-slate-900 dark:text-white hover:opacity-80 transition-opacity">
                        <svg className="w-8 h-8 text-[#135bec]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
                        </svg>
                        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em]">TechNova</h2>
                    </Link>

                    {/* Card Body */}
                    <div className="bg-white dark:bg-[#192233] rounded-xl shadow-2xl border border-slate-200 dark:border-[#232f48] p-8 flex flex-col gap-6">
                        {/* Text Header */}
                        <div className="text-center space-y-2">
                            <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight">Quên mật khẩu?</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
                                Nhập địa chỉ email liên kết với tài khoản của bạn và chúng tôi sẽ gửi cho bạn liên kết để đặt lại mật khẩu.
                            </p>
                        </div>

                        {/* Form Section */}
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <label className="flex flex-col gap-2">
                                <span className="text-slate-900 dark:text-white text-base font-medium leading-normal">Địa chỉ Email</span>
                                <div className="relative">
                                    <div className="absolute left-4 inset-y-0 flex items-center text-slate-400 dark:text-slate-500 pointer-events-none">
                                        <MailIcon style={{ fontSize: '20px' }} />
                                    </div>
                                    <input
                                        className="form-input flex w-full resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-1 focus:ring-[#135bec]/50 border border-slate-200 dark:border-[#232f48] bg-slate-50 dark:bg-[#111722] focus:border-[#135bec] dark:focus:border-[#135bec] h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 pl-12 pr-4 text-base font-normal leading-normal transition-all duration-200"
                                        placeholder="example@email.com"
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </label>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-[#135bec] hover:bg-[#1d6bf5] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-[#135bec]/20"
                            >
                                <span className="truncate">Gửi liên kết khôi phục</span>
                            </button>
                        </form>

                        {/* Footer / Back to Login */}
                        <div className="flex items-center justify-center pt-2">
                            <Link
                                className="group flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#135bec] dark:hover:text-[#135bec] transition-colors"
                                to="/login"
                            >
                                <ArrowBackIcon className="text-lg group-hover:-translate-x-1 transition-transform" style={{ fontSize: '18px' }} />
                                <span>Quay lại Đăng nhập</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 py-6 w-full text-center">
                <p className="text-xs text-slate-400 dark:text-slate-600">
                    © 2025 TechNova Inc. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
