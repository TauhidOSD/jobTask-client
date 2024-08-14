import { Outlet } from "react-router-dom";
import NavBer from "../Components/NavBer/NavBer";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div >
            <NavBer/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;