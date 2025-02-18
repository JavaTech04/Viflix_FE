import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Demo
export const Auth = () => {
    const navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        const accessTokenRegex = /access_token=([^&]+)/;
        const isMatch = window.location.href.match(accessTokenRegex);

        if (isMatch) {
            const accessToken = isMatch[1];
            setAccessToken(accessToken);
            setIsLoggedin(true);
        }
    }, []);

    useEffect(() => {
        if (isLoggedin) {
            getUserDetails();
            navigate("/auth");
        }
    }, [isLoggedin, navigate]);

    const getUserDetails = async () => {
        const response = await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
        );
        const data = await response.json();
        setUserDetails(data);
        // console.log(data);

    };
    return (
        <div>
            <div className="home">
                <div className="overlay">
                    <img
                        src={userDetails.picture}
                        alt={`${userDetails.given_name}'s profile`}
                        className="profile-pic"
                    />
                    <h3>{userDetails.name}</h3>
                    <p>{userDetails.email}</p>
                </div>
            </div>
        </div>
    )
}