import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = '';
const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk('auth-register', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('---', credentials);
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const login = createAsyncThunk('auth-login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('---', credentials);
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const logOut = createAsyncThunk('auth-logOut', async (_, thunkAPI) => {
    try {
        await axios.post("---")
        clearAuthHeader()
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk('auth-refrueshUser', async (_, thunkAPI) => {
    const data = thunkAPI.getState();
    if (!data.token) { return thunkAPI.rejectWithValue('cant catch user') }
    try {
        setAuthHeader(data.token);
        const result = await axios.get('----')
        return result;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})