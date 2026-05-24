import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-bold text-primary mb-4">Login with</h2>
            <div className="space-y-5">
                {/* Google */}
                <button className="btn btn-outline btn-secondary hover:text-white   w-full mb-2">
                    <FcGoogle size={24} />
                    Login with Google
                </button>
                {/* GitHub */}
                <button className="btn btn-outline btn-primary  w-full flex items-center justify-center gap-2">
                    <FaGithub size={24} />
                    <p>Login with GitHub</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;