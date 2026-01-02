const RatingStars = ({ rating }) => {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400">
                    {i < rating ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
}

export default RatingStars;