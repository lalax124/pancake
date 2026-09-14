import { Link } from "react-router-dom";
import "./WestBengal.css";

const foods = [
  {
    name: "Machher Jhol",
    description:
      "A light Bengali fish curry, traditionally prepared with fish, potatoes and delicate spices.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bengali%20Westbengal%20Fish%20Curry.JPG",
  },
  {
    name: "Shorshe Ilish",
    description:
      "Hilsa fish cooked with mustard, one of Bengal's most iconic flavours.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sorse%20posto%20ilish%20mach-MB05.jpg",
  },
  {
    name: "Kosha Mangsho",
    description:
      "Slow-cooked Bengali mutton curry with deep spices and a rich, dark gravy.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/A%20traditional%20Bengali%20lunch.jpg",
  },
  {
    name: "Mishti Doi",
    description:
      "Sweetened fermented yoghurt, traditionally served chilled in an earthen pot.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mishti%20Doi.jpg",
  },
];

function WestBengal() {
  return (
    <div className="west-bengal-page">

      {/* =========================================
          NAVBAR
      ========================================= */}

      <header className="wb-navbar">

        <Link to="/culture" className="wb-logo">
          <span className="wb-logo-symbol">☀</span>

          <div>
            <strong>Bharat</strong>
            <small>CULTURAL HERITAGE</small>
          </div>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/culture">Culture</Link>
          <Link to="/">Map</Link>
          <Link to="/">AI Guide</Link>
        </nav>

      </header>


      {/* =========================================
          FOOD HERO
      ========================================= */}

      <section className="wb-food-hero">

        <div className="wb-food-overlay"></div>

        <div className="wb-food-hero-content">

          <span className="wb-eyebrow">
            WEST BENGAL — 01
          </span>

          <h1>
            Flavours of
            <br />
            <i>Bengal.</i>
          </h1>

          <p>
            From mustard-rich fish curries to delicate sweets,
            Bengali cuisine is deeply connected to the rivers,
            seasons and traditions of the region.
          </p>

        </div>

      </section>


      {/* =========================================
          FOOD INTRO
      ========================================= */}

      <section className="wb-food-section">

        <div className="wb-section-heading">

          <div>
            <span className="wb-section-label">
              TRADITIONAL CUISINE
            </span>

            <h2>
              Taste the
              <br />
              <i>region.</i>
            </h2>
          </div>

          <p>
            Bengali food balances mustard, fish, rice,
            vegetables and sweets to create one of India's
            most distinctive culinary traditions.
          </p>

        </div>


        {/* FOOD CARDS */}

        <div className="wb-food-grid">

          {foods.map((food, index) => (
  <Link
    to={
      food.name === "Machher Jhol"
        ? "/culture/west-bengal/macher-jhol"
        : "#"
    }
    className="wb-food-card"
    key={food.name}
  >
    <div
      className="wb-food-image"
      style={{
        backgroundImage: `
          linear-gradient(
            to top,
            rgba(20, 12, 8, 0.88),
            rgba(20, 12, 8, 0.05)
          ),
          url("${food.image}")
        `,
      }}
    >
      <span className="wb-food-number">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="wb-food-info">
        <h3>{food.name}</h3>

        <p>{food.description}</p>
      </div>
    </div>
  </Link>
))}
        </div>

      </section>


      {/* =========================================
          CLOTHING SECTION
      ========================================= */}

<section className="wb-clothing-section">
  <div className="wb-section-heading">
    <div>
      <span className="wb-section-label">TRADITIONAL CLOTHING</span>

      <h2>
        Dressed in
        <br />
        <i>heritage.</i>
      </h2>
    </div>

    <p>
      Bengali clothing reflects elegance, tradition and
      craftsmanship. From the iconic Bengali saree to
      traditional men's attire, each style carries a story
      of the region.
    </p>
  </div>

  <div className="wb-clothing-grid">

    {/* BENGALI SAREE */}
    <article className="wb-clothing-card">
      <div
        className="wb-clothing-image"
        style={{
          backgroundImage: `
            linear-gradient(
              to top,
              rgba(20, 12, 8, 0.9),
              rgba(20, 12, 8, 0.08)
            ),
         url("https://commons.wikimedia.org/wiki/Special:FilePath/Baluchori%20saree%20DSC%200093.jpg")
          `,
        }}
      >
        <span className="wb-clothing-number">01</span>

        <div className="wb-clothing-info">
          <h3>Bengali Saree</h3>
          <p>
            Traditional saree draping known for its graceful
            pleats and distinctive Bengali style.
          </p>
        </div>
      </div>
    </article>

    {/* DHOTI & PANJABI */}
    <article className="wb-clothing-card">
      <div
        className="wb-clothing-image"
        style={{
          backgroundImage: `
            linear-gradient(
              to top,
              rgba(20, 12, 8, 0.9),
              rgba(20, 12, 8, 0.08)
            ),
           url("https://commons.wikimedia.org/wiki/Special:FilePath/Dhoti%20clothing.jpg")
          `,
        }}
      >
        <span className="wb-clothing-number">02</span>

        <div className="wb-clothing-info">
          <h3>Dhoti & Panjabi</h3>
          <p>
            Traditional Bengali men's attire worn during
            ceremonies, festivals and celebrations.
          </p>
        </div>
      </div>
    </article>

    {/* JEWELLERY */}
    <article className="wb-clothing-card">
      <div
        className="wb-clothing-image"
        style={{
          backgroundImage: `
            linear-gradient(
              to top,
              rgba(20, 12, 8, 0.9),
              rgba(20, 12, 8, 0.08)
            ),
           url("https://commons.wikimedia.org/wiki/Special:FilePath/Pola%20%28bangles%29.jpg")
          `,
        }}
      >
        <span className="wb-clothing-number">03</span>

        <div className="wb-clothing-info">
         <h3>Pola Bangles</h3>
<p>
  Traditional red bangles worn as an important part of
  Bengali bridal and festive dressing.
</p>
        </div>
      </div>
    </article>

  </div>
</section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="wb-footer">

        <span>
          BHARAT — WEST BENGAL
        </span>

        <Link to="/culture">
          ← BACK TO STATES
        </Link>

      </footer>

    </div>
  );
}

export default WestBengal;