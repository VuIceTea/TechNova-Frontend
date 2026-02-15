export default function BannerCarousel({ banners = [] }) {
    return (
        <section className="w-full max-w-350 mx-auto px-2 md:px-4 pt-6 mb-16">
            {banners.map((banner) => (
                <div
                    key={banner.id}
                    className="flex min-h-100 md:min-h-130 flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-end px-6 pb-10 md:px-12 md:pb-16 overflow-hidden relative"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%), url(${banner.imageUrl})`,
                    }}
                >
                    <div className="flex flex-col gap-3 text-left max-w-2xl relative z-10">
                        <div className="inline-flex items-center rounded-full border border-[#3b4354] bg-[#1c1f27]/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white w-fit mb-2">
                            <span className="mr-1 h-1.5 w-1.5 rounded-full bg-[#135bec]"></span> Mới ra mắt
                        </div>
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                            {banner.title}
                        </h1>
                        <h2 className="text-gray-200 text-base md:text-xl font-normal leading-relaxed max-w-xl">
                            {banner.description}
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-3 relative z-10">
                        {banner.buttons.map((btn, index) => (
                            <button
                                key={index}
                                className={
                                    btn.variant === "primary"
                                        ? "flex min-w-30 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#135bec] hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all"
                                        : "flex min-w-30 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#282e39]/80 backdrop-blur-md hover:bg-[#3b4354] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all"
                                }
                            >
                                <span className="truncate">{btn.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};