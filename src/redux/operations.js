import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk("campers/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/campers");
        console.log(response.data.items);
        return response.data.items;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});