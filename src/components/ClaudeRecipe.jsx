export default function ClaudeRecipe(props) {
  return (
    <section>
      <h2>Chef's Recommended Recipe</h2>
      <pre>{props.recipe}</pre> {/* Displays raw markdown cleanly */}
    </section>
  );
}
