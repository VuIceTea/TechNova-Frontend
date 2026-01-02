import RatingStars from "../RatingStars";

const TestimonialCard = ({ data }) => {
    return (
        <div className="relative bg-[#101622] border border-solid border-[#282e39] rounded-xl p-4">
            <RatingStars rating={data.rating} />

            <p className="text-sm text-[#9da6b9] leading-relaxed mt-4">
                “{data.content}”
            </p>

            <div className="flex items-center gap-4 mt-6">
                <img
                    src={data.avatar}
                    alt={data.name}
                    className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                    <p className="text-white font-medium text-sm">
                        {data.name}
                    </p>
                    <p className="text-xs  text-[#9da6b9]">
                        {data.role}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;