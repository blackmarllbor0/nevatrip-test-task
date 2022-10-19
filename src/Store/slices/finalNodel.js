import { createSlice } from "@reduxjs/toolkit";

const finalModelSlice = createSlice({
    name: 'finalModel',
    initialState: {
        show: false,
        tickets: [],
    },
    reducers: {
        setShowFinalModel(state, action) {
            state.show = action.payload.show;
            state.tickets = action.payload.tickets;
        },
    },
});

export const { setShowFinalModel } = finalModelSlice.actions;
export default finalModelSlice.reducer;