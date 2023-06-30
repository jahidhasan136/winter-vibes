import picture1 from '../../../assets/video/picture_1.png'
import picture2 from '../../../assets/video/picture_2.png'
import picture3 from '../../../assets/video/picture_3.png'
import videoIcon from '../../../assets/video/videoIcon.png'

const VideoSection = () => {
    return (
        <div className="mt-[120px] mb-[120px] container mx-auto">
            <div className='flex gap-6 justify-center'>
                <div className='relative'>
                    <img src={picture1} alt="" />
                    <div className='bg-[#313131] w-[752px] 
                    h-[628px] rounded-[20px] absolute top-0 opacity-60'></div>
                    <div className='absolute top-[150px] left-[248px] right-[248px] text-white text-center'>
                        <img className='mx-auto mb-5' src={videoIcon} alt="" />
                        <h3 className='text-lg font_caprasimo mb-5'>Amazon Essentials</h3>
                        <h3 className='text-2xl font_caprasimo mb-10 w-[285px] mx-auto'>Get -50% From Winter Collection</h3>
                        <button className='text-lg bg-[#DD2424] px-[35px] py-[23px] text-white rounded-full font-medium'>Subscribe Now</button>
                    </div>
                </div>
                <div className='grid gap-6'>
                    <div className='relative'>
                        <img src={picture2} alt="" />
                        <div className='bg-[#313131] w-[364px] h-[302px] rounded-[20px] absolute top-0 opacity-60'></div>
                        <div className='flex justify-center'>
                            <img className='mb-5 absolute top-[106px]' src={videoIcon} alt="" />
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={picture3} alt="" />
                        <div className='bg-[#313131] w-[364px] h-[302px] rounded-[20px] absolute top-0 opacity-60'></div>
                        <div className='flex justify-center'>
                            <img className='mb-5 absolute top-[106px]' src={videoIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;