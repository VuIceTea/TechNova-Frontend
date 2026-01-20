import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const [keyword, setKeyword] = useState("");
    const { theme, toggleTheme } = useTheme();
    const { getCartItemsCount } = useCart();
    const { isAuthenticated } = useAuth();

    const handleSearchChange = (event) => {
        setKeyword(event.target.value);
    };
    return (
        <header className="w-full bg-white/95 dark:bg-[#111318]/90 fixed top-0 left-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-[#282e39] backdrop-blur-md px-4 py-3 lg:px-10 transition-colors duration-300">
            <Link to="/" className="gap-4 flex items-center cursor-pointer hover:opacity-80 transition-opacity">
                <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-[#135bec]"
                >
                    <path
                        d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                        fill="currentColor"
                    />
                </svg>
                <span className="hidden lg:block text-gray-900 dark:text-white text-xl font-semibold leading-tight transition-colors duration-300">
                    TechNova
                </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-9 ml-9">
                <Link to="/" className="text-gray-600 dark:text-[#9da6b9] text-sm font-medium leading-normal hover:text-[#135bec] dark:hover:text-white transition-colors">Trang chủ</Link>
                <Link to="/category" className="text-gray-600 dark:text-[#9da6b9] text-sm font-medium leading-normal hover:text-[#135bec] dark:hover:text-white transition-colors">Sản phẩm</Link>
                <Link to="/promotions" className="text-gray-600 dark:text-[#9da6b9] text-sm font-medium leading-normal hover:text-[#135bec] dark:hover:text-white transition-colors">Khuyến mãi</Link>
                <Link to="/news" className="text-gray-600 dark:text-[#9da6b9] text-sm font-medium leading-normal hover:text-[#135bec] dark:hover:text-white transition-colors">Tin tức</Link>
                <Link to="/support" className="text-gray-600 dark:text-[#9da6b9] text-sm font-medium leading-normal hover:text-[#135bec] dark:hover:text-white transition-colors">Hỗ trợ</Link>
            </nav>

            <div className="justify-end flex items-center">
                <label className="hidden md:flex min-w-40 max-w-64 h-10 mr-8">
                    <div
                        className="flex w-full h-full rounded-lg bg-gray-100 dark:bg-[#282e39] transition-colors duration-300"
                    >
                        <div className="flex items-center pl-4 text-gray-500 dark:text-[#9da6b9]">
                            <SearchIcon fontSize="small" />
                        </div>
                        <input
                            className="flex-1 bg-transparent px-4 pl-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#9da6b9] focus:outline-none border-none focus:ring-0"
                            placeholder="Tìm kiếm sản phẩm..."
                            onChange={handleSearchChange}
                            value={keyword}
                            type="text"
                        />
                    </div>
                </label>

                <div className="rounded-lg justify-center flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="h-10 w-10 bg-gray-100 dark:bg-[#282e39] rounded-lg flex justify-center items-center hover:bg-gray-200 dark:hover:bg-[#3a4250] transition-all duration-300 group"
                        aria-label="Chuyển đổi theme"
                    >
                        {theme === 'light' ? (
                            <DarkModeIcon className="text-gray-700 cursor-pointer group-hover:rotate-180 transition-transform duration-500" fontSize="small" />
                        ) : (
                            <LightModeIcon className="text-yellow-400 cursor-pointer group-hover:rotate-180 transition-transform duration-500" fontSize="small" />
                        )}
                    </button>
                    <Link
                        to="/notifications"
                        className="relative h-10 w-10 bg-gray-100 dark:bg-[#282e39] rounded-lg flex justify-center items-center hover:bg-gray-200 dark:hover:bg-[#3a4250] transition-all duration-300"
                    >
                        <NotificationsIcon className="text-gray-700 dark:text-white cursor-pointer" fontSize="small" />
                        <span className="absolute top-2 right-2 flex items-center justify-center w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#282e39]"></span>
                    </Link>
                    <Link
                        to="/cart"
                        className="relative h-10 w-10 bg-gray-100 dark:bg-[#282e39] rounded-lg flex justify-center items-center hover:bg-gray-200 dark:hover:bg-[#3a4250] transition-all duration-300"
                    >
                        <ShoppingCartIcon className="text-gray-700 dark:text-white cursor-pointer" fontSize="small" />
                        {getCartItemsCount() > 0 && (
                            <span className="absolute top-2 right-2 flex items-center justify-center min-w-4 h-4 px-1 text-[10px] font-bold text-white bg-[#135bec] rounded-full">
                                {getCartItemsCount()}
                            </span>
                        )}
                    </Link>
                    <Link
                        to={isAuthenticated ? "/profile" : "/login"}
                        className="h-10 w-10 bg-gray-100 dark:bg-[#282e39] rounded-full flex justify-center items-center hover:bg-gray-200 dark:hover:bg-[#3a4250] transition-all duration-300"
                    >
                        <PersonIcon className="text-gray-700 dark:text-white" fontSize="small" />
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default Header;