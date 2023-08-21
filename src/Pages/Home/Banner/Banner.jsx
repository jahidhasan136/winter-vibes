import videoIcon from '../../../assets/banner/videoIcon.png'
import model from '../../../assets/banner/model.svg'
import bg_half from '../../../assets/banner/bg_half.png'
import star from '../../../assets/banner/star.png'
import bg_circle from '../../../assets/banner/bg_circle.png'
import bg_colour from '../../../assets/banner/bg_colour.png'
import { AiOutlineBars } from 'react-icons/ai'
import Modal from '../../Modal/Modal'
import { useState } from 'react'

const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <div className='container mt-[35px] md:mt-[140px] mx-auto md:flex justify-between p-5 md:p-5'>
            <div className='md:w-6/12 xl:w-1/2'>
                <h2 className='text-[#313131] text-xl md:text-2xl mb-[6px] md:mb-[10px] trendy'>Trendy Collection&#39;s</h2>
                <h1 className="capitalize text-3xl lg:text-5xl xl:text-7xl mb-[10px] xl:mb-5 xl:leading-[100px] font_caprasimo">Discover <span className='font_caprasimo bg-clip-text text-transparent  bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Fashion</span> & build A <span className='font_caprasimo bg-clip-text text-transparent  bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Better</span> you</h1>
                <p className='md:text-lg text-[#7B7B7B]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin Literature from 45 BC</p>
                <div className='flex items-center gap-7 mt-3 md:mt-10'>
                    <button className="btn_custom flex-shrink-0 -mr-3">Start Shoping</button>
                    <div className='bg-white p-5 rounded-full shadow-md'>
                        <img onClick={openModal} className='cursor-pointer' src={videoIcon} alt="" />
                        <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
                    </div>
                    <p className='text-lg font_caprasimo hidden lg:flex'>Play Video</p>
                </div>
            </div>
            <div className='relative mt-12 md:mt-0'>
                <div className='absolute -top-10 bg-cover md:w-[365px] md:h-[365px] right-0 bg-no-repeat -z-10' style={{ backgroundImage: `url(${bg_colour})` }}></div>
                <img src={model} alt="" />
                <img className='absolute -bottom-10 md:bottom-10 lg:-bottom-10 xl:bottom-[90px] 2xl:bottom-0 right-0' src={bg_half} alt="" />
                <p className='flex items-center gap-2 md:gap-[13px] text-lg bg-[white] shadow-xl shadow-[#4c099033] absolute px-3 md:px-5 md:py-[13px] rounded-[40px] bottom-3 md:bottom-20 lg:bottom-3 xl:bottom-48 2xl:bottom-12 right-4 md:right-0 lg:-right-16 h-12 md:w-[156px] font-medium'><img src={star} alt="" /> Favorite</p>
                <p className='flex items-center absolute gap-4 xl:gap-8 text-lg font-medium bg-[white] shadow-xl shadow-[#4c099033] px-5 py-[17px] rounded-[40px] bottom-16 xl:bottom-52 2xl:bottom-20 -left-5 md:left-5 lg:-left-5 h-12 xl:w-[195px]'><AiOutlineBars className='text-[#8033FB]'></AiOutlineBars> Categories</p>
                <div className='absolute bottom-5 xl:bottom-44 2xl:bottom-3 left-9 -z-10 bg-cover bg-no-repeat w-[158px] h-[158px]' style={{ backgroundImage: `url(${bg_circle})` }}></div>
            </div>
        </div>
    );
};

export default Banner;