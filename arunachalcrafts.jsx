import { useEffect, useState } from "react";
import "./ArunachalCrafts.css";
import {
  heroContent,
  identityStats,
  identityCopy,
  crafts,
  regionalMap,
  materials,
  giTags,
  galleryImages,
} from "./arunachalCraftsData";

export default function ArunachalCrafts() {
  const [selectedCraftId, setSelectedCraftId] = useState(crafts[0].id);
  const [openDistrict, setOpenDistrict] = useState(regionalMap[0].district);
  const [openMaterial, setOpenMaterial] = useState(null);
  const [openGiId, setOpenGiId] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const selectedCraft = crafts.find((c) => c.id === selectedCraftId) || crafts[0];

  const scrollToDetail = (id) => {
    setSelectedCraftId(id);
    const el = document.getElementById("ac-craft-detail");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="ac-page">
      {/* Breadcrumb — wire this up to your router */}
      <div className="ac-crumb">
        <a href="/heritage">&larr; BACK TO HERITAGE</a>
      </div>

      {/* 1. Hero */}
      <section className="ac-hero">
        <div className="ac-hero-media">
          <img src={heroContent.heroImage} alt="Artisan at work in Arunachal Pradesh" />
        </div>
        <div className="ac-hero-bignum">{heroContent.bigNumber}</div>
        <div className="ac-hero-content">
          <span className="ac-eyebrow">{heroContent.eyebrow}</span>
          <h1 className="ac-hero-title ac-serif">
            {heroContent.titleLine1}
            <br />
            <em>{heroContent.titleLine2}</em>
          </h1>
          <p className="ac-hero-subtitle">{heroContent.subtitle}</p>
          <button
            className="ac-btn ac-btn-solid"
            onClick={() => document.getElementById("ac-craft-grid").scrollIntoView({ behavior: "smooth" })}
          >
            {heroContent.cta} ↓
          </button>
        </div>
      </section>

      {/* 2. Artistic identity */}
      <section className="ac-section">
        <div className="ac-wrap ac-identity-grid">
          <div>
            <span className="ac-eyebrow">{identityCopy.eyebrow}</span>
            <h2 className="ac-identity-title ac-serif">
              {identityCopy.title1}
              <br />
              <em>{identityCopy.title2}</em>
            </h2>
            <p className="ac-identity-body">{identityCopy.body}</p>
          </div>
          <div className="ac-stats">
            {identityStats.map((s) => (
              <div className="ac-stat" key={s.label}>
                <div className="ac-stat-value ac-serif">{s.value}</div>
                <div className="ac-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Craft categories */}
      <section className="ac-section" id="ac-craft-grid">
        <div className="ac-wrap">
          <div className="ac-section-head">
            <span className="ac-eyebrow">THE MANY FORMS OF MAKING</span>
            <h2 className="ac-section-title ac-serif">
              One state.
              <br />
              <em>Many traditions.</em>
            </h2>
          </div>
          <div className="ac-craft-grid">
            {crafts.map((craft) => (
              <button
                key={craft.id}
                className={"ac-craft-tile" + (craft.id === selectedCraftId ? " is-active" : "")}
                onClick={() => scrollToDetail(craft.id)}
              >
                <div className="ac-craft-tile-img">
                  <img src={craft.tile} alt={craft.name} />
                </div>
                <div className="ac-craft-tile-body">
                  <div className="ac-craft-tile-number ac-serif">{craft.number}</div>
                  <div className="ac-craft-tile-name ac-serif">{craft.name}</div>
                  <div className="ac-craft-tile-loc">{craft.location}</div>
                  <div className="ac-craft-tile-cta">EXPLORE →</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Individual craft detail */}
      <section className="ac-section" id="ac-craft-detail">
        <div className="ac-wrap">
          <div className="ac-detail-top">
            <div>
              <div className="ac-detail-eyebrow">
                <span className="ac-eyebrow">{selectedCraft.number} · {selectedCraft.tribe}</span>
              </div>
              <h2 className="ac-detail-title ac-serif">{selectedCraft.name}</h2>
              <div className="ac-detail-eyebrow-loc">{selectedCraft.location}</div>
              <p className="ac-detail-desc" style={{ marginTop: 20 }}>{selectedCraft.description}</p>

              <div className="ac-info-grid">
                <div>
                  <div className="ac-info-label">ORIGIN</div>
                  <div className="ac-info-value">{selectedCraft.info.origin}</div>
                </div>
                <div>
                  <div className="ac-info-label">MATERIAL</div>
                  <div className="ac-info-value">{selectedCraft.info.material}</div>
                </div>
                <div>
                  <div className="ac-info-label">TRADITION</div>
                  <div className="ac-info-value">{selectedCraft.info.tradition}</div>
                </div>
                <div>
                  <div className="ac-info-label">REGION</div>
                  <div className="ac-info-value">{selectedCraft.info.region}</div>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <div className="ac-info-label">KNOWN FOR</div>
                  <div className="ac-info-value">{selectedCraft.info.knownFor}</div>
                </div>
              </div>
            </div>
            <div className="ac-detail-media">
              <img src={selectedCraft.tile} alt={selectedCraft.name} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. How it is made */}
      <section className="ac-section">
        <div className="ac-wrap">
          <div className="ac-section-head">
            <span className="ac-eyebrow">HOW IT IS MADE</span>
            <h2 className="ac-section-title ac-serif">
              From raw material
              <br />
              <em>to finished craft.</em>
            </h2>
          </div>
          <div className="ac-timeline">
            {selectedCraft.process.map((step, i) => (
              <div className="ac-timeline-step" key={step.title}>
                <div className="ac-timeline-num ac-serif">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="ac-timeline-title">{step.title}</h3>
                  <p className="ac-timeline-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Meet the artisan */}
      <section className="ac-section">
        <div className="ac-wrap">
          <div className="ac-section-head">
            <span className="ac-eyebrow">THE HANDS BEHIND THE ART</span>
            <h2 className="ac-section-title ac-serif">
              Meet the people
              <br />
              <em>who keep it alive.</em>
            </h2>
          </div>
          <div className="ac-artisan">
            <div className="ac-artisan-photo">
              <img src={selectedCraft.tile} alt={selectedCraft.artisan.name} />
            </div>
            <div>
              <div className="ac-artisan-role">{selectedCraft.artisan.role}</div>
              <h3 className="ac-artisan-name ac-serif">{selectedCraft.artisan.name}</h3>
              <div className="ac-artisan-loc">{selectedCraft.location}</div>
              <blockquote className="ac-artisan-quote">&ldquo;{selectedCraft.artisan.quote}&rdquo;</blockquote>
              <div className="ac-artisan-years">{selectedCraft.artisan.years}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Regional craft map */}
      <section className="ac-section">
        <div className="ac-wrap">
          <div className="ac-section-head">
            <span className="ac-eyebrow">WHERE THE CRAFT LIVES</span>
            <h2 className="ac-section-title ac-serif">
              A craft map of
              <br />
              <em>Arunachal Pradesh.</em>
            </h2>
          </div>
          <div className="ac-map-layout">
            <div className="ac-district-list">
              {regionalMap.map((d) => (
                <div key={d.district}>
                  <button
                    className={"ac-district-row" + (openDistrict === d.district ? " is-active" : "")}
                    onClick={() => setOpenDistrict(openDistrict === d.district ? null : d.district)}
                  >
                    <span className="ac-district-name ac-serif">{d.district}</span>
                    <span className="ac-district-count">{d.crafts.length} craft{d.crafts.length > 1 ? "s" : ""}</span>
                  </button>
                  {openDistrict === d.district && (
                    <div className="ac-district-crafts">
                      {d.crafts.map((c) => (
                        <div className="ac-district-craft-item" key={c}>
                          <span className="ac-district-craft-dot" />
                          {c}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="ac-detail-media" style={{ aspectRatio: "4/5" }}>
              <img src="https://picsum.photos/seed/arunachal-map/900/1100" alt="Map of craft-producing districts of Arunachal Pradesh" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Materials of the land */}
      <section className="ac-section">
        <div className="ac-wrap">
          <div className="ac-section-head">
            <span className="ac-eyebrow">FROM EARTH TO ART</span>
            <h2 className="ac-section-title ac-serif">
              The materials
              <br />
              <em>that shape the craft.</em>
            </h2>
          </div>
          <div className="ac-materials-list">
            {materials.map((m) => (
              <div className="ac-material-row" key={m.id}>
                <button
                  className="ac-material-btn"
                  onClick={() => setOpenMaterial(openMaterial === m.id ? null : m.id)}
                >
                  <span className="ac-material-name ac-serif">{m.name}</span>
                  <span className="ac-material-toggle">{openMaterial === m.id ? "–" : "+"}</span>
                </button>
                {openMaterial === m.id && (
                  <div className="ac-material-panel">
                    <div className="ac-material-panel-item">
                      <h4>Where it comes from</h4>
                      <p>{m.origin}</p>
                    </div>
                    <div className="ac-material-panel-item">
                      <h4>Why it's used</h4>
                      <p>{m.why}</p>
                    </div>
                    <div className="ac-material-panel-item">
                      <h4>How it's processed</h4>
                      <p>{m.how}</p>
                    </div>
                    <div className="ac-material-panel-item">
                      <h4>Cultural significance</h4>
                      <p>{m.significance}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GI tags */}
      <section className="ac-section">
        <div className="ac-wrap">
          <div className="ac-section-head">
            <span className="ac-eyebrow">PROTECTED BY HERITAGE</span>
            <h2 className="ac-section-title ac-serif">
              Geographical
              <br />
              <em>Indications.</em>
            </h2>
          </div>
          <div className="ac-gi-grid">
            {giTags.map((gi) => (
              <div
                key={gi.id}
                className={"ac-gi-card" + (openGiId === gi.id ? " is-open" : "")}
                onClick={() => setOpenGiId(openGiId === gi.id ? null : gi.id)}
              >
                <span className="ac-gi-badge">GI TAG</span>
                <h3 className="ac-gi-name ac-serif">{gi.name}</h3>
                <div className="ac-gi-origin">{gi.origin}</div>
                {openGiId === gi.id && (
                  <div className="ac-gi-detail">
                    <div className="ac-gi-detail-row"><span>Category</span><span>{gi.category}</span></div>
                    <div className="ac-gi-detail-row"><span>Year granted</span><span>{gi.year}</span></div>
                    <div className="ac-gi-detail-row"><span>Region</span><span>{gi.origin}</span></div>
                    <p className="ac-gi-distinct">{gi.distinctiveness}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Gallery */}
      <section className="ac-section">
        <div className="ac-wrap">
          <div className="ac-section-head">
            <span className="ac-eyebrow">A VISUAL ARCHIVE</span>
            <h2 className="ac-section-title ac-serif">
              Crafts through
              <br />
              <em>the lens.</em>
            </h2>
          </div>
          <div className="ac-gallery">
            {galleryImages.map((g, i) => (
              <div className="ac-gallery-item" key={i} onClick={() => setLightboxIndex(i)}>
                <img src={g.image} alt={g.craft} loading="lazy" />
                <div className="ac-gallery-caption">
                  <strong>{g.craft}</strong>
                  <span>{g.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="ac-lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="ac-lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close">
            ✕
          </button>
          <div className="ac-lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[lightboxIndex].image} alt={galleryImages[lightboxIndex].craft} />
            <div className="ac-lightbox-caption">
              {galleryImages[lightboxIndex].craft} — {galleryImages[lightboxIndex].location}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}