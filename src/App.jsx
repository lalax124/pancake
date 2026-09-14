import React, { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import AncientTemples from "./Pages/AncientTemples";
import CultureStates from "./Pages/CultureStates";
import WestBengal from "./Pages/WestBengal";
import MacherJhol from "./Pages/MacherJhol";
import ArtsCraft from "./Pages/ArtsCraft";
import Festivals from "./Pages/Festivals";
import IndiaMap from "./Pages/IndiaMap";
import AIGuide from "./Pages/AIGuide";
import About from "./Pages/About";

import "./App.css";


/* =========================================================
   HOME PAGE
========================================================= */

function Home() {

  return (

    <div className="website">


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div className="logo">

          <div className="logo-symbol">
            ☀
          </div>

          <div className="logo-text">

            <span>
              Bharat
            </span>

            <small>
              CULTURAL HERITAGE
            </small>

          </div>

        </div>


        <nav className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#heritage">
            Heritage
          </a>

          <Link to="/arts-crafts">
            Arts & Crafts
          </Link>

          <Link to="/festivals">
            Festivals
          </Link>

          <Link to="/culture">
            Food & Clothing
          </Link>

          <a href="#map">
            Map
          </a>

          <Link to="/ai-guide">AI Guide</Link>

          <Link to="/about">
            About
          </Link>

        </nav>


        <button className="menu-button">
          ☰
        </button>

      </header>



      {/* =====================================================
          HERO
      ===================================================== */}

      <main
        id="home"
        className="hero"
      >

        <div className="hero-overlay"></div>


        <div className="hero-content">

          <div className="tag">
            PRESERVING 5,000 YEARS OF LIVING HERITAGE
          </div>


          <h1>
            The Soul
            <br />
            of <span>Bharat</span>
          </h1>


          <h2>
            भारत की विविध संस्कृति और विरासत
          </h2>


          <p className="description">
            An open digital archive celebrating India's
            temples, classical arts, living crafts,
            festivals, and traditions —
            documented with scholarly rigour and made
            accessible to the world.
          </p>


          <div className="buttons">

            <button className="primary-button">
              EXPLORE HERITAGE
            </button>


            <button className="secondary-button">

              VIRTUAL TOURS

              <span>
                →
              </span>

            </button>

          </div>

        </div>



        {/* =================================================
            STATS
        ================================================= */}

        <div className="stats">

          <div className="stat">

            <strong>
              29
            </strong>

            <span>
              STATES COVERED
            </span>

          </div>


          <div className="stat">

            <strong>
              6,400+
            </strong>

            <span>
              HERITAGE ENTRIES
            </span>

          </div>


          <div className="stat">

            <strong>
              42
            </strong>

            <span>
              TRADITIONS
            </span>

          </div>


          <div className="stat">

            <strong>
              8
            </strong>

            <span>
              CULTURAL DOMAINS
            </span>

          </div>

        </div>


        <button className="floating-button">
          ✺
        </button>

      </main>



      {/* =====================================================
          HERITAGE SECTION
      ===================================================== */}

      <section
        id="heritage"
        className="heritage-section"
      >


        {/* =================================================
            HERITAGE INTRO
        ================================================= */}

        <div className="heritage-intro">

          <div className="section-heading">

            <span>
              DISCOVER INDIA
            </span>


            <h2>
              A civilization of
              <br />

              <i>
                living traditions
              </i>

            </h2>


            <p>
              Explore the stories, people, places and
              traditions that continue to shape India's
              cultural identity.
            </p>

          </div>


          <div className="scroll-indicator">

            <span>
              SCROLL TO EXPLORE
            </span>

            <div className="scroll-line"></div>

          </div>

        </div>



        {/* =================================================
            HERITAGE CARDS
        ================================================= */}

        <div className="heritage-cards">


          {/* TEMPLE */}

          <div className="heritage-card temple-card">

            <div className="card-image"></div>


            <div className="card-content">

              <div className="card-top">

                <span>
                  01
                </span>

                <span>
                  ARCHITECTURE
                </span>

              </div>


              <h3>
                Ancient Temples
              </h3>


              <p>
                Discover architectural marvels,
                sacred spaces and monuments that
                carry centuries of stories.
              </p>


              <Link
                to="/temples"
                className="card-explore"
              >

                EXPLORE HERITAGE

                <span>
                  ↗
                </span>

              </Link>

            </div>

          </div>



          {/* CRAFTS */}

          <div className="heritage-card craft-card">

            <div className="card-image"></div>


            <div className="card-content">

              <div className="card-top">

                <span>
                  02
                </span>

                <span>
                  CRAFTS
                </span>

              </div>


              <h3>
                Living Crafts
              </h3>


              <p>
                Meet the artisans preserving India's
                traditional crafts and passing their
                knowledge forward.
              </p>


              <a href="#crafts">

                EXPLORE CRAFTS

                <span>
                  ↗
                </span>

              </a>

            </div>

          </div>



          {/* ARTS */}

          <div className="heritage-card arts-card">

            <div className="card-image"></div>


            <div className="card-content">

              <div className="card-top">

                <span>
                  03
                </span>

                <span>
                  PERFORMING ARTS
                </span>

              </div>


              <h3>
                Classical Arts
              </h3>


              <p>
                Experience India's music, dance,
                theatre and artistic traditions
                shaped across generations.
              </p>


              <Link to="/arts-crafts">

                DISCOVER ARTS

                <span>
                  ↗
                </span>

              </Link>

            </div>

          </div>

        </div>



        {/* =================================================
            HERITAGE STATEMENT
        ================================================= */}

        <div className="heritage-statement">

          <span>
            01 — 03
          </span>


          <p>

            Heritage is not simply something we inherit.

            <br />

            <i>
              It is something we keep alive.
            </i>

          </p>


          <div className="statement-line"></div>

        </div>

      </section>



      {/* =====================================================
          INDIA MAP
      ===================================================== */}
      <section id="map">
        <IndiaMap />
      </section>

      {/* =====================================================
          FINAL FOOTER
          THIS IS A SEPARATE LAST SECTION
      ===================================================== */}

      <footer className="main-footer">


        {/* DECORATIVE TOP LINE */}

        <div className="footer-decoration">

          <span></span>

          <div></div>

          <span></span>

        </div>



        {/* =================================================
            FOOTER CONTENT
        ================================================= */}

        <div className="footer-top">


          {/* BRAND */}

          <div className="footer-brand">

            <span className="footer-eyebrow">
              BHARAT
            </span>


            <h2>
              Explore.
              <br />

              <i>
                Experience.
              </i>

            </h2>


            <p>
              Discover the stories, traditions and
              living culture that make India extraordinary.
            </p>

          </div>



          {/* EXPLORE */}

          <div className="footer-column">

            <span className="footer-title">
              EXPLORE
            </span>


            <Link to="/">
              Home
            </Link>


            <Link to="/temples">
              Heritage
            </Link>


            <Link to="/festivals">
              Festivals
            </Link>


            <Link to="/arts-crafts">
              Arts & Culture
            </Link>

          </div>



          {/* DISCOVER */}

          <div className="footer-column">

            <span className="footer-title">
              DISCOVER
            </span>


            <Link to="/temples">
              Architecture
            </Link>


            <Link to="/arts-crafts">
              Crafts
            </Link>


            <Link to="/culture">
              Traditions
            </Link>


            <Link to="/arts-crafts">
              Performing Arts
            </Link>

          </div>



          {/* CONNECT */}

          <div className="footer-column">

            <span className="footer-title">
              CONNECT
            </span>


            <a href="#contact">
              Contact
            </a>


            <Link to="/about">
              About Us
            </Link>


            <a href="#team">
              Our Team
            </a>


            <a href="#feedback">
              Feedback
            </a>

          </div>

        </div>



        {/* =================================================
            LARGE BHARAT WORDMARK
        ================================================= */}

        <div className="footer-wordmark">
          BHARAT
        </div>



        {/* =================================================
            FOOTER DIVIDER
        ================================================= */}

        <div className="footer-line"></div>



        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="footer-bottom">

          <div className="footer-bottom-left">

            <span>
              © 2026 BHARAT. ALL RIGHTS RESERVED.
            </span>

            <span>
              MADE WITH <i>LOVE</i> FOR INDIA.
            </span>

          </div>


          <button
            className="back-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >

            BACK TO TOP

            <span>
              ↑
            </span>

          </button>

        </div>

      </footer>

    </div>

  );
}



/* =========================================================
   PAGE TRANSITION
========================================================= */

function PageTransition({ children }) {

  const location = useLocation();

  const [visible, setVisible] = useState(false);


  useEffect(() => {

    setVisible(false);


    const timer = setTimeout(() => {

      setVisible(true);

    }, 50);


    return () => {

      clearTimeout(timer);

    };

  }, [location.pathname]);


  return (

    <div
      key={location.pathname}
      className={`page-wrapper ${
        visible
          ? "page-visible"
          : "page-hidden"
      }`}
    >

      {children}

    </div>

  );

}



/* =========================================================
   APP
========================================================= */

function App() {

  return (

    <BrowserRouter>

      <PageTransition>

        <Routes>


          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* TEMPLES */}

          <Route
            path="/temples"
            element={<AncientTemples />}
          />


          {/* CULTURE */}

          <Route
            path="/culture"
            element={<CultureStates />}
          />


          {/* WEST BENGAL */}

          <Route
            path="/culture/west-bengal"
            element={<WestBengal />}
          />


          {/* MACHER JHOL */}

          <Route
            path="/culture/west-bengal/macher-jhol"
            element={<MacherJhol />}
          />


          {/* ARTS & CRAFTS */}

          <Route
            path="/arts-crafts"
            element={<ArtsCraft />}
          />


          {/* FESTIVALS */}

          <Route
            path="/festivals"
            element={<Festivals />}
          />

        </Routes>
      </PageTransition>

    </BrowserRouter>

  );
}


export default App;
