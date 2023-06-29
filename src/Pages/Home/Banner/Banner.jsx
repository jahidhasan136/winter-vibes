import videoIcon from '../../../assets/banner/videoIcon.png'
import bg_white from '../../../assets/banner/bg_white.png'
import model from '../../../assets/banner/model.png'
import bg_half from '../../../assets/banner/bg_half.png'
import star from '../../../assets/banner/star.png'
import bg_circle from '../../../assets/banner/bg_circle.png'
import bg_colour from '../../../assets/banner/bg_colour.png'
import { AiOutlineBars } from 'react-icons/ai'

const Banner = () => {
    return (
        <div className='container mt-[99px] mx-auto flex justify-between'>
            <div className='w-1/2'>
                <h2 className='text-2xl mb-[10px]'>Trendy Collection&#39;s</h2>
                <h1 className="capitalize text-7xl mb-5 leading-[100px] h-[196px] font_caprasimo">Discover <span className='font_caprasimo bg-clip-text text-transparent  bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Fashion</span> & build A <span className='font_caprasimo bg-clip-text text-transparent  bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Better</span> you</h1>
                <p className='text-lg text-[#7B7B7B]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin Literature from 45 BC</p>
                <div className='flex items-center'>
                    <button className="btn_custom -mr-3">Start Shoping</button>
                    <div className='relative inline-block rounded-full mt-10'>
                        <img className='' src={bg_white} alt="" />
                        <img className='absolute top-14 left-[67px]' src={videoIcon} alt="" />
                    </div>
                    <p className='text-lg font_caprasimo'>Play Video</p>
                </div>
            </div>
            <div className='relative'>
                <div className='absolute -top-10 bg-cover w-[365px] h-[365px] right-0 bg-no-repeat -z-10' style={{ backgroundImage: `url(${bg_colour})` }}></div>
                <img src={model} alt="" />
                <img className='absolute bottom-16 right-0' src={bg_half} alt="" />
                <p className='flex items-center gap-[13px] text-lg bg-[white] shadow-xl shadow-[#4c099033] absolute px-5 py-[13px] rounded-[40px] bottom-28 -right-16 h-12 w-[156px] font-medium'><img src={star} alt="" /> Favorite</p>
                <p className='flex items-center absolute gap-8 text-lg font-medium bg-[white] shadow-xl shadow-[#4c099033] px-5 py-[17px] rounded-[40px] bottom-40 -left20 h-12 w-[195px]'><AiOutlineBars className='text-[#8033FB]'></AiOutlineBars> Categories</p>
                <div className='absolute bottom-28 left-9 -z-10 bg-cover bg-no-repeat w-[158px] h-[158px]' style={{backgroundImage: `url(${bg_circle})`}}></div>
            </div>
        </div>
    );
};

export default Banner;