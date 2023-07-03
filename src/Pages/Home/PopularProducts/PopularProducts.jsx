import product1 from '../../../assets/PopularProducts/product_1.png'
import product2 from '../../../assets/PopularProducts/product_2.png'
import product3 from '../../../assets/PopularProducts/product_3.png'
import product4 from '../../../assets/PopularProducts/product_4.png'

const PopularProducts = () => {
    return (
        <div className="mt-[60px] md:mt-[120px] container mx-auto">
            <div className='text-center'>
                <h1 className='text-3xl md:text-[42px] font_caprasimo mb-[5px] md:mb-[10px]'><span className='font_caprasimo bg-clip-text text-transparent bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Popular</span> Product</h1>
                <p className='text-base mb-[10px] md:mb-5 md:w-[606px] mx-auto text-[#7B7B7B]'>Contrary to popular belief, Lorem Ipsum is not</p>
                <div className="flex justify-center gap-3 md:gap-6 mb-5 md:mb-10">
                    <p className="capitalize text-lg bg-[#313131] text-white px-[18px] py-1 rounded-full">Women</p>
                    <p className="capitalize text-lg bg-[#313131] text-white px-[18px] py-1 rounded-full">Men</p>
                    <p className="capitalize text-lg bg-[#313131] text-white px-[18px] py-1 rounded-full">Accessories</p>
                </div>
            </div>
            <div className='md:flex justify-center gap-4 md:gap-6 grid'>
                <div>
                    <div className='relative'>
                        <img className='mb-[10px] md:mb-5' src={product1} alt="" />
                        <p className='text-lg px-[18px] py-1 bg-gradient-to-b from-[#722CFF] to-[#A346EF] inline-block rounded-[20px] text-white absolute top-[6px] left-[5px]'>Sale</p>
                    </div>
                    <h2 className='font-medium text-lg mb-[10px] font_caprasimo
                '>Women&#39;s for winter</h2>
                    <p className='text-lg md:mb-[10px]'><span className='line-through font-normal text-[#7B7B7B]'>$500.00</span> <span className='bg-clip-text text-transparent  bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>$500.00</span></p>
                    <div className="rating md:mb-[10px] flex gap-[5px]">
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                    </div>
                    <div className="rating flex gap-[5px]">
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#313131]" />
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#FF1E46]" checked />
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#B48660]" />
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#F58E49]" />
                    </div>
                </div>
                <div>
                    <img className='mb-[10px] md:mb-5' src={product2} alt="" />
                    <h2 className='font-medium text-lg mb-[10px] font_caprasimo
                '>Men&#39;s for winter</h2>
                    <p className='text-lg md:mb-[10px]'><span className='font-normal text-[#7B7B7B]'>$500.00</span></p>
                    <div className="rating md:mb-[10px] flex gap-[5px]">
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                    </div>
                    <div className="rating flex gap-[5px]">
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#313131]" />
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#101412]" checked />
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#B48660]" />
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#84553C]" />
                    </div>
                </div>
                <div>
                    <img className='mb-[10px] md:mb-5' src={product3} alt="" />
                    <h2 className='font-medium text-lg mb-[10px] font_caprasimo
                '>Backpack for winter</h2>
                    <p className='text-lg md:mb-[10px]'><span className='font-normal text-[#7B7B7B]'>$500.00</span></p>
                    <div className="rating md:mb-[10px] flex gap-[5px]">
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                    </div>
                    <div className="rating flex gap-[5px]">
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#313131]" />
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#FF1E46]" checked />
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#5F170B]" />
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#9D8B3F]" />
                    </div>
                </div>
                <div>
                    <div className='relative'>
                        <img className='mb-[10px] md:mb-5' src={product4} alt="" />
                        <p className='text-lg px-[18px] py-1 bg-[#313131] inline-block rounded-[20px] text-white absolute top-[6px] left-[5px]'>Sould Out</p>
                    </div>
                    <h2 className='font-medium text-lg mb-[10px] font_caprasimo
                '>Accessories</h2>
                    <p className='text-lg md:mb-[10px]'><span className='font-normal text-[#7B7B7B]'>$500.00</span></p>
                    <div className="rating md:mb-[10px] flex gap-[5px]">
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                    </div>
                    <div className="rating flex gap-[5px]">
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#313131]" />
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#804817" checked />
                        <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#C5B698]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;