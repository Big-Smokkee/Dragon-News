// import Marquee from "react-fast-marquee";


const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-4'>
            <p className='text-base-100 bg-secondary px-6 py-2'>Latest</p>
            <div className="inline-block animate-marquee">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sapiente, nisi quae voluptas vel ratione porro quos veritatis similique aliquid?</p>
            </div>

            {/* <Marquee>
                <div className="inline-block animate-marquee">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sapiente, nisi quae voluptas vel ratione porro quos veritatis similique aliquid?</p>
                </div>
            </Marquee> */}

        </div>
    );
};

export default LatestNews;