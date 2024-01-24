import Feature from "../Components/Feature/Feature";
import Banner from "../Components/NavBar/Banner/Banner";


const Home = () => {
    return (
        <div className="bg-blue-50  w-full h-full p-5 space-y-10">
            <Banner></Banner>
            <Feature></Feature>
        </div>
    );
};

export default Home;