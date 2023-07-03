import { BiSolidPhoneCall } from 'react-icons/bi'
import { FaShippingFast } from 'react-icons/fa'
import { TbReload } from 'react-icons/tb'
import { BiSolidLock } from 'react-icons/bi'
import person1 from '../../../assets/services/person_1.png'
import person2 from '../../../assets/services/person_2.png'
import person3 from '../../../assets/services/person_3.png'
import person4 from '../../../assets/services/person_4.png'
import person5 from '../../../assets/services/person_5.png'
import person6 from '../../../assets/services/person_6.png'


const Services = () => {
    return (
        <div className='container mx-auto md:flex grid gap-5 md:gap-0 justify-between mt-[90px]'>
            <div className='flex items-center gap-5'>
                <BiSolidPhoneCall className='text-4xl'></BiSolidPhoneCall>
                <div className='text-lg'>
                    <h2 className='font_caprasimo'>Call Us Anytime</h2>
                    <p className='text-[#7B7B7B]'>+1 &#40;250&#41; 444 5555</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <FaShippingFast className='text-4xl'></FaShippingFast>
                <div className='text-lg'>
                    <h2 className='font_caprasimo'>Free Shipping</h2>
                    <p className='text-[#7B7B7B]'>When you spend $100+</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <TbReload className='text-4xl'></TbReload>
                <div className='text-lg'>
                    <h2 className='font_caprasimo'>Free Returns</h2>
                    <p className='text-[#7B7B7B]'>30-days free return policy</p>
                </div>
            </div>
            <div className='flex items-center gap-5 relative'>
                <BiSolidLock className='text-4xl'></BiSolidLock>
                <div className='text-lg'>
                    <h2 className='font_caprasimo'>Secured Payment</h2>
                    <p className='text-[#7B7B7B]'>We accept all major credit cards.</p>
                </div>
                <div>
                    <div className="avatar-group -space-x-6  bg-white p-[10px] rounded-[60px] shadow-lg shadow-[#4c099033] absolute -right-20 md:-right-36 -top-[45px] md:-top-[55px]">
                        <div className="avatar">
                            <div className="w-12">
                                <img src={person1} />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src={person2} />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src={person3} />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src={person4} />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src={person5} />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src={person6} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;