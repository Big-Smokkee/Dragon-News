import { use } from "react";

const categoryPromise = fetch('/categories.json')
    .then(res => res.json())
const Categories = () => {
    const categories = use(categoryPromise);
    console.log(categories);
    return (
        <div>
            <h2 className='font-bold text-primary text-lg'>All Categories</h2>
        </div>
    );
};

export default Categories;