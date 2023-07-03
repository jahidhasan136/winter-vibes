import { useState } from 'react';
import picture1 from '../../../assets/video/picture_1.png'
import picture2 from '../../../assets/video/picture_2.png'
import picture3 from '../../../assets/video/picture_3.png'
import videoIcon from '../../../assets/video/videoIcon.png'
import Modal from '../../Modal/Modal';

const VideoSection = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="mt-[30px] md:mt-[120px] container mx-auto">
            <div className='md:flex gap-6 justify-center'>
                <div className='relative p-7 md:p-0'>
                    <img src={picture1} alt="" />
                    <div className='bg-[#313131] w-[369px] md:w-[752px] 
                    md:h-[628px] h-[310px] rounded-lg md:rounded-[20px] absolute md:top-0 top-7 opacity-60'></div>
                    <div className='absolute top-[60px] md:top-[150px] left-[148px] md:left-[248px] right-[248px] text-white text-center'>
                        <img onClick={openModal} className='mx-auto mb-[10px] md:mb-5 cursor-pointer' src={videoIcon} alt="" />
                        <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
                        <h3 className=' md:text-lg font_caprasimo mb-[10px] md:mb-5'>Amazon Essentials</h3>
                        <h3 className='text-xl md:text-2xl font_caprasimo md:mb-10 w-[150px] md:w-[285px] mx-auto'>Get -50% From Winter Collection</h3>
                        <button className='text-lg bg-[#DD2424] px-[20px] md:px-[35px] py-[5px] md:py-[23px] text-white rounded-xl md:rounded-full font-medium'>Subscribe Now</button>
                    </div>
                </div>
                <div className='grid gap-3 md:gap-6 justify-center'>
                    <div className='relative'>
                        <img src={picture2} alt="" />
                        <div className='bg-[#313131] w-[364px] h-[302px] rounded-[20px] absolute top-0 opacity-60'></div>
                        <div className='flex justify-center'>
                            <img onClick={openModal} className='mb-5 absolute top-[106px] cursor-pointer' src={videoIcon} alt="" />
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={picture3} alt="" />
                        <div className='bg-[#313131] w-[364px] h-[302px] rounded-[20px] absolute top-0 opacity-60'></div>
                        <div className='flex justify-center'>
                            <img onClick={openModal} className='mb-5 absolute top-[106px] cursor-pointer' src={videoIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;