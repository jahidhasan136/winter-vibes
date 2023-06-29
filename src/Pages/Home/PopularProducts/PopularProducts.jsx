import product1 from '../../../assets/PopularProducts/product_1.png'
import product2 from '../../../assets/PopularProducts/product_2.png'
import product3 from '../../../assets/PopularProducts/product_3.png'
import product4 from '../../../assets/PopularProducts/product_4.png'

const PopularProducts = () => {
    return (
        <div className="mt-[120px] container mx-auto">
            <div className='text-center'>
            <h1 className='text-[42px] font_caprasimo mb-[10px]'><span className='font_caprasimo bg-clip-text text-transparent  bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Popular</span> Product</h1>
            <p className='text-base mb-5 w-[606px] mx-auto text-[#7B7B7B]'>Contrary to popular belief, Lorem Ipsum is not</p>
            <div className="flex justify-center gap-6 mb-10">
                <p className="capitalize text-lg bg-[#313131] text-white px-[18px] rounded-full">Women</p>
                <p className="capitalize text-lg bg-[#313131] text-white px-[18px] rounded-full">Men</p>
                <p className="capitalize text-lg bg-[#313131] text-white px-[18px] rounded-full">Accessories</p>
            </div>
            </div>
            <div>
                <img className='mb-5' src={product1} alt="" />
                <h2 className='font-medium text-lg mb-[10px] font_caprasimo
                '>Women&#39;s for winter</h2>
                <p className='text-lg mb-[10px]'><span className='line-through font-normal text-[#7B7B7B]'>$500.00</span> <span className='bg-clip-text text-transparent  bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>$500.00</span></p>
                <div className="rating mb-[10px] flex gap-[5px]">
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
        </div>
    );
};

export default PopularProducts;