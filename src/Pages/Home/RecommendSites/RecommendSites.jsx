import mart from '../../../assets/sites/mart.png'
import emmad from '../../../assets/sites/emmad.png'
import lori from '../../../assets/sites/lori.png'
import docco from '../../../assets/sites/docco.png'

const RecommendSites = () => {
    return (
        <div className='mt-[40px] p-10 md:p-0 md:mt-[135px] container mx-auto grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-[30px] md:gap-[101px]'>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <img className='mx-auto' src={mart} alt="" />
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <img className='mx-auto' src={emmad} alt="" />
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <img className='mx-auto' src={lori} alt="" />
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <img className='mx-auto' src={docco} alt="" />
            </div>
        </div>
    );
};

export default RecommendSites;