
import { MdOutlineFileDownload } from "react-icons/md";
const Banner = () => {
    return (
        <div className=" p-5">
            <div className=" w-full h-auto rounded-2xl p-20 " style={{ backgroundImage: "url(https://i.ibb.co/bb5rKh5/316546300-547692113846445-7299710494491288098-n.png)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className=" flex justify-center items-center gap-10 ">
                    <div className=" flex-1 px-5  space-y-7 text-blue-50">
                        <h3 className=" text-7xl font-bold  ">Message <br /> privately</h3>
                        <p className=" text-xl font-semibold">Simple, reliable, private messaging and calling for free*, available all over the world.</p>
                        <button className=" py-3 px-6 bg-blue-900 text-blue-50 border-0 rounded-full flex items-center gap-2 ">Download <span className=" text-2xl"><MdOutlineFileDownload /></span> </button>
                    </div>
                    <div className=" flex-1 space-y-5">
                        <div className=" space-y-0">
                            <img src="https://i.ibb.co/zN1tdxh/329792464-534173148815054-3736500652022655929-n.png" alt="" />
                            <img className=" relative -top-5" src="https://i.ibb.co/RzJfVrc/326429760-565901131866976-8960223839941330956-n.png" alt="" />
                            <img src="https://i.ibb.co/rZBdLHM/318567080-617695970110803-5923371384204745052-n.png" alt="" />

                        </div>
                        <div>
                            <img className=" w-96" src="https://i.ibb.co/dthzjcR/327063196-5800887573364035-3294745791563659576-n.png" alt="" />
                            <img className=" w-96" src="https://i.ibb.co/HxDdYYp/327713084-566495871797259-1779906837439389762-n-1.png" alt="" />
                        </div>
                        <img src="https://i.ibb.co/1dVxhwy/323914620-1571722909934742-4947035793330347072-n.png" alt="" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;