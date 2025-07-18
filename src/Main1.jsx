import React from "react";

// Main1 component manages a list of ingredients and allows adding new ones
export default function Main1() {
  // State to hold the list of ingredients
  const [ingredients, setIngredients] = React.useState([]);

  // Map each ingredient to a <li> element for display
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  // Handles form submission to add a new ingredient
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient"); // Get input value
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]); // Add new ingredient to state
  }

  return (
    <main>
      {/* Form to add a new ingredient */}
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>
          </div>
        </section>
      ) : null}
    </main>
  );
}
