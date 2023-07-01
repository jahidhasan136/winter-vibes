import './Footer.css'
import { FaFacebookSquare, FaGooglePlusSquare, FaTwitterSquare } from 'react-icons/fa'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import masterCard from '../../../assets/footer/mastercard.png'
import visa from '../../../assets/footer/paypal.png'
import paypal from '../../../assets/footer/paypal.png'
import express from '../../../assets/footer/express.png'
import logo from '../../../assets/navbar/logo.png'

const Footer = () => {
    return (
        <div className="bg_gradient mt-[120px]">
            <div className="container mx-auto flex justify-center gap-[239px] pt-[39px]">
                <div className='flex justify-center gap-[103px]'>
                    <div>
                        <h2 className="font_caprasimo text-2xl mb-[23px]">Men</h2>
                        <div className='grid gap-5'>
                            <p className="text-lg">Jeans</p>
                            <p className="text-lg">Jumper</p>
                            <p className="text-lg">Leather</p>
                            <p className="text-lg">T-Shirts</p>
                            <p className="text-lg">Shirts</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font_caprasimo text-2xl mb-[23px]">Women</h2>
                        <div className='grid gap-5'>
                            <p className="text-lg">Dresses</p>
                            <p className="text-lg">Jumper</p>
                            <p className="text-lg">Coots</p>
                            <p className="text-lg">Jackets</p>
                            <p className="text-lg">Shoes</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font_caprasimo text-2xl mb-[23px]">Kids</h2>
                        <div className='grid gap-5'>
                            <p className="text-lg">T-Shirts</p>
                            <p className="text-lg">Shirts</p>
                            <p className="text-lg">Dresses</p>
                            <p className="text-lg">Pants</p>
                            <p className="text-lg">Watches</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font_caprasimo text-2xl mb-[23px]'>Follow Us</h2>
                    <div className='flex gap-2 mb-[23px]'>
                        <FaFacebookSquare></FaFacebookSquare>
                        <FaGooglePlusSquare></FaGooglePlusSquare>
                        <FaTwitterSquare></FaTwitterSquare>
                    </div>
                    <div className="form-control">
                        <label className="relative flex">
                            <input type="text" placeholder="Email Goes To Here" className="input rounded-[20px] w-[476px] h-[70px]" />
                            <span className='w-[76px] h-[70px] flex justify-center items-center text-2xl bg-gradient-to-b from-[#722CFF] to-[#A346EF] text-white absolute right-0 rounded-r-[20px]'><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='border-b border-[#C4C4C4] w-[1160px] my-10 mx-auto'></div>
            <div className='flex items-center justify-center gap-[250px] mb-10 '>
                <div className='flex gap-9'>
                    <img src={masterCard} alt="" />
                    <img src={visa} alt="" />
                    <img src={paypal} alt="" />
                    <img src={express} alt="" />
                </div>
                <div className='flex items-center gap-14'>
                    <div className='flex items-center gap-[6px]'>
                        <img src={logo} alt="" />
                        <h2 className='font_caprasimo text-lg'>Cardress</h2>
                    </div>
                    <p>Copyright &#169; 2023. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;