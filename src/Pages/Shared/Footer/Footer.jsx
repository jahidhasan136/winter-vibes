import './Footer.css'
import { FaFacebookSquare, FaGooglePlusSquare, FaTwitterSquare } from 'react-icons/fa'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import masterCard from '../../../assets/footer/mastercard.png'
import visa from '../../../assets/footer/visa.png'
import paypal from '../../../assets/footer/paypal.png'
import express from '../../../assets/footer/express.png'
import logo from '../../../assets/navbar/logo.png'

const Footer = () => {
    return (
        <footer className="bg_gradient mt-[60px] md:mt-[120px]">
            <div className="container mx-auto md:flex justify-center gap-[30px] md:gap-[239px] pt-[39px] grid p-5">
                <div className='grid grid-cols-2 md:grid-cols-3 justify-center gap-[60px] md:gap-[103px]'>
                    <div>
                        <h2 className="font_caprasimo text-2xl mb-[23px]">Men</h2>
                        <div className='grid gap-5'>
                            <a href='#' target='blank' className="text-lg">Jeans</a>
                            <a href='#' target='blank' className="text-lg">Jumper</a>
                            <a href='#' target='blank' className="text-lg">Leather</a>
                            <a href='#' target='blank' className="text-lg">T-Shirts</a>
                            <a href='#' target='blank' className="text-lg">Shirts</a>
                        </div>
                    </div>
                    <div>
                        <h2 className="font_caprasimo text-2xl mb-[23px]">Women</h2>
                        <div className='grid gap-5'>
                            <a href='#' target='blank' className="text-lg">Dresses</a>
                            <a href='#' target='blank' className="text-lg">Jumper</a>
                            <a href='#' target='blank' className="text-lg">Coots</a>
                            <a href='#' target='blank' className="text-lg">Jackets</a>
                            <a href='#' target='blank' className="text-lg">Shoes</a>
                        </div>
                    </div>
                    <div>
                        <h2 className="font_caprasimo text-2xl mb-[23px]">Kids</h2>
                        <div className='grid gap-5'>
                            <a href='#' target='blank' className="text-lg">T-Shirts</a>
                            <a href='#' target='blank' className="text-lg">Shirts</a>
                            <a href='#' target='blank' className="text-lg">Dresses</a>
                            <a href='#' target='blank' className="text-lg">Pants</a>
                            <a href='#' target='blank' className="text-lg">Watches</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font_caprasimo text-2xl mb-[23px] text-center md:text-start mt-5 md:mt-0'>Follow Us</h2>
                    <div className='flex justify-center md:justify-start gap-2 mb-[23px]'>
                        <a href="#" target='blank'><FaFacebookSquare></FaFacebookSquare></a>
                        <a href="#" target='blank'><FaGooglePlusSquare></FaGooglePlusSquare></a>
                        <a href="#" target='blank'><FaTwitterSquare></FaTwitterSquare></a>
                    </div>
                    <div className="form-control  focus:border-0">
                        <label className="relative flex justify-center  focus:border-0">
                            <input type="text" placeholder="Email Goes To Here" className="input rounded-[20px] lg:w-[476px] h-[70px] border border-[#C4C4C4] focus:border-0" />
                            <span className='md:w-[76px] h-[70px] flex justify-center items-center text-2xl bg-gradient-to-b from-[#722CFF] to-[#A346EF] text-white absolute right-0 md:right-0 rounded-r-[20px]'><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='border-b border-[#C4C4C4] lg:w-[1160px] my-10 mx-auto'></div>
            <div className='md:flex grid items-center justify-center gap-10 lg:gap-[250px] pb-10'>
                <div className='justify-center flex md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-9 mb-5 md:mb-0'>
                    <a href="#" target='blank'><img className='mx-auto' src={masterCard} alt="" /></a>
                    <a href="#" target='blank'><img className='mx-auto' src={visa} alt="" /></a>
                    <a href="#" target='blank'><img className='mx-auto' src={paypal} alt="" /></a>
                    <a href="#" target='blank'><img className='mx-auto' src={express} alt="" /></a>
                </div>
                <div className='md:flex grid items-center gap-5 md:gap-14'>
                    <div className='mx-auto flex justify-center'>
                        <img src={logo} alt="" />
                    </div>
                    <p className='text-center md:text-start'>Copyright &#169; 2023. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;