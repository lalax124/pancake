import React from "react";
import { Link } from "react-router-dom";
import "./ArtsCraft.css";

const craftStates = [
  {
    number: "01",
    name: "West Bengal",
    subtitle: "Terracotta · Kantha · Patachitra",
    slug: "west-bengal",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bankura%20Terracotta%20Horses.jpg",
  },

  {
    number: "02",
    name: "Rajasthan",
    subtitle: "Blue Pottery · Block Printing · Kathputli",
    slug: "rajasthan",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20pottery%20from%20Jaipur.jpg",
  },

  {
    number: "03",
    name: "Gujarat",
    subtitle: "Rogan Art · Bandhani · Kutch Embroidery",
    slug: "gujarat",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rogan%20Painting.jpg",
  },

  {
    number: "04",
    name: "Odisha",
    subtitle: "Pattachitra · Silver Filigree · Stone Carving",
    slug: "odisha",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra%20painting.jpg",
  },

  {
    number: "05",
    name: "Bihar",
    subtitle: "Madhubani · Sikki · Sujuni",
    slug: "bihar",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Madhubani%20painting%2C%20Bihar.jpg",
  },

  {
    number: "06",
    name: "Assam",
    subtitle: "Muga Silk · Bamboo · Cane Craft",
    slug: "assam",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/This_is_a_traditional_Assamese_Muga_silk_textile.jpg",
  },

  {
    number: "07",
    name: "Madhya Pradesh",
    subtitle: "Gond Art · Dhokra · Handloom",
    slug: "madhya-pradesh",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gond%20art.jpg",
  },

  {
    number: "08",
    name: "Tamil Nadu",
    subtitle: "Tanjore · Bronze · Traditional Weaving",
    slug: "tamil-nadu",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tanjore%20art.jpg",
  },

  {
    number: "09",
    name: "Kashmir",
    subtitle: "Papier-mâché · Pashmina · Wood Carving",
    slug: "kashmir",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Papier%20mache%20goods%2C%20Kashmir%20%288141417742%29.jpg",
  },
];


function ArtsCraft() {

  const scrollToStates = () => {

    document
      .getElementById("craft-states")
      ?.scrollIntoView({
        behavior: "smooth",
      });

  };


  return (

    <div className="arts-craft-page">


      {/* =========================================
          HERO
      ========================================= */}

      <section className="craft-hero">

        <div className="craft-hero-overlay"></div>

        {/* BACK TO HOME */}
        <Link to="/" className="craft-home-link">
          ← HOME
        </Link>

        <div className="craft-hero-content">

          <span className="craft-eyebrow">
            THE ART OF INDIA
          </span>

          <h1>
            Made by
            <br />
            <i>hand.</i>
          </h1>

          <p>
            From painted stories to woven traditions,
            India's arts and crafts carry the memory
            of generations.
          </p>

          <button
            className="craft-scroll-button"
            onClick={scrollToStates}
          >
            <span>EXPLORE THE CRAFT</span>
            <span className="craft-arrow">↓</span>
          </button>

        </div>

        <div className="craft-hero-bottom">

          <span>TRADITION</span>
          <span>MATERIAL</span>
          <span>MEMORY</span>

        </div>

      </section>


      {/* =========================================
          STATE SECTION
      ========================================= */}

      <section
        className="craft-states-section"
        id="craft-states"
      >

        {/* INTRO */}

        <div className="craft-intro">

          <div className="craft-heading">

            <span>
              EXPLORE BY STATE
            </span>

            <h2>
              Every place
              <br />
              has its <i>craft.</i>
            </h2>

            <p>
              India's artistic traditions are shaped by
              landscape, material and generations of
              makers. Choose a state to discover the
              crafts that live there.
            </p>

          </div>


          <div className="craft-scroll-indicator">

            <span>
              SELECT A STATE
            </span>

            <div className="craft-scroll-line"></div>

          </div>

        </div>


        {/* STATE CARDS */}

        <div className="craft-cards">

          {craftStates.map((state) => (

            <a
              key={state.slug}
              href={`/culture/arts-craft/${state.slug}`}
              className="craft-card"
            >

              <div
                className="craft-card-image"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      to bottom,
                      rgba(20, 12, 8, 0.05),
                      rgba(20, 12, 8, 0.95)
                    ),
                    url("${state.image}")
                  `,
                }}
              ></div>


              <div className="craft-card-content">

                {/* CARD TOP */}

                <div className="craft-card-top">

                  <span>
                    {state.number}
                  </span>

                  <span>
                    ARTS & CRAFT
                  </span>

                </div>


                {/* CARD BOTTOM */}

                <div className="craft-card-bottom">

                  <h3>
                    {state.name}
                  </h3>

                  <p>
                    {state.subtitle}
                  </p>

                  <span className="craft-card-link">

                    EXPLORE STATE

                    <span>
                      →
                    </span>

                  </span>

                </div>

              </div>

            </a>

          ))}

        </div>


        {/* =========================================
            STATEMENT
        ========================================= */}

        <div className="craft-statement">

          <span>
            THE MAKER'S HAND
          </span>

          <p>
            A craft is more than an object.

            <i>
              {" "}
              It carries a place, a memory and a way of life.
            </i>
          </p>

          <div className="craft-statement-line"></div>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <section className="craft-footer">

        <span>
          BHARAT
        </span>

        <h2>
          Stories

          <br />

          <i>
            made by hand.
          </i>
        </h2>

        <p>
          Discover India's living traditions.
        </p>

      </section>

    </div>
  );
}


export default ArtsCraft;