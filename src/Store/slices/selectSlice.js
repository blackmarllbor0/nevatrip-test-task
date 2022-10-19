import { createSlice } from "@reduxjs/toolkit";

const selectSlice = createSlice({
    name: 'select',
    initialState: {
        select: false
    },
    reducers: {
        setSelect(state, action) {
            state.select = action.payload;
        }
    }
});

export const { setSelect } = selectSlice.actions;
export default selectSlice.reducer;