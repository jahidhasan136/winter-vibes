import mart from '../../../assets/sites/mart.png'
import emmad from '../../../assets/sites/emmad.png'
import lori from '../../../assets/sites/lori.png'
import docco from '../../../assets/sites/docco.png'

const RecommendSites = () => {
    return (
        <div className='mt-[70px] md:mt-[135px] container mx-auto md:flex grid justify-center gap-[60px] md:gap-[101px]'>
            <div className='flex items-center gap-5'>
                <img src={mart} alt="" />
                <h3 className='font-bold text-2xl'>Happy Mart</h3>
            </div>
            <div className='flex items-center gap-5'>
                <img src={emmad} alt="" />
                <h3 className='font-bold text-2xl'>Happy Mart</h3>
            </div>
            <div className='flex items-center gap-5'>
                <img src={lori} alt="" />
                <h3 className='font-bold text-2xl'>Happy Mart</h3>
            </div>
            <div className='flex items-center gap-5'>
                <img src={docco} alt="" />
                <h3 className='font-bold text-2xl'>Happy Mart</h3>
            </div>
        </div>
    );
};

export default RecommendSites;