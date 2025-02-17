import { useLocation, useNavigate } from "react-router-dom";
import LOGO from "~/assets/images/viflex_logo.svg"
import "~/assets/public/layout/header.css"

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateToHome = () => {
        navigate("/")
    }

    const navigateToLogin = () => {
        navigate("/login")
    }

    return (
        <div className="header">
            <img className="logo" src={LOGO} alt="logo" onClick={navigateToHome} />
            {
                location.pathname !== "/login" && (
                    <div className="header-buttons">
                        <select className="language-select">
                            <option value="en">English</option>
                            <option value="vi">Tiếng Việt</option>
                        </select>
                        <button className="sign-in-btn" onClick={navigateToLogin}>Sign In</button>
                    </div>
                )
            }
        </div>
    );
}