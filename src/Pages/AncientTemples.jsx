import { Link } from "react-router-dom";
import "./AncientTemples.css";

const temples = [
  {
    number: "01",
    name: "Brihadeeswarar Temple",
    location: "Thanjavur, Tamil Nadu",
    period: "11th Century",
    description:
      "A magnificent Chola-era temple celebrated for its monumental architecture, intricate sculptures and towering vimana.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Brihadeeswarar%20Temple%20Tanjore.jpg",
  },

  {
    number: "02",
    name: "Konark Sun Temple",
    location: "Konark, Odisha",
    period: "13th Century",
    description:
      "A remarkable temple designed as a colossal stone chariot dedicated to Surya, the Sun God.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Konark%20Sun%20Temple.jpg",
  },

  {
    number: "03",
    name: "Khajuraho Temples",
    location: "Khajuraho, Madhya Pradesh",
    period: "10th–11th Century",
    description:
      "A celebrated group of temples known for their elaborate stone carvings, sculptures and extraordinary craftsmanship.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Khajuraho%20Temple%2C%20Khajuraho.jpg",
  },

  {
    number: "04",
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    period: "Historic Temple Complex",
    description:
      "A spectacular temple complex renowned for its colourful gopurams, sculpture-filled halls and living traditions.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Meenakshi%20Temple%2C%20Madurai%2C%20Tamil%20Nadu%2C%20India%2004.JPG",
  },
];

function AncientTemples() {
  return (
    <div className="temples-page">

      {/* NAVBAR */}

      <header className="temples-navbar">

        <Link to="/" className="temples-logo">
          <span className="logo-symbol">☀</span>

          <div>
            <strong>Bharat</strong>
            <small>CULTURAL HERITAGE</small>
          </div>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/heritage">Heritage</Link>
          <Link to="/map">Map</Link>
          <Link to="/ai-guide">AI Guide</Link>
        </nav>

      </header>


      {/* HERO */}

      <section className="temples-hero">

        <div className="hero-number">
          01
        </div>

        <div className="temples-hero-overlay"></div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="hero-scroll-line"></div>
        </div>

        <div className="temples-hero-content">

          <Link to="/" className="back-link">
            ← BACK TO HERITAGE
          </Link>

          <span className="eyebrow">
            ARCHITECTURE & SACRED SPACES
          </span>

          <h1>
            Ancient
            <br />
            <i>Temples</i>
          </h1>

          <p>
            Stone, devotion and centuries of craftsmanship —
            discover some of India's most remarkable sacred
            architectural traditions.
          </p>

        </div>

      </section>


      {/* INTRO */}

      <section className="temples-intro">

        <div className="intro-slide">

          <div className="intro-heading">

            <span className="section-label">
              FOUR ICONIC SITES
            </span>

            <h2>
              Where stone
              <br />
              <i>remembers.</i>
            </h2>

          </div>


          <div className="intro-description">

            <span className="intro-arrow">
              ↗
            </span>

            <p>
              India's temples are more than monuments.
              They are living spaces where architecture,
              sculpture, ritual, art and community come
              together across generations.
            </p>

            <span className="intro-scroll-label">
              SCROLL TO DISCOVER
            </span>

          </div>

        </div>

      </section>


      {/* =========================================
          FOUR TEMPLE COLLAGE
      ========================================= */}

      <section className="temple-gallery">

        <div className="gallery-heading">

          <div>
            <span className="section-label">
              THE FOUR ICONS
            </span>

            <h2>
              Four temples.
              <br />
              <i>Four stories.</i>
            </h2>
          </div>

          <p>
            Explore four architectural landmarks that
            represent different chapters of India's
            sacred building traditions.
          </p>

        </div>


        <div className="temple-collage">

          {temples.map((temple) => (

            <article
              className={`temple-tile tile-${temple.number}`}
              key={temple.number}
            >

              <div
                className="tile-image"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      to top,
                      rgba(18, 10, 6, 0.94),
                      rgba(18, 10, 6, 0.12) 70%
                    ),
                    url("${temple.image}")
                  `,
                }}
              ></div>


              <div className="tile-number">
                {temple.number}
              </div>


              <div className="tile-content">

                <span className="tile-period">
                  {temple.period}
                </span>

                <h3>
                  {temple.name}
                </h3>

                <span className="tile-location">
                  {temple.location}
                </span>

                <p>
                  {temple.description}
                </p>

                <button type="button">
                  EXPLORE
                  <span>↗</span>
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* STATE-WISE */}

      <section className="state-preview">

        <span className="section-label">
          COMING NEXT
        </span>

        <h2>
          Explore temples
          <br />
          <i>by state.</i>
        </h2>

        <p>
          A complete state-wise archive of India's ancient
          temples, traditions and architectural heritage
          will be added here.
        </p>

        <button type="button">
          STATE-WISE ARCHIVE
          <span>→</span>
        </button>

      </section>


      {/* FOOTER */}

      <footer className="temples-footer">

        <span>
          BHARAT — CULTURAL HERITAGE
        </span>

        <Link to="/">
          RETURN HOME ↑
        </Link>

      </footer>

    </div>
  );
}

export default AncientTemples;