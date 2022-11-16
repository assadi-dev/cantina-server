import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./style/reset.css";
import "./style/root.css";
import Layout from "./components/Layout";
import AddRecipe from "./pages/AddRecipe";
import Home from "./pages/Home";
import RecipesDetails from "./pages/RecipesDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recette/:id" element={<RecipesDetails />} />
          <Route path="recette/ajouter" element={<AddRecipe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
