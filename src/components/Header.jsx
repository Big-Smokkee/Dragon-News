import { format } from 'date-fns';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-4 py-12'>
            <img src={logo} alt="Dragon news" className='w-117' />
            <h4 className='text-lg text-accent font-semibold'>Journalism Without Fear or Favour</h4>
            <p className='text-xl text-accent font-medium'><span className="text-primary">{format(new Date(), "EEEE")}</span>, {format(new Date(), "MMMM, d, Y")}</p>
        </div>
    );
};

export default Header;