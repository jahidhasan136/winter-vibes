import seller from '../../../assets/literature/seller.png'
import subscribe from '../../../assets/literature/day_to_night.png'

const LiteratureSection = () => {
    return (
        <div className="mt-[120px] container mx-auto">
            <div className='flex items-center gap-[76px] justify-center mx-auto'>
                <img src={seller} alt="" />
                <div className='w-1/3'>
                    <h1 className='text-[42px] font_caprasimo mb-[10px]'><span className='font_caprasimo bg-clip-text text-transparent bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Shop</span> The Best Sellers</h1>
                    <p className='text-lg text-[#7B7B7B] mb-10'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                    <button className="btn_custom">Shop It Now</button>
                </div>
            </div>
            <div className='mt-[38px] flex justify-center items-center'>
                <div className='w-[580px] bg-[#E8E8E8] text-center py-[130px] pr-[50px] pl-[26px]'>
                    <h1 className='text-[42px] font_caprasimo mb-[10px]'>Day to Night</h1>
                    <p className='text-lg text-[#7B7B7B] mb-10'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                    <button className="btn_custom_black">Subscribe Now</button>
                </div>
                <img src={subscribe} alt="" />
            </div>
        </div>
    );
};

export default LiteratureSection;