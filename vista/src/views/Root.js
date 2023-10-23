import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Root() {
    return (
        <>
            <Header />
            <div id="detail">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}