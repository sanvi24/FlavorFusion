import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import Searchbar from "../search/Searchbar";
import RecipeCard from "./RecipeCard";
import { getRecipes } from "../../recipes";
import Button from "../../atoms/Button";
import { getRecipe } from "../../recipes/Recipes.action";

const Recipes = ({ query, setQuery, limit, setLimit }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const [loading, setLaoding] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchedRecipe = async (e) => {
    e.preventDefault();
    dispatch(getRecipe());
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
    dispatch(getRecipe());
  };

  useEffect(() => {
    setLaoding(true);

    dispatch(getRecipe());
  }, []);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4" onSubmit={handleSearchedRecipe}>
          <Searchbar
            placeholder="eg. Cake, Vegan, Chicken"
            handleInputChange={handleChange}
            rightIcon={
              <BiSearchAlt2
                className="text-gray-600"
                onClick={handleSearchedRecipe}
              />
            }
          />
        </form>
      </div>

      {recipes?.length > 0 ? (
        <>
          <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10 items-center justify-center">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>

          <div className="flex w-full items-center justify-center py-10">
            <Button
              title="Show More"
              containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
              handleClick={showMore}
            />
          </div>
        </>
      ) : (
        <div className="text-white w-full items-center justify-center py-10">
          <p className="text-center">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
