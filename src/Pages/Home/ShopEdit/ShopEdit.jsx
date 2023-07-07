import product1 from '../../../assets/shopedit/product_1.png'
import product2 from '../../../assets/shopedit/product_2.png'
import product3 from '../../../assets/shopedit/product_3.png'
import product4 from '../../../assets/shopedit/product_4.png'

const ShopEdit = () => {
    return (
        <div className="mt-[60px] md:mt-[120px] container mx-auto text-center p-5">
            <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" className='text-3xl md:text-[42px] font_caprasimo mb-[5px] md:mb-[10px]'><span className='font_caprasimo bg-clip-text text-transparent  bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Shop The</span> Edit</h1>
            <p data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" className='text-lg mb-5 md:mb-10 md:w-[606px] mx-auto text-[#7B7B7B]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin Literature from 45 BC</p>
            <div className='md:flex grid gap-3 md:gap-6 justify-center'>
                <div className='relative ' data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <img src={product1} alt="" />
                    <p className='absolute left-5 bottom-7 bg-white py-1 px-[18px] rounded-lg text-[#7B7B7B]'>women</p>
                </div>
                <div className='relative mx-auto md:mx-0' data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <img src={product2} alt="" />
                    <p className='absolute left-5 bottom-7 bg-white py-1 px-[18px] rounded-lg text-[#7B7B7B]'>men</p>
                </div>
                <div className='grid gap-3 md:gap-6 mx-auto md:mx-0'>
                    <div className='relative' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <img src={product3} alt="" />
                        <p className='absolute left-5 bottom-7 bg-white py-1 px-[18px] rounded-lg text-[#7B7B7B]'>bagpack</p>
                    </div>
                    <div className='relative' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <img src={product4} alt="" />
                        <p className='absolute left-5 bottom-7 bg-white py-1 px-[18px] rounded-lg text-[#7B7B7B]'>accessories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopEdit;