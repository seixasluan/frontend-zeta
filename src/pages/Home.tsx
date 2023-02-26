import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
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