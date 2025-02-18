import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/public/Home";
import { Auth } from "../pages/public/Auth";
import { PublicRouters } from "./PublicRouters";
import { Login } from "../pages/public/Login";

function RouterProvider() {

    return (
        <Routes>
            <Route element={<PublicRouters />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route element={<PublicRouters />}>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/auth" element={<Auth />} />
            </Route>
        </Routes>
    )
}

export default RouterProvider;