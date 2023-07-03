import seller from '../../../assets/literature/seller.png'
import subscribe from '../../../assets/literature/day_to_night.png'

const LiteratureSection = () => {
    return (
        <div className="mt-[120px] container mx-auto p-5">
            <div className='md:flex items-center grid gap-[20px] md:gap-[76px] justify-center mx-auto'>
                <img src={seller} alt="" />
                <div className='md:w-1/3'>
                    <h1 className='text-3xl md:text-[42px] font_caprasimo mb-[10px]'><span className='font_caprasimo bg-clip-text text-transparent bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Shop</span> The Best Sellers</h1>
                    <p className='md:text-lg text-[#7B7B7B] mb-[10px] md:mb-10'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                    <button className="btn_custom">Shop It Now</button>
                </div>
            </div>
            <div className='mt-[38px] md:flex justify-center items-center'>
                <div className='md:w-[580px] bg-[#E8E8E8] text-center py-[60px] md:py-[143px] pr-[50px] pl-[26px] mb-5 md:mb-0'>
                    <h1 className='text-3xl md:text-[42px] font_caprasimo mb-[10px]'>Day to Night</h1>
                    <p className='md:text-lg text-[#7B7B7B] mb-[10px] md:mb-10'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                    <button className="btn_custom_black">Subscribe Now</button>
                </div>
                <img className='rounded-2xl md:rounded-none' src={subscribe} alt="" />
            </div>
        </div>
    );
};

export default LiteratureSection;