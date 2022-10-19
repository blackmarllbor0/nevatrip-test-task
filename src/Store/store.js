import { configureStore } from "@reduxjs/toolkit";
import routeReducer from './slices/routeSlice';
import selectReducer from './slices/selectSlice';
import modelReducer from './slices/modelSlice';
import basketReducer from './slices/basketSlice';
import finalNodelSlice from "./slices/finalNodel";

export const store = configureStore({
    reducer: {
        route: routeReducer,
        select: selectReducer,
        model: modelReducer,
        basket: basketReducer,
        finalModel: finalNodelSlice
    }
});