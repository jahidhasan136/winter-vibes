

const AllComments = ({ item }) => {
    const {img, description, name, passion} = item
    return (
        <div className='w-[364px] md:h-[450px] bg-[#E8E8E8] px-5 py-[25px] md:py-[55px]'>
            <img className='mb-2 md:mb-5 mx-auto' src={img} alt="" />
            <p className='md:text-lg text-[#7B7B7B] mb-[5px] md:mb-[10px]'>{description}</p>
            <div className="rating mb-[5px] md:mb-[10px] flex gap-[5px] justify-center">
                <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" />
                <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
                <input type="radio" name="rating-1" className="mask mask-star bg-[#F58E49] w-3" checked />
            </div>
            <h3 className='font_caprasimo text-2xl mb-[5px] md:mb-[10px]'>{name}</h3>
            <p className='text-lg text-[#7B7B7B]'>{passion}</p>
        </div>
    );
};

export default AllComments;