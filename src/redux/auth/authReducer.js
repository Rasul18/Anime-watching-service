import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./authOperation";

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLogdIn: false,
    isRefreshing: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => builder
        .addCase(register.pending, (state, action) => state)
        .addCase(register.rejected, (state, action) => {
            state.user.name = null;
            state.user.email = null;
            state.token = null;
            state.isLogdIn = false;
            state.isRefreshing = false;
        })
        .addCase(register.fulfilled, (state, { payload }) => {
            state.user.name = payload.name;
            state.user.email = payload.email;
            state.token = payload.token;
            state.isLogdIn = true;
            state.isRefreshing = false;
        })
        .addCase(login.pending, (state, action) => state)
        .addCase(login.rejected, (state, action) => {
            state.user.name = null;
            state.user.email = null;
            state.token = null;
            state.isLogdIn = false;
            state.isRefreshing = false;
        })
        .addCase(login.fulfilled, (state, { payload }) => {
            state.user.name = payload.name;
            state.user.email = payload.email;
            state.token = payload.token;
            state.isLogdIn = true;
            state.isRefreshing = false;
        })
        .addCase(logOut.pending, (state, action) => state)
        .addCase(logOut.rejected, (state, action) => {
            state.user.name = null;
            state.user.email = null;
            state.token = null;
            state.isLogdIn = false;
            state.isRefreshing = false;
        })
        .addCase(logOut.fulfilled, (state, action) => {
            state.user.name = null;
            state.user.email = null;
            state.token = null;
            state.isLogdIn = false;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.pending, (state, action) => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.rejected, (state, action) => {
            state.user.name = null;
            state.user.email = null;
            state.token = null;
            state.isLogdIn = false;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.fulfilled, (state, { payload }) => {
            state.user.name = payload.name;
            state.user.email = payload.email;
            state.token = payload.token;
            state.isLogdIn = true;
            state.isRefreshing = false;
        })
});
