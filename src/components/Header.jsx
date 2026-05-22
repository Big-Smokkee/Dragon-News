import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-5 py-12'>
            <img src={logo} alt="Dragon news" />
            <h4 className='text-lg text-gray-600 font-semibold'>Journalism Without Fear or Favour</h4>
            <p className='text-xl text-gray-500 font-medium'>Sunday, November 27, 2025</p>
        </div>
    );
};

export default Header;