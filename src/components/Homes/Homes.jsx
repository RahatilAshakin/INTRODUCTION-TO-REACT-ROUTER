import { Outlet } from "react-router-dom";
import Headers from "../Headers/Headers";
import Footer from "../Footer/Footer";



const Homes = () => {
    return (
        <div>
            <Headers></Headers>
            <h2 className='capitalize border-4 rounded-xl border-red-700 text-center font-bold text-red-700 p-3 my-6
             hover:text-yellow-500 text-2xl'>this is home component</h2>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Homes;