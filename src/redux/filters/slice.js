import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        selectedFeatures: [],
        selectedLocation: '',
    },
    reducers: {
        setSelectedFeatures(state, action) {
            state.selectedFeatures = action.payload;
        },
        setSelectedLocation(state, action) {
            state.selectedLocation = action.payload;
        },
    },
});

export const { setSelectedFeatures, setSelectedLocation } = filtersSlice.actions;
export default filtersSlice.reducer;