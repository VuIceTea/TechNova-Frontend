import React, { useState } from "react";
import PublicIcon from '@mui/icons-material/Public';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <footer className="w-full bg-[#111318]/90 items-center justify-center whitespace-nowrap border-t border-solid border-[#282e39] backdrop-blur-md pt-16 pb-8 px-10 text-white text-sm">
            <div className="text-left grid grid-cols-4 gap-20 border-b border-solid border-[#282e39] pb-8">
                <div className="leading-relaxed whitespace-break-spaces">
                    <div className="flex gap-2 pb-4">
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
                    </div>
                    <p className="text-[#9da6b9] text-sm">
                        TechNova là điểm đến hàng đầu cho những người yêu công nghệ. Chúng tôi cung cấp các sản phẩm chính hãng, chất lượng cao với dịch vụ khách hàng tận tâm.
                    </p>

                    <div className="flex gap-4 mt-2">
                        <PublicIcon className="text-[#9da6b9] cursor-pointer" />
                        <VideocamIcon className="text-[#9da6b9] cursor-pointer" />
                        <PhotoCameraIcon className="text-[#9da6b9] cursor-pointer" />
                    </div>
                </div>

                <div className="">
                    <h4 className="text-white font-bold mb-6 text-base">Mua sắm</h4>
                    <ul className="flex flex-col gap-3">
                        <li><a href="#" className="text-[#9da6b9] hover:text-white text-sm transition-colors">Laptop Gaming</a></li>
                        <li><a href="#" className="text-[#9da6b9] hover:text-white text-sm transition-colors">Điện thoại thông minh</a></li>
                        <li><a href="#" className="text-[#9da6b9] hover:text-white text-sm transition-colors">Phụ kiện</a></li>
                        <li><a href="#" className="text-[#9da6b9] hover:text-white text-sm transition-colors">Khuyến mãi hot</a></li>
                    </ul>
                </div>

                <div className="">
                    <h4 className="text-white font-bold mb-6 text-base">Hỗ trợ khách hàng</h4>
                    <ul className="flex flex-col gap-3">
                        <li><a href="#" className="text-[#9da6b9] hover:text-white text-sm transition-colors">Trung tâm trợ giúp</a></li>
                        <li><a href="#" className="text-[#9da6b9] hover:text-white text-sm transition-colors">Chính sách bảo hành</a></li>
                        <li><a href="#" className="text-[#9da6b9] hover:text-white text-sm transition-colors">Trạng thái đơn hàng</a></li>
                        <li><a href="#" className="text-[#9da6b9] hover:text-white text-sm transition-colors">Liên hệ</a></li>
                    </ul>
                </div>

                <div className="leading-relaxed whitespace-break-spaces">
                    <h4 className="text-white font-bold mb-6 text-base">Đăng ký nhận tin</h4>
                    <p className="text-[#9da6b9] text-sm transition-colors">Nhận thông tin mới nhất về sản phẩm và khuyến mãi</p>
                    <div className="hidden lg:flex gap-3 mt-3">
                        <label className="hidden md:flex min-w-40 max-w-64 h-11">
                            <div
                                className="flex w-full h-full rounded-lg bg-[#282e39]"
                            >
                                <input
                                    className="
                                    flex-1 bg-transparent px-4 pl-5 text-sm text-white
                                    placeholder:text-[#9da6b9]
                                    border border-[#282e39] rounded-lg
                                    focus:outline-none focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec]
                                "
                                    placeholder="Email của bạn"
                                    onChange={handleEmailChange}
                                    value={email}
                                    type="text"
                                />

                            </div>
                        </label>

                        <button className="h-11 flex items-center justify-center hover:bg-blue-500 text-white rounded-lg px-4 transition-colors bg-blue-500 cursor-pointer">
                            <SendIcon fontSize="small" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 justify-between py-8">
                <p className="text-sm text-[#9da6b9]">© 2025 TechNova. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="text-sm text-[#9da6b9] hover:text-white">Điều khoản bảo mật</a>
                    <a href="#" className="text-sm text-[#9da6b9] hover:text-white">Điều khoản sử dụng</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;