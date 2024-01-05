import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";

export default (
  <Router>
    <Routes>
      <Route path="/recipe/:id" exact element={<Recipe />} />
      <Route path="/recipe" exact element={<NewRecipe />} />
      <Route path="/recipes" exact element={<Recipes />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);
