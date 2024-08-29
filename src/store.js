import { configureStore } from "@reduxjs/toolkit"
import reducer from "./recipes/Recipes.reducer"

export const store = configureStore({
    reducer: reducer
});
