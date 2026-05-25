import { FaEye, FaStar, FaShareAlt, FaBookmark } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
        tags,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md">

            {/* Top Author Section */}
            <div className="flex items-center justify-between bg-base-200 p-4 rounded-t-xl">

                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                        <h2 className="font-semibold text-sm text-primary">
                            {author.name}
                        </h2>

                        <p className="text-xs text-accent">
                            {format(new Date(author.published_date), "yyyy-MM-dd")}
                        </p>
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4 text-gray-500">
                    <FaBookmark className="cursor-pointer hover:text-primary" />
                    <FaShareAlt className="cursor-pointer hover:text-primary" />
                </div>
            </div>

            {/* Card Body */}
            <div className="card-body border-l border-r border-b border-base-300">

                {/* Title */}
                <h2 className="card-title text-xl leading-snug text-primary">
                    {title}
                </h2>

                {/* Image */}
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="rounded-xl h-64 w-full object-cover"
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {
                        tags.map((tag, index) => (
                            <span
                                key={index}
                                className="badge badge-outline hover:bg-secondary hover:text-white"
                            >
                                #{tag}
                            </span>
                        ))
                    }
                </div>

                {/* Details */}
                <p className="text-accent text-sm mt-3">
                    {
                        details.length > 200
                            ? <>
                                {details.slice(0, 200)}...
                                <span className="text-orange-500 font-semibold cursor-pointer ml-1">
                                    Read More
                                </span>
                            </>
                            : details
                    }
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-5 border-t border-base-300 pt-4">

                    {/* Rating */}
                    <div className="flex items-center gap-2">

                        <div className="flex text-orange-400">
                            {
                                [...Array(rating.number)].map((_, index) => (
                                    <FaStar key={index} />
                                ))
                            }
                        </div>

                        <span className="font-medium">
                            {rating.number}
                        </span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-2 text-gray-500">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;