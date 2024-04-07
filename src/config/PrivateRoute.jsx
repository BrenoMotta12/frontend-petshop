import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export function Private({children}) {

    const auth = useSelector((state) => state.auth.value);
    const isAuthenticated = auth.authenticated;

    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

    return children;
}