import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import BoltIcon from '@mui/icons-material/Bolt';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const { register } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Mật khẩu xác nhận không khớp!');
            return;
        }

        if (!agreedToTerms) {
            alert('Vui lòng đồng ý với điều khoản dịch vụ!');
            return;
        }

        const result = register(formData);
        if (result.success) {
            alert('Đăng ký thành công!');
            navigate('/');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-[#f6f6f8] dark:bg-[#111722] text-slate-900 dark:text-white font-display antialiased selection:bg-[#135bec]/30 selection:text-[#135bec] h-screen overflow-hidden">
            <div className="flex h-screen w-full overflow-hidden">
                {/* Left Side: Visual */}
                <div className="hidden lg:flex lg:w-1/2 relative bg-linear-to-br from-blue-50 to-blue-100 dark:bg-[#192233] overflow-hidden flex-col justify-between">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="Futuristic cyber technology background"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCET61qqMIYR0ecNSNh7eP-KNuR3rG59VFZ2faziME6v2T2kqUkuzotDkBBU7WCWbnp0ZXw2lYLb1ndJxnvylXwwdFUhrwE66iwRF51crQuRYqNdxkSiPJxZfC29UsKuG0Jy9VLcNNLseovrnOFBWJfYd6grHs8N4R2_J1dC-raW9PEQakf9CthZKDN3rW6hiiU_8Y33LRfh_3amdFC7EyiVVtj0FeJwZV3h77LsdZApn-Ar7D75veX79GbKYoQpQY551W_VJDk9QOQ"
                        />
                        {/* Dark Overlay for better text visibility */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20 dark:from-black/80 dark:via-black/60 dark:to-black/30"></div>
                    </div>

                    {/* Logo - Top */}
                    <Link to="/" className="relative z-10 p-8 flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <svg className="w-10 h-10 text-[#135bec]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
                        </svg>
                        <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">TechNova</h2>
                    </Link>

                    {/* Content - Bottom */}
                    <div className="relative z-10 p-8">
                        <blockquote className="text-xl lg:text-2xl font-bold leading-tight tracking-tight text-white mb-2 drop-shadow-lg">
                            "Công nghệ không chỉ là thiết bị, đó là cánh cửa mở ra những khả năng vô tận."
                        </blockquote>
                        <p className="text-gray-100 text-sm drop-shadow-md">Tham gia cùng hơn 50.000 tín đồ công nghệ tại TechNova.</p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex w-full lg:w-1/2 flex-col bg-[#f6f6f8] dark:bg-[#111722] overflow-hidden h-screen">
                    {/* Theme Toggle Switch */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
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

                    {/* Main Content */}
                    <main className="flex-1 flex flex-col justify-center px-6 lg:px-10 py-3 max-w-xl mx-auto w-full">
                        <div className="mb-3">
                            <h1 className="text-xl lg:text-2xl font-bold tracking-tight mb-1.5 text-slate-900 dark:text-white">Tạo tài khoản</h1>
                            <p className="text-slate-500 dark:text-[#92a4c9] text-xs">Khám phá thế giới công nghệ đỉnh cao cùng TechNova ngay hôm nay.</p>
                        </div>

                        {/* Social Sign Up */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                            <button className="flex items-center justify-center gap-2 h-9 rounded-lg border border-slate-200 dark:border-[#232f48] bg-white dark:bg-[#192233] hover:bg-slate-50 dark:hover:bg-[#232f45] transition-colors text-xs font-medium text-slate-900 dark:text-white">
                                <img
                                    alt="Google Logo"
                                    className="h-5"
                                    src="/src/assets/icons/google.svg"
                                />
                                <span>Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 h-9 rounded-lg border border-slate-200 dark:border-[#232f48] bg-white dark:bg-[#192233] hover:bg-slate-50 dark:hover:bg-[#232f45] transition-colors text-xs font-medium text-slate-900 dark:text-white">
                                <img
                                    alt="Facebook Logo"
                                    className="h-5"
                                    src="/src/assets/icons/facebook.svg"
                                />
                                <span>Facebook</span>
                            </button>
                        </div>

                        <div className="relative mb-3">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200 dark:border-[#232f48]"></div>
                            </div>
                            <div className="relative flex justify-center text-[10px] uppercase">
                                <span className="bg-[#f6f6f8] dark:bg-[#111722] px-2 text-slate-400 dark:text-slate-500">Hoặc đăng ký bằng email</span>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                            {/* Full Name */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-slate-700 dark:text-slate-200">Họ và tên</label>
                                <div className="relative">
                                    <input
                                        className="w-full h-12 rounded-lg bg-slate-50 dark:bg-[#192233] border border-slate-200 dark:border-[#232f48] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-1 focus:ring-[#135bec] focus:border-transparent px-4 pl-11 transition-all"
                                        placeholder="Nhập họ và tên của bạn"
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="absolute left-0 top-0 bottom-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                                        <PersonIcon style={{ fontSize: '16px' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Địa chỉ Email</label>
                                <div className="relative">
                                    <input
                                        className="w-full h-12 rounded-lg bg-slate-50 dark:bg-[#192233] border border-slate-200 dark:border-[#232f48] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-1 focus:ring-[#135bec] focus:border-transparent px-4 pl-10 transition-all text-sm"
                                        placeholder="techlover@example.com"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="absolute left-0 top-0 bottom-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                                        <MailIcon style={{ fontSize: '20px' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Password Group */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Mật khẩu</label>
                                    <div className="relative">
                                        <input
                                            className="w-full h-12 rounded-lg bg-slate-50 dark:bg-[#192233] border border-slate-200 dark:border-[#232f48] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-1 focus:ring-[#135bec] focus:border-transparent px-4 pr-10 transition-all text-sm"
                                            placeholder="••••••••"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <button
                                            className="absolute right-0 top-0 bottom-0 pr-3 flex items-center text-slate-400 dark:text-slate-500 hover:text-[#135bec] transition-colors"
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <VisibilityOffIcon style={{ fontSize: '20px' }} /> : <VisibilityIcon style={{ fontSize: '20px' }} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Xác nhận mật khẩu</label>
                                    <div className="relative">
                                        <input
                                            className="w-full h-12 rounded-lg bg-slate-50 dark:bg-[#192233] border border-slate-200 dark:border-[#232f48] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-1 focus:ring-[#135bec] focus:border-transparent px-4 pr-10 transition-all text-sm"
                                            placeholder="••••••••"
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                        <button
                                            className="absolute right-0 top-0 bottom-0 pr-3 flex items-center text-slate-400 dark:text-slate-500 hover:text-[#135bec] transition-colors"
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <VisibilityOffIcon style={{ fontSize: '20px' }} /> : <VisibilityIcon style={{ fontSize: '20px' }} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Terms Checkbox */}
                            <div className="flex items-start gap-2 mt-1">
                                <div className="flex items-center h-5">
                                    <input
                                        className="w-4 h-4 rounded border-slate-300 dark:border-[#232f48] text-[#135bec] focus:ring-[#135bec] bg-slate-50 dark:bg-[#192233]"
                                        id="terms"
                                        type="checkbox"
                                        checked={agreedToTerms}
                                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    />
                                </div>
                                <label className="text-xs text-slate-600 dark:text-slate-400 leading-tight" htmlFor="terms">
                                    Tôi đồng ý với <a className="text-[#135bec] hover:underline font-medium" href="#">Điều khoản dịch vụ</a> và <a className="text-[#135bec] hover:underline font-medium" href="#">Chính sách bảo mật</a> của TechNova.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#135bec] hover:bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-[#135bec]/25 mt-1"
                            >
                                Đăng ký
                            </button>
                        </form>

                        {/* Footer link */}
                        <div className="mt-4 text-center">
                            <p className="text-slate-500 dark:text-[#92a4c9] text-sm">
                                Đã có tài khoản? <Link className="text-[#135bec] font-bold hover:underline" to="/login">Đăng nhập ngay</Link>
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Register;
