import { Link } from 'react-router-dom';
import logo from '../../../assets/navbar/logo.png';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import badge from '../../../assets/navbar/badge.png';
import { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { FaBars, FaTimesCircle } from 'react-icons/fa';


const Navbar = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(true);
  };

  const handleClick = (e) => {
    // 👇️ toggle isActive state on click
    setIsActive(true);
  };

  const handleClose = (e) => {
    setIsActive(false);
  }

  return (
    <>
      <header className="flex justify-center pl-5 md:py-16 absolute top-0 w-full z-50 bg-transparent">
        <div className="container flex items-center justify-between">
          <div className='flex items-center gap-28'>
            <Link href="/">
              <img src={logo} alt="" />
            </Link>
            <ul className="lg:flex xl:space-x-[50px] lg:space-x-[30px] xl:text-[18px] lg:text-[16px] font-medium text-[#19063D] hidden">
              <li><Link href='/' className='transition hover:text-[#9941F3]'>New</Link></li>
              <li><Link href='/' className='transition hover:text-[#9941F3]'>Dresses</Link></li>
              <li><Link href='/' className='transition hover:text-[#9941F3]'>Accessories</Link></li>
              <div className="grid">
                <Link className='hover:text-[#9941F3]'>Winter</Link>
                <div
                  className="-mt-12 ml-8 h-[35px] w-[35px] bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${badge})` }}
                >
                  <p className="text-[10px] text-white ml-3 mt-2">new</p>
                </div>
              </div>

              <li><Link href='/' className='transition hover:text-pink'>Sale</Link></li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <div className="flex items-center gap-6">
              <div>
                {!isInputVisible ? (
                  <FiSearch className="text-[26px]" onClick={toggleInputVisibility} />
                ) : (
                  <input className="border rounded-sm pl-2 h-10" type="text" placeholder="Search" />
                )}
              </div>
              <div className="border border-[#7B7B7B] h-4"></div>
              <div className="indicator cursor-pointer">
                <span className="indicator-item rounded-full w-[18px] h-[18px] bg-gradient-to-b from-[#722CFF] to-[#A346EF] text-white flex justify-center items-center text-[10px]">
                  2
                </span>
                <AiOutlineShoppingCart className="text-[26px]"></AiOutlineShoppingCart>
              </div>
            </div>
          </div>
          <div className="text-2xl menu-trigger lg:hidden ml-[15px] h-[50px] w-[50px] flex items-center justify-center rounded-lg bg-white" onClick={handleClick}>
            <FaBars />
          </div>
        </div>
      </header>

      <div className={`${isActive ? 'active' : 'closed'} offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-50 bg-black top-0 lg:hidden left-[-250px] transition-all`}>
        <FaTimesCircle className='absolute right-[15px] top-[25px] z-10 text-white text-[24px]' onClick={handleClose}></FaTimesCircle>
        <div className="logo mb-[30px]">
          <Link href="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="md:hidden grid gap-5 xl:text-[18px] lg:text-[16px] font-medium text-white">
          <li><Link href='/' className='transition hover:text-[#9941F3]'>New</Link></li>
          <li><Link href='/' className='transition hover:text-[#9941F3]'>Dresses</Link></li>
          <li><Link href='/' className='transition hover:text-[#9941F3]'>Accessories</Link></li>
          <div className="grid">
            <Link className='hover:text-[#9941F3]'>Winter</Link>
            <div
              className="-mt-12 ml-8 h-[35px] w-[35px] bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${badge})` }}
            >
              <p className="text-[10px] text-white ml-3 mt-2">new</p>
            </div>
          </div>

          <li><Link href='/' className='transition hover:text-pink'>Sale</Link></li>
        </ul>
        <div className="md:hidden mt-5">
          <div className="grid items-center gap-6">
            <div>
              {!isInputVisible ? (
                <FiSearch className="text-[26px] text-white" onClick={toggleInputVisibility} />
              ) : (
                <input className="border rounded-sm pl-2 h-10" type="text" placeholder="Search" />
              )}
            </div>
            <div className="indicator cursor-pointer">
              <span className="indicator-item rounded-full w-[18px] h-[18px] bg-gradient-to-b from-[#722CFF] to-[#A346EF] text-white flex justify-center items-center text-[10px]">
                2
              </span>
              <AiOutlineShoppingCart className="text-[26px] text-white"></AiOutlineShoppingCart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
