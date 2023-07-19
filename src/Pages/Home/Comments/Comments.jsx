import { useEffect, useState } from 'react';
import AllComments from '../../AllComments/AllComments';

const Comments = () => {
    const [comment, setComment] = useState([])
    const [showAll, setShowAll] = useState(false);


    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => {
                setComment(data)
            })
    }, [])

    const handleReadMore = () => {
        setShowAll(true);
    };

    const handleReadLess = () => {
        setShowAll(false);
    };


    return (
        <div className="container mx-auto mt-[60px] md:mt-[550px] lg:mt-[120px] text-center">
            <h1 data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" className='text-3xl md:text-[42px] font_caprasimo mb-[32px] md:mb-[62px]'><span className='font_caprasimo bg-clip-text text-transparent bg-gradient-to-b from-[#722CFF] to-[#A346EF]'>Happy</span> Commenters</h1>
            <div className='flex justify-center' data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mb-10'>
                    {
                        comment?.slice(0, 3).map(item => <AllComments key={item.id} item={item}></AllComments>)
                    }
                    {showAll && (
                        comment?.slice(3).map(item => <AllComments key={item.id} item={item}></AllComments>)
                    )}
                </div>
            </div>
            {!showAll && (
                <button onClick={handleReadMore} className='btn_custom'>Read More</button>
            )}
            {showAll && (
                <button onClick={handleReadLess} className='btn_custom'>Read Less</button>
            )}
        </div>
    );
};

export default Comments;