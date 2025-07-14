import React from "react";

// Main1 component manages a list of ingredients and allows adding new ones
export default function Main1() {
  // State to hold the list of ingredients
  const [ingredients, setIngredients] = React.useState(["Chicken"]);

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
      {/* Display the list of ingredients */}
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
