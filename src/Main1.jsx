import React from "react";
import ClaudeRecipe from "./components/ClaudeRecipe";
import IngredientsList from "./components/IngredientsList";
import { getRecipeFromMistral } from "../ai";

/**
 * Challenge: Get a recipe from the AI!
 *
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 *
 * Using either the `getRecipeFromChefClaude` function or the
 * `getRecipeFromMistral` function, make it so that when the user
 * clicks "Get a recipe", the text response from the AI is displayed
 * in the <ClaudeRecipe> component.
 *
 * For now, just have it render the raw markdown that the AI returns,
 * don't worry about making it look nice yet. (We're going to use a
 * package that will render the markdown for us soon.)
 */

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipe, setRecipe] = React.useState("");

  async function handleGetRecipe() {
    try {
      const recipeText = await getRecipeFromMistral(ingredients);
      setRecipe(recipeText);
      setRecipeShown(true);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          handleGetRecipe={handleGetRecipe}
        />
      )}

      {recipeShown && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
