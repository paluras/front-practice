import "./project1.css";

export default function Page() {
  return (
    <>
      <main>
        <img width="500" src="/image-omelette.jpeg" alt="Omelette Image" />
        <section>
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>
        <section>
          <article>
            <h1>Preparation time</h1>
            <ul>
              <li>
                <b>Total</b>: Approximately 10 minutes
              </li>
              <li>
                <b>Preparation</b>: 5 minutes
              </li>
              <li>
                <b>Cooking</b>: 5 minutes
              </li>
            </ul>
          </article>
        </section>
        <section>
          <h1>Ingredients</h1>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <hr />
        </section>
        <section>
          <h1>Instructions</h1>
          <ol>
            <li>
              <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <b>Heat the pan</b>: Place a non-stick frying pan over medium heat
              and add butter or oil.
            </li>
            <li>
              <b>Cook the omelette</b>: Once the butter is melted and bubbling,
              pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
              surface.
            </li>
            <li>
              <b>Add fillings (optional)</b>: When the eggs begin to set at the
              edges but are still slightly runny in the middle, sprinkle your
              chosen fillings over one half of the omelette.
            </li>
            <li>
              <b>Fold and serve</b>: As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <b>Enjoy</b>: Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
          <hr />
        </section>
        <section>
          <h1>Nutrition</h1>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
