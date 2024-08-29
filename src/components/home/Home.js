import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../recipes";
import Header from "../header/Header";
import Recipes from "../recipe/Recipes";

const Home = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("vegan");
  const [limit, setLimit] = useState(30);
  useEffect(() => {
    dispatch(getRecipes({ query, limit }));
  }, [query, limit]);
  return (
    <main className="w-full flex flex-col">
      <Header
        title={
          <p>
            Taste the World with
            <br /> FlavorVerse!
          </p>
        }
        type="home"
      />

      <section id="recipes" className="md:max-w-[1440px] mx-auto px-4 md:px-20">
        <Recipes
          query={query}
          setQuery={setQuery}
          limit={limit}
          setLimit={setLimit}
        />
      </section>
    </main>
  );
};

export default Home;
