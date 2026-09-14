import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Festivals.css";

const festivals = [
  {
    number: "01",
    name: "Diwali",
    subtitle: "Uttar Pradesh · Varanasi · Festival of Lights",
    slug: "diwali",
    image:
      "https://images.unsplash.com/photo-1594925960019-801b0cd8a3d4?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "02",
    name: "Holi",
    subtitle: "Uttar Pradesh · Barsana · Festival of Colours",
    slug: "holi",
    image:
      "https://images.unsplash.com/photo-1610313898425-a5c637a940db?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "03",
    name: "Durga Puja",
    subtitle: "West Bengal · Kolkata · Goddess Durga",
    slug: "durga-puja",
    image:
       "https://images.unsplash.com/photo-1760344654214-97e2ceda7c4e?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "04",
    name: "Gangaur",
    subtitle: "Rajasthan · Jaipur · Folk Traditions",
    slug: "gangaur",
    image:
      "https://images.unsplash.com/photo-1632292611299-980426b386a1?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    name: "Onam",
    subtitle: "Kerala · Pookalam · Snake Boat Races",
    slug: "onam",
    image:
      "https://images.unsplash.com/photo-1559036212-8a38f9f95793?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "06",
    name: "Bihu",
    subtitle: "Assam · Rongali Bihu · Bihu Dance",
    slug: "bihu",
    image:
     "https://images.unsplash.com/photo-1759738093180-aa603b03fc7d?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "07",
    name: "Pongal",
    subtitle: "Tamil Nadu · Harvest · Kolam",
    slug: "pongal",
    image:
         "https://images.pexels.com/photos/35763758/pexels-photo-35763758.jpeg?auto=compress&cs=tinysrgb&w=1200",
},

  {
    number: "08",
    name: "Navratri",
    subtitle: "Gujarat · Garba · Nine Nights",
    slug: "navratri",
    image:
       "https://images.unsplash.com/photo-1762541578802-418f78626473?auto=format&fit=crop&w=1200&q=85",
},

  {
    number: "09",
    name: "Ganesh Chaturthi",
    subtitle: "Maharashtra · Mumbai · Ganpati Celebration",
    slug: "ganesh-chaturthi",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?auto=format&fit=crop&w=1200&q=85",
  },
];

function Festivals() {

  /* =========================================
     PAGE OPENING TRANSITION
  ========================================= */

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const scrollToFestivals = () => {
    document.getElementById("festival-states")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`page-wrapper ${
        isVisible ? "page-visible" : "page-hidden"
      } festivals-page`}
    >

      {/* =========================================
          HERO
      ========================================= */}

      <section className="festival-hero">

        <div className="festival-hero-overlay"></div>

        {/* BACK TO HOME */}

        <Link to="/" className="festival-home-link">
          ← HOME
        </Link>

        <div className="festival-hero-content">

          <span className="festival-eyebrow">
            THE FESTIVALS OF INDIA
          </span>

          <h1>
            A year of
            <br />
            <i>celebration.</i>
          </h1>

          <p>
            From sacred rituals to joyful gatherings,
            India's festivals bring communities together
            through colour, devotion, music and tradition.
          </p>

          <button
            className="festival-scroll-button"
            onClick={scrollToFestivals}
          >
            <span>EXPLORE THE FESTIVALS</span>

            <span className="festival-arrow">
              ↓
            </span>
          </button>

        </div>

        <div className="festival-hero-bottom">

          <span>DEVOTION</span>
          <span>COLOUR</span>
          <span>COMMUNITY</span>

        </div>

      </section>


      {/* =========================================
          FESTIVAL SECTION
      ========================================= */}

      <section
        className="festival-states-section"
        id="festival-states"
      >

        {/* INTRO */}

        <div className="festival-intro">

          <div className="festival-heading">

            <span>
              EXPLORE BY FESTIVAL
            </span>

            <h2>
              Every celebration
              <br />
              tells a <i>story.</i>
            </h2>

            <p>
              India's festivals reflect its diverse
              traditions, beliefs and communities.
              Explore the celebrations that bring
              generations together.
            </p>

          </div>

          <div className="festival-scroll-indicator">

            <span>
              SELECT A FESTIVAL
            </span>

            <div className="festival-scroll-line"></div>

          </div>

        </div>


        {/* FESTIVAL CARDS */}

        <div className="festival-cards">

          {festivals.map((festival) => (

            <Link
              key={festival.slug}
              to={`/festivals/${festival.slug}`}
              className="festival-card"
            >

              <div
                className="festival-card-image"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      to bottom,
                      rgba(20, 12, 8, 0.05),
                      rgba(20, 12, 8, 0.95)
                    ),
                    url("${festival.image}")
                  `,
                }}
              ></div>

              <div className="festival-card-content">

                <div className="festival-card-top">

                  <span>
                    {festival.number}
                  </span>

                  <span>
                    FESTIVAL
                  </span>

                </div>

                <div className="festival-card-bottom">

                  <h3>
                    {festival.name}
                  </h3>

                  <p>
                    {festival.subtitle}
                  </p>

                  <span className="festival-card-link">

                    EXPLORE FESTIVAL

                    <span>
                      →
                    </span>

                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>


        {/* =========================================
            STATEMENT
        ========================================= */}

        <div className="festival-statement">

          <span>
            THE SPIRIT OF INDIA
          </span>

          <p>
            A festival is more than a celebration.

            <i>
              {" "}
              It brings people, stories and traditions together.
            </i>
          </p>

          <div className="festival-statement-line"></div>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <section className="festival-footer">

        <span>
          BHARAT
        </span>

        <h2>
          Celebrate
          <br />
          <i>together.</i>
        </h2>

        <p>
          Discover India's living festival traditions.
        </p>

      </section>

    </div>
  );
}

export default Festivals;