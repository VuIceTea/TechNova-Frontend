import React from "react";
import NewsCard from "./Cards/NewsCard";
import { newsList } from "../data/mockNews";

const NewsSection = () => {
    return (
        <section className="w-full mx-auto max-w-350 px-2 md:px-4 mb-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-white text-2xl font-bold">Tin tức công nghệ mới nhất</h2>
                <a href="/news" className="text-[#135bec] font-medium hover:underline text-sm cursor-pointer">Xem tất cả tin tức</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsList.map((news) => (
                    <NewsCard key={news.id} news={news} />
                ))}
            </div>
        </section>
    );
}

export default NewsSection;