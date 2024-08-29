import { createSlice } from "@reduxjs/toolkit";
import { getRecipes, getRecipe } from "./Recipes.action";

const initialState = {
  recipes: [],
  recipe: [],
  isLoading: true,
  isError: false,
  isRecipeLoading: true,
  isRecipeError: false
};

const RecipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipes.pending, (state, action) => {
      state.isLoading = true;
    });
      builder.addCase(getRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload?.hits;
      });
      builder.addCase(getRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
      builder.addCase(getRecipe.pending, (state, action) => {
        state.isRecipeLoading = true
      });
      builder.addCase(getRecipe.fulfilled, (state, action) => {
        state.recipe = action.payload
      });
      builder.addCase(getRecipe.rejected, (state, action) => {
        state.isRecipeError = true
      })
  },
});

export default RecipesSlice.reducer;
