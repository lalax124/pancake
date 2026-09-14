import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import "./IndiaMap.css";

const GEO_URL = "/india-states.json";

function IndiaMap() {
  const [geoData, setGeoData] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    fetch(GEO_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load india-states.json");
        }
        return response.json();
      })
      .then((data) => {
        console.log("India GeoJSON loaded:", data);
        setGeoData(data);
      })
      .catch((error) => {
        console.error("GeoJSON error:", error);
      });
  }, []);

  const handleStateClick = (geo) => {
    const name = geo.properties?.NAME_1 || "Unknown State";

    setSelectedState({
      name: name,
      type: geo.properties?.ENGTYPE_1 || "State",
      code: geo.properties?.HASC_1 || "",
    });
  };

  return (
    <section className="india-section">

      {/* Heading */}
      <div className="india-heading">
        <div>
          <span className="section-label">DISCOVER INDIA</span>

          <h1>
            A civilization of
            <br />
            <em>living traditions</em>
          </h1>

          <p>
            Explore the people, places, crafts and traditions that
            continue to shape India's cultural identity.
          </p>
        </div>

        <div className="explore-number">
          <span>01</span>
          <small>
            SELECT A STATE
            <br />
            TO EXPLORE
          </small>
        </div>
      </div>

      {/* Main content */}
      <div className="india-content">

        {/* MAP */}
        <div className="map-wrapper">

          {!geoData && (
            <div className="map-loading">
              Loading India...
            </div>
          )}

          {geoData && (
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 1050,
                center: [82, 22],
              }}
              className="india-svg"
              width={900}
              height={650}
            >
              <Geographies geography={geoData}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateName =
                      geo.properties?.NAME_1 || "";

                    const isSelected =
                      selectedState?.name === stateName;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onClick={() => handleStateClick(geo)}
                        className={`india-state ${
                          isSelected ? "selected-state" : ""
                        }`}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          )}

          {/* Center instruction */}
          {!selectedState && geoData && (
            <div className="map-instruction">
              <span>EXPLORE</span>
              <h2>India</h2>
              <p>Click any state to discover →</p>
            </div>
          )}

        </div>

        {/* SIDE PANEL */}
        <aside className="state-panel">

          {selectedState ? (
            <>
              <button
                className="close-button"
                onClick={() => setSelectedState(null)}
              >
                ×
              </button>

              <span className="panel-label">
                HERITAGE REGION
              </span>

              <h2>{selectedState.name}</h2>

              <span className="country-name">
                INDIA
              </span>

              <div className="panel-line"></div>

              <h3>
                A living cultural
                <br />
                tradition
              </h3>

              <p>
                Explore the heritage, traditions and cultural
                stories of this region.
              </p>

              <span className="panel-label">
                CULTURAL HERITAGE
              </span>

              <button className="explore-button">
                EXPLORE {selectedState.name.toUpperCase()}
                <span>↗</span>
              </button>
            </>
          ) : (
            <>
              <span className="panel-label">
                HERITAGE REGION
              </span>

              <h2>India</h2>

              <span className="country-name">
                28 STATES
              </span>

              <div className="panel-line"></div>

              <h3>
                A civilization of
                <br />
                living traditions
              </h3>

              <p>
                Select a state on the map to explore its
                heritage, crafts, traditions and cultural identity.
              </p>
            </>
          )}

        </aside>

      </div>
    </section>
  );
}

export default IndiaMap;