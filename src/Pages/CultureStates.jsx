import { Link } from "react-router-dom";
import "./CultureStates.css";


const states = [
  {
    name: "Rajasthan",
    subtitle: "Royal Traditions",
    color: "rajasthan",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hawa%20Mahal%2C%20Rajasthan.jpg",
  },

  {
    name: "Gujarat",
    subtitle: "Colour & Craft",
    color: "gujarat",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rann%20of%20Kutch.jpg",
  },

  {
    name: "Maharashtra",
    subtitle: "Regional Heritage",
    color: "maharashtra",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gateway%20of%20India%2C%20Mumbai%2C%20India.jpg",
  },

  {
    name: "Karnataka",
    subtitle: "Southern Traditions",
    color: "karnataka",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hampi%2C%20Karnataka%2C%20India.jpg",
  },

  {
    name: "Kerala",
    subtitle: "Coastal Heritage",
    color: "kerala",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kerala%20houseboats.jpg",
  },

  {
    name: "Tamil Nadu",
    subtitle: "Ancient Traditions",
    color: "tamilnadu",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bharatanatyam%20is%20a%20major%20form%20of%20Indian%20classical%20dance%20that%20originated%20in%20the%20state%20of%20Tamil%20Nadu.jpg",
  },

  {
    name: "Odisha",
    subtitle: "Temple Culture",
    color: "odisha",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Konark%20Sun%20temple.jpg",
  },

  {
    name: "Assam",
    subtitle: "Northeastern Heritage",
    color: "assam",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tea%20garden%20in%20Assam.jpg",
  },

  {
    name: "Himachal Pradesh",
    subtitle: "Mountain Traditions",
    color: "himachal",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20Himachali%20attire.jpg",
  },

  {
    name: "Punjab",
    subtitle: "Rich Traditions",
    color: "punjab",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Golden%20temple%20Punjab%20India.jpg",
  },

  {
    name: "West Bengal",
    subtitle: "Bengali Heritage",
    color: "westbengal",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Durga%20Puja%20in%20West%20Bengal.jpg",
  },
];


function CultureStates() {
  return (
    <div className="culture-states-page">


      {/* NAVBAR */}

      <header className="culture-navbar">

        <Link
          to="/"
          className="culture-logo"
        >

          <span className="logo-symbol">
            ☀
          </span>

          <div>

            <strong>
              Bharat
            </strong>

            <small>
              CULTURAL HERITAGE
            </small>

          </div>

        </Link>


        <nav>

          <Link to="/">
            Home
          </Link>

          <Link to="/">
            Heritage
          </Link>

          <Link to="/">
            Map
          </Link>

          <Link to="/">
            AI Guide
          </Link>

        </nav>

      </header>



      {/* HERO */}

      <section className="culture-hero">

        <div className="culture-hero-number">
          01
        </div>


        <div className="culture-hero-content">

          <span className="culture-eyebrow">
            FOOD & CLOTHING
          </span>


          <h1>
            Living
            <br />
            <i>
              Culture.
            </i>
          </h1>


          <p>
            From the flavours on our plates to the
            clothes we wear, every region of India
            carries a distinct cultural identity.
          </p>

        </div>

      </section>



      {/* STATE SELECTION */}

      <section className="culture-selection">

        <div className="culture-heading">

          <div>

            <span className="section-label">
              EXPLORE BY STATE
            </span>


            <h2>
              Choose your
              <br />
              <i>
                region.
              </i>
            </h2>

          </div>


          <p>
            Select a state to explore its traditional
            cuisine and clothing together — two
            expressions of India's living heritage.
          </p>

        </div>



        {/* STATE CARDS */}

        <div className="states-grid">

          {states.map((state, index) => (

            <Link
              key={state.name}
              to={`/culture/${state.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className={`state-card ${state.color}`}

              style={{
                backgroundImage: `
                  linear-gradient(
                    to top,
                    rgba(20, 12, 8, 0.95),
                    rgba(20, 12, 8, 0.20) 70%
                  ),
                  url("${state.image}")
                `,
              }}
            >

              <span className="state-number">
                {String(index + 1).padStart(2, "0")}
              </span>


              <div className="state-card-content">

                <span className="state-subtitle">
                  {state.subtitle}
                </span>


                <h3>
                  {state.name}
                </h3>


                <span className="state-explore">

                  EXPLORE

                  <span>
                    ↗
                  </span>

                </span>

              </div>

            </Link>

          ))}

        </div>

      </section>



      {/* FOOTER */}

      <footer className="culture-footer">

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


export default CultureStates;