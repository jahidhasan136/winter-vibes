import picture1 from '../../../assets/comments/picture_1.png'
import picture2 from '../../../assets/comments/picture_2.png'
import picture3 from '../../../assets/comments/picture_3.png'

const Comments = () => {
    // TODO: Read more button incomplete
    return (
        <div className="container mx-auto mt-[120px] text-center">
            <h1 className='text-[42px] font_caprasimo mb-[62px]'><span className='font_caprasimo bg-clip-text text-transparent bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Happy</span> Commenters</h1>
            <div className='flex gap-6 justify-center mb-10'>
                <div className='w-[364px] h-[450px] bg-[#E8E8E8] px-5 py-[55px]'>
                    <img className='mb-5 mx-auto' src={picture1} alt="" />
                    <p className='text-lg text-[#7B7B7B] mb-[10px]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                    <div className="rating mb-[10px] flex gap-[5px] justify-center">
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                    </div>
                    <h3 className='font_caprasimo text-2xl mb-[10px]'>Ricad Placker</h3>
                    <p className='text-lg text-[#7B7B7B]'>Fashion Designer</p>
                </div>
                <div className='w-[364px] h-[450px] bg-[#E8E8E8] px-5 py-[55px]'>
                    <img className='mb-5 mx-auto' src={picture2} alt="" />
                    <p className='text-lg text-[#7B7B7B] mb-[10px]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                    <div className="rating mb-[10px] flex gap-[5px] justify-center">
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                    </div>
                    <h3 className='font_caprasimo text-2xl mb-[10px]'>Ricad Placker</h3>
                    <p className='text-lg text-[#7B7B7B]'>Maci Designer</p>
                </div>
                <div className='w-[364px] h-[450px] bg-[#E8E8E8] px-5 py-[55px]'>
                    <img className='mb-5 mx-auto' src={picture3} alt="" />
                    <p className='text-lg text-[#7B7B7B] mb-[10px]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                    <div className="rating mb-[10px] flex gap-[5px] justify-center">
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                    </div>
                    <h3 className='font_caprasimo text-2xl mb-[10px]'>Ricad Placker</h3>
                    <p className='text-lg text-[#7B7B7B]'>Knish Designer</p>
                </div>
            </div>
            <button className='btn_custom'>Read more</button>
        </div>
    );
};

export default Comments;