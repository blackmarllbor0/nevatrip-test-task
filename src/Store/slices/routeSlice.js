import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
    name: 'route',
    initialState: {
        route: 'Choise a route'
    },
    reducers: {
        setRoute(state, action) {
            state.route = action.payload;
        },
    }
});

export const { setRoute } = routeSlice.actions;
export default routeSlice.reducer;