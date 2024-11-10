import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const campersSlice = createSlice({
    name: "campers",
    initialState: {
        total: 0,
        items: [],
        selectedCamper: null,
        isLoading: false,
        error: false,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchCamperById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.selectedCamper = action.payload;
            })
            .addCase(fetchCamperById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default campersSlice.reducer;