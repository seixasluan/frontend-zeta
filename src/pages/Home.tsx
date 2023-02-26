import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";
import Main from "../organisms/Main/Main";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header/>
            <Main/> 
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Home;