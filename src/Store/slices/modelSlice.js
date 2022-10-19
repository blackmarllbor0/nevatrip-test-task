import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
    name: 'model',
    initialState: {
        model: false,
    },
    reducers: {
        setModel(state, action) {
            state.model = action.payload;
        }
    }
});

export const { setModel } = modelSlice.actions;
export default modelSlice.reducer;