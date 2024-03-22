import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import ProductRegister from "./screens/ProductRegister/ProductRegister";
import Realeases from "./screens/Realeases/Realeases";
import { Login } from "./screens/Login/Login";
import NavBar from "./screens/Navbar/NavBar";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
               
                <Route path="/login" element={<Login />} />
                <Route element={<NavBar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/productregister" element={<ProductRegister />} />
                    <Route path="/realeases" element={<Realeases />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
