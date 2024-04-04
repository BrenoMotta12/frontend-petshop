import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/login/auth";

export default configureStore({
    reducer: {
        auth: auth,
    },
});