import React, { useState, useEffect } from "react";

const FlipDigit = ({ digit }) => {
    const [currentDigit, setCurrentDigit] = useState(digit);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        if (digit !== currentDigit) {
            setIsFlipping(true);
            const timeout = setTimeout(() => {
                setCurrentDigit(digit);
                setIsFlipping(false);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [digit, currentDigit]);

    return (
        <div className="relative w-6 h-10 sm:w-8 sm:h-12 md:w-10 md:h-14">
            <div
                className={`absolute inset-0 bg-white/10 rounded flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold transition-transform duration-300 ${isFlipping ? 'animate-flip' : ''
                    }`}
                style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                }}
            >
                {currentDigit}
            </div>
        </div>
    );
};

export default function PromoSection({ promo }) {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        if (!promo || !promo.endTime) return;

        const calculateTimeLeft = () => {
            const endTime = new Date(promo.endTime).getTime();
            const now = new Date().getTime();
            const difference = endTime - now;

            if (difference > 0) {
                const hours = Math.floor(difference / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ hours, minutes, seconds });
            } else {
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [promo?.endTime]);

    if (!promo || !promo.background) {
        return null;
    }

    return (
        <>
            <style>
                {`
                    @keyframes flip {
                        0% {
                            transform: rotateX(0deg);
                        }
                        50% {
                            transform: rotateX(-90deg);
                        }
                        100% {
                            transform: rotateX(0deg);
                        }
                    }
                    .animate-flip {
                        animation: flip 0.6s ease-in-out;
                    }
                `}
            </style>
            <section className="w-full mx-auto max-w-350 px-2 md:px-4 mb-16">
                <div
                    className="relative rounded-2xl p-6 md:p-12 overflow-hidden min-h-70 md:min-h-80"
                    style={{
                        background: `linear-gradient(135deg, ${promo.background.from} 0%, ${promo.background.to} 100%)`
                    }}
                >
                    {/* Content Section */}
                    <div className="relative z-10 max-w-full md:max-w-2xl pr-0 md:pr-64">
                        <h2 className="text-white text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                            {promo.title}
                        </h2>
                        <p className="text-blue-100 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                            {promo.description}
                        </p>
                        <a
                            href={promo.ButtonLink}
                            className="inline-block bg-white text-[#135bec] px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                        >
                            {promo.ButtonText}
                        </a>
                    </div>

                    {/* Countdown Circle - Responsive positioning */}
                    <div className="absolute right-4 top-4 md:right-16 md:top-1/2 md:-translate-y-1/2">
                        <div className="relative">
                            {/* Circle Background */}
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center border border-white/20">
                                <span className="text-white/70 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 md:mb-2">
                                    Kết thúc sau
                                </span>

                                <div className="flex items-center gap-0.5 sm:gap-1 mb-0.5 md:mb-1">
                                    <FlipDigit digit={String(timeLeft.hours).padStart(2, '0')[0]} />
                                    <FlipDigit digit={String(timeLeft.hours).padStart(2, '0')[1]} />
                                    <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold mx-0.5 sm:mx-1">:</span>
                                    <FlipDigit digit={String(timeLeft.minutes).padStart(2, '0')[0]} />
                                    <FlipDigit digit={String(timeLeft.minutes).padStart(2, '0')[1]} />
                                </div>
                                <span className="text-white/70 text-[10px] sm:text-xs md:text-sm mt-0.5 md:mt-1">
                                    Giờ
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}