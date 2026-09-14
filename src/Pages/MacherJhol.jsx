import { Link } from "react-router-dom";
import "./MacherJhol.css";

const ingredients = [
  "500g Rohu or Katla fish",
  "2 medium potatoes",
  "1 tomato",
  "1 tsp turmeric",
  "1 tsp cumin",
  "1 tsp ginger paste",
  "2 green chillies",
  "2 tbsp mustard oil",
  "Salt to taste",
  "Fresh coriander",
];

const steps = [
  {
    number: "01",
    title: "Prepare the fish",
    text: "Clean the fish pieces and coat them lightly with turmeric and salt. Let them rest for a few minutes.",
  },
  {
    number: "02",
    title: "Lightly fry",
    text: "Heat mustard oil in a pan and lightly fry the fish pieces until they develop a golden surface. Remove and keep aside.",
  },
  {
    number: "03",
    title: "Build the base",
    text: "In the same oil, add cumin, ginger and tomato. Cook until the spices become fragrant and the mixture softens.",
  },
  {
    number: "04",
    title: "Add the potatoes",
    text: "Add the potato pieces along with turmeric, salt and a little water. Cover and cook until the potatoes become tender.",
  },
  {
    number: "05",
    title: "Bring it together",
    text: "Add the fried fish and green chillies to the gravy. Simmer gently so the fish absorbs the spices.",
  },
  {
    number: "06",
    title: "Serve",
    text: "Finish with fresh coriander and serve hot with steamed rice.",
  },
];

function MacherJhol() {
  return (
    <div className="macher-page">

      {/* NAVBAR */}

      <header className="macher-navbar">
        <Link to="/culture/west-bengal" className="macher-logo">
          <span>☀</span>

          <div>
            <strong>Bharat</strong>
            <small>CULTURAL HERITAGE</small>
          </div>
        </Link>

        <Link to="/culture/west-bengal" className="macher-back">
          ← BACK TO WEST BENGAL
        </Link>
      </header>


      {/* HERO */}

      <section className="macher-hero">

        <div className="macher-hero-image">
          <div className="macher-image-overlay"></div>
        </div>

        <div className="macher-hero-content">

          <span className="macher-label">
            WEST BENGAL — TRADITIONAL CUISINE
          </span>

          <h1>
            Machher
            <br />
            <i>Jhol.</i>
          </h1>

          <p>
            A light Bengali fish curry rooted in the everyday
            cooking traditions of Bengal, traditionally enjoyed
            with warm rice.
          </p>

        </div>

      </section>


      {/* RECIPE INTRO */}

      <section className="macher-intro">

        <div className="macher-intro-left">

          <span className="macher-section-label">
            THE RECIPE
          </span>

          <h2>
            Simple.
            <br />
            <i>Essential.</i>
          </h2>

        </div>

        <div className="macher-intro-right">

          <p>
            Machher Jhol is one of Bengal's most familiar
            fish preparations. Its delicate gravy allows the
            flavour of the fish, mustard oil and spices to
            remain at the heart of the dish.
          </p>

<div className="macher-kitchen-notes">

  <div className="kitchen-note">
    <span>01</span>
    <strong>MUSTARD OIL</strong>
    <p>The unmistakable aroma of Bengali cooking.</p>
  </div>

  <div className="kitchen-note">
    <span>02</span>
    <strong>POTATO</strong>
    <p>A humble ingredient that belongs in the jhol.</p>
  </div>

  <div className="kitchen-note">
    <span>03</span>
    <strong>GREEN CHILLI</strong>
    <p>A final touch of fresh heat and fragrance.</p>
  </div>

</div>

<div className="macher-meta">

  <div>
    <span>TIME</span>
    <strong>45 MIN</strong>
  </div>

  <div>
    <span>DIFFICULTY</span>
    <strong>EASY</strong>
  </div>

  <div>
    <span>SERVES</span>
    <strong>4</strong>
  </div>

</div>
        </div>

      </section>


      {/* INGREDIENTS */}
<section className="macher-ingredients">

  <div className="macher-ingredients-title">
    <span className="macher-section-label">
      WHAT YOU NEED
    </span>

    <h2>
      Gather the
      <br />
      <i>ingredients.</i>
    </h2>

    <p>
      Before the cooking begins, the Bengali kitchen
      comes together around a few simple ingredients.
    </p>
  </div>


  <div className="macher-kitchen-scene">

<div className="kitchen-image">
  <img
    src="https://commons.wikimedia.org/wiki/Special:FilePath/Common%20Indian%20spices.jpg"
    alt="Indian cooking spices"
  />

      <div className="kitchen-image-overlay"></div>

      {/* animated steam */}

      <div className="steam steam-one"></div>
      <div className="steam steam-two"></div>
      <div className="steam steam-three"></div>

      <div className="kitchen-caption">
        <span>THE BENGALI KITCHEN</span>
        <strong>Where the recipe begins.</strong>
      </div>
    </div>


    <div className="ingredient-floating-list">

      {ingredients.map((ingredient, index) => (
        <div
          className="ingredient-floating"
          key={ingredient}
        >

          <span>
            {String(index + 1).padStart(2, "0")}
          </span>

          <p>{ingredient}</p>

        </div>
      ))}

    </div>

  </div>

</section>


      {/* COOKING STEPS */}

<section className="macher-steps">

  <div className="macher-steps-heading">

    <span className="macher-section-label">
      THE METHOD
    </span>

    <h2>
      Cook it
      <br />
      <i>slowly.</i>
    </h2>

    <p>
      There is no rush in a Bengali kitchen.
      Each step builds another layer of flavour.
    </p>

  </div>


  <div className="macher-cooking-sequence">


    {/* STEP 01 */}

    <article className="cooking-step">

      <div className="cooking-step-image">
        <img
  src="https://commons.wikimedia.org/wiki/Special:FilePath/A%20Bengali%20woman%20cooking%20at%20noon.jpg"
  alt="Bengali woman cooking"
/>
      </div>

      <div className="cooking-step-content">

        <span>01</span>

        <h3>
          Prepare
          <br />
          the fish.
        </h3>

        <p>
          Clean the fish pieces and coat them lightly
          with turmeric and salt. Let them rest before
          the cooking begins.
        </p>

      </div>

    </article>


    {/* STEP 02 */}

    <article className="cooking-step cooking-step-reverse">

      <div className="cooking-step-image">
      <img
  src="https://commons.wikimedia.org/wiki/Special:FilePath/A%20Bengali%20woman%20cooking%20at%20noon.jpg"
  alt="Bengali woman cooking"
/>
        <div className="pan-animation">

          <div className="pan"></div>

          <div className="pan-food"></div>

          <div className="pan-steam steam-one"></div>
          <div className="pan-steam steam-two"></div>
          <div className="pan-steam steam-three"></div>

        </div>

      </div>

      <div className="cooking-step-content">

        <span>02</span>

        <h3>
          Fry it
          <br />
          lightly.
        </h3>

        <p>
          Heat mustard oil and gently fry the fish
          until the outside becomes golden. Remove
          the pieces and keep them aside.
        </p>

      </div>

    </article>


    {/* STEP 03 */}

    <article className="cooking-step">

      <div className="cooking-step-image">

        <img
  src="https://commons.wikimedia.org/wiki/Special:FilePath/Bengali%20Fish%20fry.JPG"
  alt="Bengali fish fry"
/>

        <div className="step-image-label">
          MUSTARD OIL · CUMIN · GINGER
        </div>

      </div>

      <div className="cooking-step-content">

        <span>03</span>

        <h3>
          Build the
          <br />
          <i>jhol.</i>
        </h3>

        <p>
          Add cumin, ginger and tomato to the hot oil.
          Let the spices bloom until the kitchen fills
          with their aroma.
        </p>

      </div>

    </article>


    {/* STEP 04 */}

    <article className="cooking-step cooking-step-reverse">

      <div className="cooking-step-image final-dish-image">

<img
  src="https://images.pexels.com/photos/5410408/pexels-photo-5410408.jpeg"
  alt="Fish curry simmering"
  className="step-image"
/>

        <div className="final-dish-glow"></div>

      </div>

      <div className="cooking-step-content">

        <span>04</span>

        <h3>
          Let it
          <br />
          <i>simmer.</i>
        </h3>

        <p>
          Add the potatoes, fish and green chillies.
          Allow everything to simmer gently until the
          flavours come together.
        </p>

      </div>

    </article>


    {/* STEP 05 */}

   <article className="cooking-step cooking-step-reverse cooking-step-final">

  <div className="cooking-step-image final-dish-image">
    <img
      src="https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20fish%20curry%20%28Macher%20Jhol%29.jpg"
      alt="Machher Jhol served with rice"
    />

    <div className="final-dish-glow"></div>

    <div className="step-image-label">
      FRESH CORIANDER · STEAMED RICE
    </div>
  </div>

  <div className="cooking-step-content">

    <span>05 — THE FINISH</span>

    <h3>
      Serve it
      <br />
      <i>hot.</i>
    </h3>

    <p>
      Finish with fresh coriander and bring the
      pot to the table with warm steamed rice.
    </p>

    <div className="serving-line">
      <span>FISH</span>
      <span>RICE</span>
      <span>MUSTARD OIL</span>
      <span>GREEN CHILLI</span>
    </div>

  </div>

</article>

  </div>

</section>

      {/* END */}

      <section className="macher-end">

        <span>WEST BENGAL — 01</span>

        <h2>
          Serve with
          <br />
          <i>rice.</i>
        </h2>

        <p>
          Some recipes don't need to be complicated.
          They simply need to be remembered.
        </p>

        <Link to="/culture/west-bengal">
          ← EXPLORE WEST BENGAL
        </Link>

      </section>


      <footer className="macher-footer">
        <span>BHARAT — WEST BENGAL</span>

        <Link to="/culture/west-bengal">
          BACK TO CUISINE
        </Link>
      </footer>

    </div>
  );
}

export default MacherJhol;