import Feature from "../Components/Feature/Feature";
import Banner from "../Components/Banner/Banner";
import Messges from "../Components/Messges/Messges";


const Home = () => {
    return (
        <div className="bg-blue-50  w-full h-full  space-y-10">
            <Banner></Banner>
            <Feature></Feature>
            <Messges></Messges>
        </div>
    );
};

export default Home;