import Banner from "../Banner/Banner";
import LiteratureSection from "../LiteratureSection/LiteratureSection";
import PopularProducts from "../PopularProducts/PopularProducts";
import Services from "../Services/Services";
import ShopEdit from "../ShopEdit/ShopEdit";
import VideoSection from "../VideoSection/VideoSection";
import WinterLooks from "../WinterLooks/WinterLooks";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ShopEdit></ShopEdit>
            <PopularProducts></PopularProducts>
            <WinterLooks></WinterLooks>
            <VideoSection></VideoSection>
            <LiteratureSection></LiteratureSection>
        </div>
    );
};

export default Home;