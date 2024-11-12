import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById } from "../operations";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        features: ["transmission", "engine", "AC", "bathroom", "kitchen", "TV", "radio", "refrigerator", "microwave", "gas", "water"],
        selectedFeatures: [],
        selectedCamper: null,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCamperById.pending, (state) => {
                state.isLoading = true;
                state.error = null; // Clear previous errors on new fetch
                state.selectedCamper = null; // Reset previous camper data
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedCamper = action.payload; // Store fetched camper data
            })
            .addCase(fetchCamperById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "Failed to fetch camper"; // Set a default error message
            });
    }
});

export default filtersSlice.reducer;