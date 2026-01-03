import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
    const [keyword, setKeyword] = useState("");

    const handleSearchChange = (event) => {
        setKeyword(event.target.value);
    };
    return (
        <header className="w-full bg-[#111318]/90 fixed top-0 left-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#282e39] backdrop-blur-md px-4 py-3 lg:px-10 ">
            <div className="gap-4 flex items-center cursor-pointer">
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
                <button className="cursor-pointer hidden lg:block text-white text-xl font-semibold leading-tight border-none">
                    TechNova
                </button>

                <nav className="hidden lg:flex items-center gap-9 ml-9">
                    <Link to="/" className="text-[#9da6b9] text-sm font-medium leading-normal hover:text-white transition-colors">Trang chủ</Link>
                    <Link to="/category" className="text-[#9da6b9] text-sm font-medium leading-normal hover:text-white transition-colors">Sản phẩm</Link>
                    <a href="#" className="text-[#9da6b9] text-sm font-medium leading-normal hover:text-white transition-colors">Khuyến mãi</a>
                    <a href="#" className="text-[#9da6b9] text-sm font-medium leading-normal hover:text-white transition-colors">Hỗ trợ</a>
                </nav>
            </div>

            <div className="justify-end flex items-center">
                <label className="hidden md:flex min-w-40 max-w-64 h-10 mr-8">
                    <div
                        className="flex w-full h-full rounded-lg bg-border-dark bg-[#282e39]"
                    >
                        <div className="flex items-center pl-4 text-[#9da6b9]">
                            <SearchIcon fontSize="small" />
                        </div>
                        <input
                            className="flex-1 bg-transparent px-4 pl-2 text-sm text-white placeholder:text-[#9da6b9] focus:outline-none"
                            placeholder="Tìm kiếm sản phẩm..."
                            onChange={handleSearchChange}
                            value={keyword}
                            type="text"
                        />
                    </div>
                </label>

                <div className=" rounded-lg justify-center flex items-center gap-3">
                    <div className="h-10 w-10 bg-[#282e39] rounded-lg flex justify-center items-center">
                        <ShoppingCartIcon className="text-white cursor-pointer" fontSize="small" />
                    </div>
                    <div className="h-10 w-10 bg-[#282e39] rounded-lg flex justify-center items-center">
                        <PersonIcon className="text-white cursor-pointer" fontSize="small" />
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;