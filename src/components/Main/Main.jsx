import { useState } from "react";
import "./Main.css";

const Main = () => {
  const [ingredients, setIngredient] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
  }
  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          aria-label="Add ingredient"
          placeholder="e.g oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <ul>{ingredientsListItems}</ul>
    </main>
  );
};

export default Main;
