import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Login } from "./screens/Login/Login";
import { Private } from "./config/PrivateRoute";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Private><Home /></Private>} />
            </Routes>
        
        </BrowserRouter>
    );
}
