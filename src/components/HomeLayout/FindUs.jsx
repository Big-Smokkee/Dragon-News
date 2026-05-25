import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h2 className="text-primary font-semibold mb-5">Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 join-item justify-start text-accent"><FaFacebook size={24}></FaFacebook> Facebook</button>
                    <button className="btn bg-base-100 join-item justify-start text-accent"><FaTwitter size={24}></FaTwitter> Twiter</button>
                    <button className="btn bg-base-100 join-item justify-start text-accent"><FaInstagram size={24}></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;