import React from "react";
import { Link } from "react-router-dom";
import ComputerIcon from '@mui/icons-material/Computer';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import WatchIcon from '@mui/icons-material/Watch';
import HomeIcon from '@mui/icons-material/Home';


const mapIcon = {
    computer: ComputerIcon,
    smartphone: SmartphoneIcon,
    headphones: HeadphonesIcon,
    watch: WatchIcon,
    home_iot: HomeIcon
}

export default function CategorySection({ categories = [] }) {
    return (
        <section className="w-full mx-auto max-w-350 px-2 md:px-4 mb-16">
            <div className="flex items-center justify-between">
                <h2 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Danh mục nổi bật</h2>
                <Link to="/category" className="text-sm text-[#135bec] font-medium cursor-pointer hover:underline">
                    Xem tất cả
                </Link>
            </div>
            <div
                className="gap-4 grid md:grid-cols-2 lg:grid-cols-5 mt-6 overflow-hidden"
            >
                {categories.map((categorie) => {
                    const Icon = mapIcon[categorie.icon];
                    if (!Icon) return null;
                    return (
                        <Link
                            key={categorie.id}
                            to={`/category?category=${encodeURIComponent(categorie.name)}`}
                            className="flex flex-col items-center justify-center px-6 py-8 border border-solid border-gray-200 dark:border-[#282e39] rounded-lg bg-white dark:bg-[#1c1f27]/50 backdrop-blur-sm cursor-pointer hover:bg-[#135bec]/10 hover:shadow-lg dark:hover:shadow-[#135bec]/5 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#135bec]/10 dark:bg-[#135bec]/10 flex items-center justify-center">
                                <Icon className="text-[#135bec] w-7 h-7" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{categorie.name}</h3>
                        </Link>
                    )
                })}
            </div>
        </section>
    );
};