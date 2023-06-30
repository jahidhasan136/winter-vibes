import { AiFillHeart } from 'react-icons/ai'
import product1 from '../../../assets/winter_looks/product_1.png'
import product2 from '../../../assets/winter_looks/product_2.png'
import product3 from '../../../assets/winter_looks/product_3.png'
import product4 from '../../../assets/winter_looks/product_4.png'
import product5 from '../../../assets/winter_looks/product_5.png'
import product6 from '../../../assets/winter_looks/product_6.png'
import product7 from '../../../assets/winter_looks/product_7.png'
import product8 from '../../../assets/winter_looks/product_8.png'
import { FiSearch } from 'react-icons/fi';
import moneyIcon from '../../../assets/winter_looks/moneyIcon.png'

const WinterLooks = () => {
    return (

        // TODO: carousel incomplete

        <div className="mt-[120px] container mx-auto grid justify-center">
            <h1 className='text-[42px] font_caprasimo mb-10'><span className='font_caprasimo bg-clip-text text-transparent bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Winter</span> Day Looks</h1>
            <div className='grid grid-cols-4 gap-6'>
            <div>
                <div className='relative overflow-hidden group'>
                    <img className='mb-5' src={product1} alt="" />
                    <div className='bg-[#313131] absolute -bottom-9 group-hover:bottom-5 transition-all duration-300 rounded-b-[20px] w-[267px]'>
                        <button className='text-white py-[5px] flex items-center justify-center gap-5 mx-auto'><img src={moneyIcon} alt="" /> Add to Card</button>
                    </div>
                    <div className='grid gap-1 absolute top-[14px] left-[13px]'>
                        <p className='bg-[#DD2424] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>40%</p>
                        <p className='bg-[#313131] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>Hot</p>
                    </div>
                    <div className='grid absolute gap-1 top-[14px] left-[225px]'>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <FiSearch className=''></FiSearch>
                        </div>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <AiFillHeart className='text-[#DD243E]'></AiFillHeart>
                        </div>
                    </div>
                </div>
                <h2 className='text-lg mb-[10px] font-medium'>Bag pack</h2>
                <p className='text-base mb-[10px] text-[#7B7B7B]'><span className='line-through font-normal'>$500.00</span> $400.00</p>
                <div className="rating flex gap-[5px]">
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#B48660]" />
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#F58E49]" checked />
                </div>
            </div>
            <div>
                <div className='relative overflow-hidden group'>
                    <img className='mb-5' src={product2} alt="" />
                    <div className='bg-[#313131] absolute -bottom-9 group-hover:bottom-5 transition-all duration-300 rounded-b-[20px] w-[267px]'>
                        <button className='text-white py-[5px] flex items-center justify-center gap-5 mx-auto'><img src={moneyIcon} alt="" /> Add to Card</button>
                    </div>
                    <div className='grid gap-1 absolute top-[14px] left-[13px]'>
                        <p className='bg-[#DD2424] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>40%</p>
                        <p className='bg-[#313131] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>Hot</p>
                    </div>
                    <div className='grid absolute gap-1 top-[14px] left-[225px]'>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <FiSearch className=''></FiSearch>
                        </div>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <AiFillHeart className='text-[#DD243E]'></AiFillHeart>
                        </div>
                    </div>
                </div>
                <h2 className='text-lg mb-[10px] font-medium'>Bag pack</h2>
                <p className='text-base mb-[10px] text-[#7B7B7B]'><span className='line-through font-normal'>$500.00</span> $400.00</p>
                <div className="rating flex gap-[5px]">
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#B48660]" />
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#F58E49]" checked />
                </div>
            </div>
            <div>
                <div className='relative overflow-hidden group'>
                    <img className='mb-5' src={product3} alt="" />
                    <div className='bg-[#313131] absolute -bottom-9 group-hover:bottom-5 transition-all duration-300 rounded-b-[20px] w-[267px]'>
                        <button className='text-white py-[5px] flex items-center justify-center gap-5 mx-auto'><img src={moneyIcon} alt="" /> Add to Card</button>
                    </div>
                    <div className='grid gap-1 absolute top-[14px] left-[13px]'>
                        <p className='bg-[#DD2424] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>40%</p>
                        <p className='bg-[#313131] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>Hot</p>
                    </div>
                    <div className='grid absolute gap-1 top-[14px] left-[225px]'>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <FiSearch className=''></FiSearch>
                        </div>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <AiFillHeart className='text-[#DD243E]'></AiFillHeart>
                        </div>
                    </div>
                </div>
                <h2 className='text-lg mb-[10px] font-medium'>Bag pack</h2>
                <p className='text-base mb-[10px] text-[#7B7B7B]'><span className='line-through font-normal'>$500.00</span> $400.00</p>
                <div className="rating flex gap-[5px]">
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#B48660]" />
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#F58E49]" checked />
                </div>
            </div>
            <div>
                <div className='relative overflow-hidden group'>
                    <img className='mb-5' src={product4} alt="" />
                    <div className='bg-[#313131] absolute -bottom-9 group-hover:bottom-5 transition-all duration-300 rounded-b-[20px] w-[267px]'>
                        <button className='text-white py-[5px] flex items-center justify-center gap-5 mx-auto'><img src={moneyIcon} alt="" /> Add to Card</button>
                    </div>
                    <div className='grid gap-1 absolute top-[14px] left-[13px]'>
                        <p className='bg-[#DD2424] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>40%</p>
                        <p className='bg-[#313131] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>Hot</p>
                    </div>
                    <div className='grid absolute gap-1 top-[14px] left-[225px]'>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <FiSearch className=''></FiSearch>
                        </div>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <AiFillHeart className='text-[#DD243E]'></AiFillHeart>
                        </div>
                    </div>
                </div>
                <h2 className='text-lg mb-[10px] font-medium'>Bag pack</h2>
                <p className='text-base mb-[10px] text-[#7B7B7B]'><span className='line-through font-normal'>$500.00</span> $400.00</p>
                <div className="rating flex gap-[5px]">
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#B48660]" />
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#F58E49]" checked />
                </div>
            </div>
            <div>
                <div className='relative overflow-hidden group'>
                    <img className='mb-5' src={product5} alt="" />
                    <div className='bg-[#313131] absolute -bottom-9 group-hover:bottom-5 transition-all duration-300 rounded-b-[20px] w-[267px]'>
                        <button className='text-white py-[5px] flex items-center justify-center gap-5 mx-auto'><img src={moneyIcon} alt="" /> Add to Card</button>
                    </div>
                    <div className='grid gap-1 absolute top-[14px] left-[13px]'>
                        <p className='bg-[#DD2424] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>40%</p>
                        <p className='bg-[#313131] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>Hot</p>
                    </div>
                    <div className='grid absolute gap-1 top-[14px] left-[225px]'>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <FiSearch className=''></FiSearch>
                        </div>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <AiFillHeart className='text-[#DD243E]'></AiFillHeart>
                        </div>
                    </div>
                </div>
                <h2 className='text-lg mb-[10px] font-medium'>Bag pack</h2>
                <p className='text-base mb-[10px] text-[#7B7B7B]'><span className='line-through font-normal'>$500.00</span> $400.00</p>
                <div className="rating flex gap-[5px]">
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#B48660]" />
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#F58E49]" checked />
                </div>
            </div>
            <div>
                <div className='relative overflow-hidden group'>
                    <img className='mb-5' src={product6} alt="" />
                    <div className='bg-[#313131] absolute -bottom-9 group-hover:bottom-5 transition-all duration-300 rounded-b-[20px] w-[267px]'>
                        <button className='text-white py-[5px] flex items-center justify-center gap-5 mx-auto'><img src={moneyIcon} alt="" /> Add to Card</button>
                    </div>
                    <div className='grid gap-1 absolute top-[14px] left-[13px]'>
                        <p className='bg-[#DD2424] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>40%</p>
                        <p className='bg-[#313131] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>Hot</p>
                    </div>
                    <div className='grid absolute gap-1 top-[14px] left-[225px]'>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <FiSearch className=''></FiSearch>
                        </div>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <AiFillHeart className='text-[#DD243E]'></AiFillHeart>
                        </div>
                    </div>
                </div>
                <h2 className='text-lg mb-[10px] font-medium'>Bag pack</h2>
                <p className='text-base mb-[10px] text-[#7B7B7B]'><span className='line-through font-normal'>$500.00</span> $400.00</p>
                <div className="rating flex gap-[5px]">
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#B48660]" />
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#F58E49]" checked />
                </div>
            </div>
            <div>
                <div className='relative overflow-hidden group'>
                    <img className='mb-5' src={product7} alt="" />
                    <div className='bg-[#313131] absolute -bottom-9 group-hover:bottom-5 transition-all duration-300 rounded-b-[20px] w-[267px]'>
                        <button className='text-white py-[5px] flex items-center justify-center gap-5 mx-auto'><img src={moneyIcon} alt="" /> Add to Card</button>
                    </div>
                    <div className='grid gap-1 absolute top-[14px] left-[13px]'>
                        <p className='bg-[#DD2424] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>40%</p>
                        <p className='bg-[#313131] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>Hot</p>
                    </div>
                    <div className='grid absolute gap-1 top-[14px] left-[225px]'>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <FiSearch className=''></FiSearch>
                        </div>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <AiFillHeart className='text-[#DD243E]'></AiFillHeart>
                        </div>
                    </div>
                </div>
                <h2 className='text-lg mb-[10px] font-medium'>Bag pack</h2>
                <p className='text-base mb-[10px] text-[#7B7B7B]'><span className='line-through font-normal'>$500.00</span> $400.00</p>
                <div className="rating flex gap-[5px]">
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#B48660]" />
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#F58E49]" checked />
                </div>
            </div>
            <div>
                <div className='relative overflow-hidden group'>
                    <img className='mb-5' src={product8} alt="" />
                    <div className='bg-[#313131] absolute -bottom-9 group-hover:bottom-5 transition-all duration-300 rounded-b-[20px] w-[267px]'>
                        <button className='text-white py-[5px] flex items-center justify-center gap-5 mx-auto'><img src={moneyIcon} alt="" /> Add to Card</button>
                    </div>
                    <div className='grid gap-1 absolute top-[14px] left-[13px]'>
                        <p className='bg-[#DD2424] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>40%</p>
                        <p className='bg-[#313131] text-xs py-1 px-[10px] inline-block text-white rounded-[20px]'>Hot</p>
                    </div>
                    <div className='grid absolute gap-1 top-[14px] left-[225px]'>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <FiSearch className=''></FiSearch>
                        </div>
                        <div className='bg-[#E8E8E8] rounded-full inline-block p-[5px]'>
                            <AiFillHeart className='text-[#DD243E]'></AiFillHeart>
                        </div>
                    </div>
                </div>
                <h2 className='text-lg mb-[10px] font-medium'>Bag pack</h2>
                <p className='text-base mb-[10px] text-[#7B7B7B]'><span className='line-through font-normal'>$500.00</span> $400.00</p>
                <div className="rating flex gap-[5px]">
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#B48660]" />
                    <input type="radio" name="rating-1" className="mask mask-circle w-[10px] bg-[#F58E49]" checked />
                </div>
            </div>
            </div>
        </div>
    );
};

export default WinterLooks;