import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";


// {
//     "id": "bcdefa0123456789bcdefa01",
//         "category_id": 2,
//             "title": "Bangladesh's Export Earnings Show Strong Growth in Q1 2025",
//                 "rating": {
//         "number": 4,
//             "badge": "trending"
//     },
//     "total_view": 6789,
//         "author": {
//         "name": "Shirin Akter",
//             "published_date": "2025-04-22T17:00:00.000Z",
//                 "img": "https://randomuser.me/api/portraits/women/29.jpg"
//     },
//     "thumbnail_url": "https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg",
//         "image_url": "https://apparelresources.com/wp-content/uploads/2024/11/Bangladeshs-RMG-exports-decline-by-2.8-per-cent-in-FY-25-Q1-.jpg",
//             "details": "Bangladesh's export sector has demonstrated robust performance in the first quarter of 2025, registering significant growth compared to the same period last year. Key sectors such as readymade garments and leather goods have contributed substantially to this positive trend. The increase in export earnings is attributed to rising global demand and the government's supportive policies aimed at enhancing trade competitiveness. Analysts predict continued growth in the coming quarters, provided that global economic conditions remain favorable and domestic industries maintain their momentum. This positive export performance is expected to have a favorable impact on the country's foreign exchange reserves and overall economic stability.",
//                 "tags": ["exports", "economy", "business", "growth", "trade"],
//                     "others": {
//         "is_today_pick": true,
//             "is_trending": true
//     },
//     "production": true
// }

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(id, data);
    useEffect(() => {
        if (id == '0') {
            const filteredNews = data
            console.log(filteredNews);
            setCategoryNews(filteredNews);
        }
        else if (id == '1') {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            console.log(filteredNews);
            setCategoryNews(filteredNews);
        }
        else {
            const filteredNews = data.filter(news => news.category_id == id);
            console.log(filteredNews);
            setCategoryNews(filteredNews);
        }

    }, [data, id, setCategoryNews])
    return (
        <div className="text-primary">
            Total {categoryNews.length} news found
        </div>
    );
};

export default CategoryNews;