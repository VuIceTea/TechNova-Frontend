import React from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

const NewsCard = ({ news }) => {
    const formatTimeAgoWithDateFns = (dateString) => {
        const publishedDate = new Date(dateString);
        return formatDistanceToNow(publishedDate, { addSuffix: true, locale: vi });
    }
    return (
        <Link to={`/news/${news.slug}`}>
            <div className="group cursor-pointer border border-solid border-gray-200 dark:border-[#282e39] rounded-xl bg-white dark:bg-transparent hover:shadow-lg dark:hover:shadow-[#135bec]/5 transition-all duration-300">
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

                    <h3 className="text-gray-900 dark:text-white font-semibold leading-snug line-clamp-2">{news.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-[#9da6b9] line-clamp-2">{news.excerpt}</p>
                    <span className="text-xs text-gray-500 dark:text-[#9da6b9]">
                        {formatTimeAgoWithDateFns(news.publishedAt)} · {news.readTime}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default NewsCard;