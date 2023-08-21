import { useState } from 'react';
import picture1 from '../../../assets/video/picture_1.png'
import picture2 from '../../../assets/video/picture_2.png'
import picture3 from '../../../assets/video/picture_3.png'
import videoIcon from '../../../assets/video/videoIcon.png'
import Modal from '../../Modal/Modal';
import image1 from '../../../assets/video/image_1.png'
import image2 from '../../../assets/video/image_2.png'
import image3 from '../../../assets/video/image_3.png'

const VideoSection = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="mt-[30px] md:mt-[120px] container mx-auto p-5">
            <div className='md:flex gap-6 justify-center'>
                <div className='relative p-2 md:p-0' data-aos="fade-up">
                    <div className='relative'>
                        <img src={picture1} alt="" />
                        <img className='absolute top-0' src={image1} alt="" />
                    </div>
                    <div className='grid justify-center absolute top-14 lg:top-[150px] left-0 right-0 text-center text-white'>
                        <img onClick={openModal} className='mx-auto mb-[10px] md:mb-5 cursor-pointer' src={videoIcon} alt="" />
                        <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
                        <h3 className='text-xs md:text-lg font_caprasimo mb-[10px] md:mb-5 mx-auto'>Amazon Essentials</h3>
                        <h3 className='md:text-2xl font_caprasimo mb-5 md:mb-10 w-[150px] md:w-[285px] mx-auto'>Get -50% From Winter Collection</h3>
                        <button className='text-lg bg-[#DD2424] px-[20px] md:px-[35px] py-[5px] md:py-[23px] text-white rounded-xl md:rounded-full font-medium'>Subscribe Now</button>
                    </div>
                </div>
                <div className='grid gap-3 md:gap-6 justify-center' data-aos="fade-up">
                    <div className='relative'>
                        <div className='relative'>
                            <img src={picture2} alt="" />
                            <img className='absolute top-0' src={image2} alt="" />
                        </div>
                        <div className='flex justify-center'>
                            <img onClick={openModal} className='mb-5 absolute top-1/3 cursor-pointer' src={videoIcon} alt="" />
                        </div>
                    </div>
                    <div className='relative' data-aos="fade-up">
                        <div className='relative'>
                            <img src={picture3} alt="" />
                            <img className='absolute top-0' src={image3} alt="" />
                        </div>
                        <div className='flex justify-center'>
                            <img onClick={openModal} className='mb-5 absolute top-1/3 cursor-pointer' src={videoIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;