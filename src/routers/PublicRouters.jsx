import { Outlet } from "react-router-dom";
import { Header } from "../components/public/layout/Header";
import { Footer } from "../components/public/layout/Footer";
import "~/assets/public/PublicRouters.css"

export const PublicRouters = () => {
    return (
        <div className="container">
            <Header />
            <div className="main-area">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}