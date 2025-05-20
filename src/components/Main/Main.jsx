import { useState } from "react";
import "./Main.css";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";
import IngredientsList from "../IngredientsList/IngredientsList";

const Main = () => {
  const [ingredients, setIngredient] = useState([]);

  const [recipieShown, setRecipieShown] = useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  function toggleRecipieShown() {
    setRecipieShown((prevShown) => !prevShown);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          onChange
          aria-label="Add ingredient"
          placeholder="e.g oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipieShown={toggleRecipieShown}
        ></IngredientsList>
      )}
      {recipieShown && <ClaudeRecipe></ClaudeRecipe>}
    </main>
  );
};

export default Main;
