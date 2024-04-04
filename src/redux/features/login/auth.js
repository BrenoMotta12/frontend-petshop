import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
    name: 'auth',
    initialState: {
        value: {},
    },
    reducers: {
        authReducer: (state, action) => {
            state.value = action.payload
        },
        logoutReducer: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { authReducer, logoutReducer } = auth.actions;

export default auth.reducer