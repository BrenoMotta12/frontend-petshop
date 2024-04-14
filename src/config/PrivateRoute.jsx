import { Navigate } from "react-router";

export function Private({ children }) {

    const auth = JSON.parse(sessionStorage.getItem('auth'));
    const isAuthenticated = auth && auth.status;

    if (isAuthenticated === "success") {
        return children;
    }

    return <Navigate to='/login' />
}