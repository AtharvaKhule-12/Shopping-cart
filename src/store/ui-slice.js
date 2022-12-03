import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { open: false, message: '', type: ''},
    reducers: {
        showNotification(state, action) {
            state.open = action.payload.open;
            state.message = action.payload.message;
            state.type = action.payload.type;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;