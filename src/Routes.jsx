import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Login } from "./screens/Login/Login";
import NavBar from "./screens/Navbar/NavBar";

export function AppRoutes() {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        
        </BrowserRouter>
    );
}
