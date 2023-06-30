import { Link } from 'react-router-dom';
import logo from '../../../assets/navbar/logo.png'
import { FiSearch } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import badge from '../../../assets/navbar/badge.png'


const Navbar = () => {
    return (
        <div className='flex items-center justify-between container mx-auto text-lg mt-[57px]'>
            <div className='flex gap-[115px] items-center'>
                <div className='flex gap-[5px] items-center'>
                    <img className='w-7' src={logo} alt="" />
                    <h2 className='font_caprasimo'>Cadress</h2>
                </div>
                <div className='flex gap-10'>
                    <Link>New</Link>
                    <Link>Dresses</Link>
                    <Link>Accessories</Link>
                    <div className="grid">
                        <p>Winter</p>
                        <div className='-mt-12 ml-8 h-[35px] w-[35px] bg-cover bg-no-repeat' style={{backgroundImage: `url(${badge})`}}>
                            <p className='text-[10px] text-white ml-3'>new</p>
                        </div>
                    </div>
                    <Link>Sale</Link>
                </div>
            </div>

            {/* TODO: badge incomplete */}

            <div className='flex items-center gap-6'>
                <FiSearch className='text-[26px]'></FiSearch>
                <div className='border border-[#7B7B7B] h-4'></div>
                <AiOutlineShoppingCart className='text-[26px]'></AiOutlineShoppingCart>
            </div>
        </div>
    );
};

export default Navbar;