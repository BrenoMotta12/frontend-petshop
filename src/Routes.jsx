import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./screens/Login/Login";
import { Home } from "./screens/Home/Home";

export function AppRoutes() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}