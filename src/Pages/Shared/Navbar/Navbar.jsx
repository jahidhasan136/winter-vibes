import { Link } from 'react-router-dom';
import logo from '../../../assets/navbar/logo.png'
import { FiSearch } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import badge from '../../../assets/navbar/badge.png'
import { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx'
import { FaBars } from 'react-icons/fa';


const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [navState, setNavState] = useState(false);
    const [isInputVisible, setInputVisible] = useState(false);
    const onNavScroll = () => {
        if (window.scrollY > 40) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);

    const toggleInputVisibility = () => {
        setInputVisible(true);
    };


    return (
        <div className={`w-full z-40 p-5 md:p-0 transition-all duration-200 ease-in-out ${navState ? 'bg-[#00000070] text-white' : 'rounded-lg z-10 w-full'}`}>

            {/* Desktop Device */}

            <div className='hidden md:flex items-center justify-between container mx-auto text-lg mt-[57px]'>
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
                            <div className='-mt-12 ml-8 h-[35px] w-[35px] bg-cover bg-no-repeat' style={{ backgroundImage: `url(${badge})` }}>
                                <p className='text-[10px] text-white ml-3'>new</p>
                            </div>
                        </div>
                        <Link>Sale</Link>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div>
                        {!isInputVisible ? (
                            <FiSearch className='text-[26px]' onClick={toggleInputVisibility} />
                        ) : (
                            <input className='border rounded-sm pl-2 h-10' type="text" placeholder="Search" />
                        )}
                    </div>
                    <div className='border border-[#7B7B7B] h-4'></div>
                    <div className="indicator">
                        <span className="indicator-item rounded-full w-[18px] h-[18px] bg-gradient-to-b from-[#722CFF] to-[#A346EF] text-white flex justify-center items-center text-[10px]">2</span>
                        <AiOutlineShoppingCart className='text-[26px]'></AiOutlineShoppingCart>
                    </div>
                </div>
            </div>

            <div className='flex md:hidden  justify-between items-center'>
                <img className='w-7' src={logo} alt="" />
                <div className='text-2xl' onClick={() => setOpen(!open)}>

                    <span>
                        {
                            open === true
                                ?
                                <RxCross2></RxCross2>
                                :
                                <FaBars></FaBars>
                        }
                    </span>
                </div>
            </div>
            {/* mobile device */}

            <div className={`flex-col gap-5 absolute  bg-[#000000a5] top-0 px-8 items-center pt-10 w-64 h-screen text-white flex md:hidden transition-all duration-300 ease-in-out ${open ? 'left-0 z-50' : '-left-64'}`}>
                <div className='md:hidden grid items-center justify-between container mx-auto text-lg'>
                    <div className='grid gap-[35px] items-center'>
                        <div className='flex gap-[5px] items-center'>
                            <img className='w-7' src={logo} alt="" />
                            <h2 className='font_caprasimo'>Cadress</h2>
                        </div>
                        <div className='grid gap-5'>
                            <Link>New</Link>
                            <Link>Dresses</Link>
                            <Link>Accessories</Link>
                            <div className="grid">
                                <p>Winter</p>
                                <div className='-mt-12 ml-8 h-[35px] w-[35px] bg-cover bg-no-repeat' style={{ backgroundImage: `url(${badge})` }}>
                                    <p className='text-[10px] text-white ml-3'>new</p>
                                </div>
                            </div>
                            <Link>Sale</Link>
                        </div>
                    </div>
                    <div className='grid items-center gap-3 mt-5'>
                    <div>
                        {!isInputVisible ? (
                            <FiSearch className='text-[26px]' onClick={toggleInputVisibility} />
                        ) : (
                            <input type="text" className='px-2 w-2/3 rounded-sm text-black' placeholder="Search" />
                        )}
                    </div>
                        <div className='border-b border-[#7B7B7B] my-1 w-1/3'></div>
                        <div className="indicator">
                            <span className="indicator-item rounded-full w-[18px] h-[18px] bg-gradient-to-b from-[#722CFF] to-[#A346EF] text-white flex justify-center items-center text-[10px]">2</span>
                            <AiOutlineShoppingCart className='text-[26px]'></AiOutlineShoppingCart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;