import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Comments from "../Comments/Comments";
import LiteratureSection from "../LiteratureSection/LiteratureSection";
import PopularProducts from "../PopularProducts/PopularProducts";
import RecommendSites from "../RecommendSites/RecommendSites";
import Services from "../Services/Services";
import ShopEdit from "../ShopEdit/ShopEdit";
import VideoSection from "../VideoSection/VideoSection";
import WinterLooks from "../WinterLooks/WinterLooks";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Winter Vibes</title>
            </Helmet>
            <Banner></Banner>
            {/* <Services></Services> */}
            <ShopEdit></ShopEdit>
            <PopularProducts></PopularProducts>
            <WinterLooks></WinterLooks>
            <VideoSection></VideoSection>
            <LiteratureSection></LiteratureSection>
            <Comments></Comments>
            <RecommendSites></RecommendSites>
        </div>
    );
};

export default Home;