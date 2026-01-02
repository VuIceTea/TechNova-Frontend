import React from "react";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

const NewsCard = ({ news }) => {
    const formatTimeAgoWithDateFns = (dateString) => {
        const publishedDate = new Date(dateString);
        return formatDistanceToNow(publishedDate, { addSuffix: true, locale: vi });
    }
    return (
        <div className="group cursor-pointer border border-solid border-[#282e39] rounded-xl">
            <div className="overflow-hidden rounded-t-xl">
                <img
                    src={news.thumbnail}
                    alt={news.title}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="mt-4 space-y-2 px-4 pb-4">
                <span className="text-xs text-blue-500 font-semibold">
                    {news.category}
                </span>

                <h3 className="text-white font-semibold leading-snug line-clamp-2">{news.title}</h3>
                <p className="text-sm text-[#9da6b9] line-clamp-2">{news.excerpt}</p>
                <span className="text-xs text-[#9da6b9]">
                    {formatTimeAgoWithDateFns(news.publishedAt)} · {news.readTime}
                </span>
            </div>
        </div>
    );
}

export default NewsCard;