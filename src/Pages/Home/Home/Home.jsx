import Banner from "../Banner/Banner";
import PopularProducts from "../PopularProducts/PopularProducts";
import Services from "../Services/Services";
import ShopEdit from "../ShopEdit/ShopEdit";
import WinterLooks from "../WinterLooks/WinterLooks";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ShopEdit></ShopEdit>
            <PopularProducts></PopularProducts>
            <WinterLooks></WinterLooks>
        </div>
    );
};

export default Home;