import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const ID = process.env.REACT_APP_EDAMAM_APP_ID;
const KEY = process.env.REACT_APP_EDAMAM_API_KEY;

export const getRecipes = createAsyncThunk("getRecipes", async ({query, limit}) => {
    const response= await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}&from=0&to=${limit}`);
    return response?.data
})

export const getRecipe = createAsyncThunk("getRecipe", async ({id}) => {
    const response = await axios.get(`https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${ID}&app_key=${KEY}`);
    return response?.data
})
