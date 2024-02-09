import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import SideBar from "../components/sideBar";
import Footer from "../components/footer";
import Contacto from "../components/contacto";

const MacBookPro16: NextPage = () => {
    return (
        <div>
            <NavBar />
            <SideBar />
            <Footer />
        </div>
    );
}

export default MacBookPro16;

