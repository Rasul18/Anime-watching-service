import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from "./auth/authReducer";

console.log("ПРОВЕРКА СТОРА:", { authSlice, storage });

const authPersistConfig = { // localstorage
    key: 'auth',
    storage: storage.default ? storage.default : storage,
    whitelist: ["token"]
}

export const store = configureStore({
    reducer: {
        [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
        // Не забудь добавить сюда свои новые редюсеры, если хочешь, чтобы они работали!
        // todoOne: todoReducer,
        // user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }), // .concat(другие_мидлвары, если есть)
});
export const persistor = persistStore(store);
