import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

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
        <div>
            <p className="text-primary font-bold mb-5">Total <span className="text-secondary">{categoryNews.length}</span> news found</p>
            <div className="grid grid-cols-1 gap-5">
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;