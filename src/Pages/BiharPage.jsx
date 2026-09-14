import React from "react";
import HeritageGame from "./HeritageGame";
/**
 *   <Route path="/states/bihar" element={<BiharPage onBack={() => navigate('/map')} />} />
 */
const TONES = [
  ["#d9ae5c", "#8a5a2b"],
  ["#c9702f", "#6e3818"],
  ["#b8863f", "#4f3018"],
  ["#c1874a", "#5c3a1e"],
  ["#caa15a", "#5a3a1f"],
  ["#b06a35", "#3f2418"],
];

function toneFor(i) {
  return TONES[i % TONES.length];
}

// --- Generated glyphs -------------------------------------------------

function TempleGlyph() {
  return (
    <svg viewBox="0 0 100 100" width="46" height="46" fill="none">
      <path
        d="M50 8 L58 26 L50 22 L42 26 Z M50 22 L64 46 L50 40 L36 46 Z M50 40 L74 72 L50 62 L26 72 Z"
        fill="rgba(255,255,255,0.85)"
      />
      <rect x="20" y="72" width="60" height="6" fill="rgba(255,255,255,0.85)" />
      <circle cx="50" cy="10" r="2.5" fill="rgba(255,255,255,0.85)" />
    </svg>
  );
}

function CraftGlyph() {
  return (
    <svg viewBox="0 0 100 100" width="46" height="46" fill="none">
      {[20, 34, 48, 62, 76].map((y) => (
        <path
          key={y}
          d={`M14 ${y} Q50 ${y - 14} 86 ${y}`}
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="2.5"
          fill="none"
        />
      ))}
    </svg>
  );
}

function FestivalGlyph() {
  return (
    <svg viewBox="0 0 100 100" width="46" height="46" fill="none">
      <path
        d="M50 12 C56 26 60 32 50 40 C40 32 44 26 50 12 Z"
        fill="rgba(255,255,255,0.85)"
      />
      <path
        d="M28 52 C28 40 40 34 50 34 C60 34 72 40 72 52 C72 64 62 70 50 70 C38 70 28 64 28 52 Z"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="3"
        fill="none"
      />
      <rect x="24" y="70" width="52" height="5" rx="2" fill="rgba(255,255,255,0.85)" />
    </svg>
  );
}

const GLYPHS = { temple: TempleGlyph, craft: CraftGlyph, festival: FestivalGlyph };

function Tile({ item, index, kind, height = 160 }) {
  const [from, to] = toneFor(index);
  const Glyph = GLYPHS[kind];
  if (item.image) {
    return (
      <div
        className="bihar-tile"
        style={{ height, backgroundImage: `url(${item.image})` }}
      />
    );
  }
  return (
    <div
      className="bihar-tile bihar-tile-generated"
      style={{ height, background: `linear-gradient(155deg, ${from}, ${to})` }}
    >
      <Glyph />
    </div>
  );
}

function Portrait({ name, index }) {
  const [from, to] = toneFor(index);
  const initials = name
    .split(" ")
    .filter((w) => w[0] === w[0].toUpperCase())
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className="bihar-portrait"
      style={{ background: `linear-gradient(155deg, ${from}, ${to})` }}
    >
      <span className="bihar-portrait-initials bihar-serif">{initials}</span>
    </div>
  );
}

// --- Content ------------------------------------------------------------

const quickFacts = [
  { label: "Capital", value: "Patna" },
  { label: "Formed", value: "1912 (as a province)" },
  { label: "Official language", value: "Hindi, Urdu" },
  { label: "Major river", value: "Ganga" },
];

const stats = [
  { value: "38", label: "Districts" },
  { value: "2", label: "UNESCO Sites" },
  { value: "12+", label: "Heritage Sites" },
  { value: "15+", label: "Living Traditions" },
];

const heritageSites = [
  {
    n: "01",
    title: "Mahabodhi Temple",
    place: "Bodh Gaya",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/mahabodhi-temple-gaya-2-attr-hero?qlt=82&ts=1726740537013",
    tag: "UNESCO World Heritage",
    desc: "The site where the Buddha is believed to have attained enlightenment under the Bodhi tree, and one of the oldest brick temples still standing in eastern India.",
  },
  {
    n: "02",
    title: "Nalanda Mahavihara",
    place: "Nalanda",
    image: "https://lh3.googleusercontent.com/ci/AL18g_SnV_AVbP0QKNEQ3TupGe1uQjLBUbSk6DnvaHaEtLXtPzG_d1kO_xB2L7YRcdZWRVsPqAqIea0=s1200",
    tag: "UNESCO World Heritage",
    desc: "Ruins of one of the world's earliest residential universities, drawing scholars from across Asia between the 5th and 12th centuries.",
  },
  {
    n: "03",
    title: "Vikramshila",
    image: "https://iasgyan.sgp1.digitaloceanspaces.com/images/VIKRAMSHILA_UNIVERSITY.png",
    place: "Bhagalpur",
    tag: "Ancient seat of learning",
    desc: "Founded by the Pala emperor Dharmapala, this Buddhist monastic university once rivalled Nalanda in scholarship and scale.",
  },
  {
    n: "04",
    title: "Takht Sri Patna Sahib",
    place: "Patna",
    tag: "Sikh heritage",
    image: "https://takhatpatnasahib.in/en/assets/designer/themes/default/images/five-takhat-3.jpg",
    desc: "One of the five takhts of Sikhism, built to mark the birthplace of Guru Gobind Singh, the tenth Sikh guru.",
  },
  {
    n: "05",
    title: "Rajgir Hills",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/glass-bridge-rajgir-nalanda-bihar-2-attr-hero?qlt=82&ts=1751459210821",
    place: "Rajgir",
    tag: "Buddhist & Jain pilgrimage",
    desc: "Former capital of the Magadha empire, ringed by five hills sacred to both Buddhists and Jains.",
  },
  {
    n: "06",
    title: "Sher Shah Suri Tomb",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3SSCRy_lwF18UcNpTjWD9gKgMsgsRn7j6Um-FH-9kSTKb6sHGRw9kPbH&s=10",
    place: "Sasaram",
    tag: "Indo-Afghan architecture",
    desc: "A mausoleum set on an artificial lake, built in 1545, and considered a precursor to later Mughal tomb design.",
  },
];

const crafts = [
  {
    title: "Madhubani Painting",
    image: "https://dailydesignist.com/cdn/shop/products/Madhubanipainting5.jpg?v=1622729688",
    desc: "Folk art from the Mithila region, painted in bold natural pigments on freshly plastered walls and paper.",
  },
  {
    title: "Sikki Grass Craft",
    image: "https://i.pinimg.com/474x/71/5a/38/715a38dd30f60000afa22e0eeb66d875.jpg",
    desc: "Golden marsh grass woven by hand into baskets, boxes and figurines, carried almost entirely by women artisans.",
  },
  {
    title: "Sujini Embroidery",
    image: "https://images.news9live.com/wp-content/uploads/2026/04/Sujani-embroidery-Bihar.jpg?q=50&w=1280",
    desc: "Layered running-stitch textile work, once a domestic craft, now used to stitch narratives of rural life.",
  },
  {
    title: "Tikuli Art",
    image: "https://cdn.dollsofindia.com/images/p/madhubani-paintings/tikuli-painting-SH24_l.jpg",
    desc: "A lacquer-based art form, painted onto wood, glass and metal panels depicting mythological and rural scenes.",
  },
  {
    title: "Manjusha Art",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHM2EwS6Tpv6taJPyALP-qAsCU7VZ6k75Ch0cCx02UsM7Hn3DfzRJpzs&s=10",
    desc: "A narrative scroll-style painting native to Bhagalpur, recognisable by its distinctive snake and temple motifs.",
  },
  {
    title: "Patna Kalam Painting",
    image: "https://bpscexamprep.com/media/2024/05/Patna-Kalam-Painting-1024x649.webp",
    desc: "A miniature painting style that flourished in Patna from the 18th to 20th century, blending Mughal technique with everyday local scenes.",
  },
];

const festivals = [
  {
    title: "Chhath Puja",
    image: "https://akm-img-a-in.tosshub.com/aajtak/images/story/202411/6728e12791980-chhath-puja-3--2024-043447350-16x9.jpg?size=948:533",
    when: "October / November",
    desc: "A four-day festival of sun worship performed on the banks of rivers and ponds, among the region's most widely observed traditions.",
  },
  {
    title: "Sonepur Mela",
    image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1696834309_sonpur_mela_history_and_interesting_facts.jpg.webp",
    when: "November",
    desc: "Held on the banks of the Ganga and Gandak, one of Asia's largest cattle and folk fairs, running for centuries.",
  },
  {
    title: "Pitru Paksha Mela",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0MtU5zwsau9FRodPuFpmt38YKl6p_TzHkctVsfpI4UO5oTwKEtHexNI&s=10",
    when: "September",
    desc: "Pilgrims gather at Gaya to perform ancestral rites at the banks of the Falgu river during this fortnight of remembrance.",
  },
  {
    title: "Rajgir Mahotsav",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qOuKAaMkAtP7f3R8JAt93Zcp8CcdCfL-QxP7edOXYpgGQNdWZd8nK2Y&s=10",
    when: "October",
    desc: "A state-organised cultural festival at Rajgir featuring classical and folk performances against the backdrop of ancient hills.",
  },
  {
    title: "Bihula Bishahari Puja",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHudv_ejyS-nR9FalHHGitWsoXTy8mbAWHwDYm2z3qayFXfgDEzD-Keo&s=10",
    when: "August",
    desc: "A folk festival honouring the snake goddess Bishahari, tied closely to the region's Manjusha art tradition.",
  },
  {
    title: "Buddha Purnima",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS983FC5X2HKY5FlExgKLXKJuFZzaxn1LbSA6ACt0RVJVTQWZ60vufaRvQ&s=10",
    when: "April / May",
    desc: "Marking the Buddha's birth, enlightenment and death, celebrated with particular significance at the Mahabodhi Temple.",
  },
];

const figures = [
  {
    name: "Aryabhata",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XRhvp_cnDCn_3Whyz_plno01YKjWssLFZkWUDaXKv0JIUvVlzG0nLLk&s=10",
    role: "Mathematician & astronomer, 5th century",
    desc: "Laid early groundwork for the concept of zero and planetary motion, closely tied to Magadha's centres of learning.",
  },
  {
    name: "Chanakya",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_r_Sz-d_JgVPmOctw9GHUtL8T9satndp1y2qAJZ1iH2gzRDJZDOs_-pnx&s=10",
    role: "Strategist & political theorist, 4th century BCE",
    desc: "Closely tied to Magadha's Mauryan court and the founding of the empire from Pataliputra, modern Patna.",
  },
  {
    name: "Guru Gobind Singh",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8XSPw7WbbLYmCKKW4N_sIPT8k-R1xDicflUxs0CJyK6c-_t66HL6mXEV&s=10",
    role: "Tenth Sikh Guru, b. 1666",
    desc: "Born in Patna, later founder of the Khalsa; Takht Sri Patna Sahib marks his birthplace.",
  },
  {
    name: "Dr. Rajendra Prasad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkyLJpoz-91XWYYGw3T-cIlzfvzGAB-0C8Mmbj_C10hJPpVBb6S6UGgA&s=10",
    role: "First President of India",
    desc: "Born in Siwan district; a leading figure in the independence movement before taking office in 1950.",
  },
];

export default function BiharPage({ onBack }) {
  return (
    <div className="bihar-page">
      <style>{`
        .bihar-page {
          --bg: #14100c;
          --bg-raised: #1c1610;
          --line: rgba(245, 239, 230, 0.1);
          --text: #f5efe6;
          --text-muted: #a89a86;
          --gold: #d4a24e;
          --terracotta: #c9702f;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          line-height: 1.5;
        }
        .bihar-page * { box-sizing: border-box; }
        .bihar-serif { font-family: 'Georgia', 'Iowan Old Style', serif; }
        .bihar-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--gold);
          background: none;
          border: none;
          font-size: 13px;
          letter-spacing: 0.08em;
          cursor: pointer;
          padding: 0;
        }
        .bihar-hero {
          padding: 64px 8vw 56px;
          border-bottom: 1px solid var(--line);
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 48px;
        }
        .bihar-eyebrow {
          color: var(--gold);
          font-size: 13px;
          letter-spacing: 0.12em;
          margin: 28px 0 18px;
        }
        .bihar-heading {
          font-size: clamp(40px, 5.5vw, 72px);
          font-weight: 400;
          margin: 0;
          line-height: 1.05;
        }
        .bihar-heading em { font-style: italic; color: var(--gold); }
        .bihar-lede {
          max-width: 640px;
          color: var(--text-muted);
          font-size: 17px;
          margin: 24px 0 0;
          border-left: 2px solid var(--terracotta);
          padding-left: 16px;
        }
        .bihar-stats { display: flex; flex-wrap: wrap; gap: 40px; margin-top: 48px; }
        .bihar-stat-value { font-size: 30px; color: var(--gold); font-family: 'Georgia', serif; }
        .bihar-stat-label { font-size: 12px; color: var(--text-muted); letter-spacing: 0.08em; margin-top: 4px; }
        .bihar-facts {
          align-self: start;
          margin-top: 28px;
          background: var(--bg-raised);
          border: 1px solid var(--line);
          padding: 24px;
        }
        .bihar-facts-title { font-size: 12px; letter-spacing: 0.1em; color: var(--gold); margin-bottom: 16px; }
        .bihar-fact-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-top: 1px solid var(--line);
          font-size: 14px;
        }
        .bihar-fact-row:first-of-type { border-top: none; }
        .bihar-fact-label { color: var(--text-muted); }
        .bihar-section { padding: 56px 8vw; border-bottom: 1px solid var(--line); }
        .bihar-section-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 36px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .bihar-section-title { font-size: 28px; font-weight: 400; }
        .bihar-section-note { color: var(--text-muted); font-size: 14px; max-width: 360px; }

        .bihar-tile {
          width: 100%;
          background-size: cover;
          background-position: center;
        }
        .bihar-tile-generated {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bihar-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--line);
        }
        .bihar-card { background: var(--bg); }
        .bihar-card-body { padding: 24px 28px 28px; }
        .bihar-card-top {
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
          font-size: 12px;
          letter-spacing: 0.06em;
          margin-bottom: 14px;
        }
        .bihar-card-top span:first-child { color: var(--gold); }
        .bihar-card-title { font-size: 20px; margin: 0 0 6px; }
        .bihar-card-place { color: var(--terracotta); font-size: 13px; margin-bottom: 12px; }
        .bihar-card-desc { color: var(--text-muted); font-size: 14px; line-height: 1.6; }

        .bihar-row-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .bihar-row-card { border: 1px solid var(--line); }
        .bihar-row-body { padding: 18px 20px 22px; }
        .bihar-row-title { font-size: 18px; margin: 0 0 8px; }
        .bihar-row-when { color: var(--gold); font-size: 12px; letter-spacing: 0.06em; margin-bottom: 10px; }
        .bihar-row-desc { color: var(--text-muted); font-size: 14px; line-height: 1.6; }

        .bihar-figure-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
        .bihar-figure { display: flex; gap: 18px; }
        .bihar-portrait {
          flex: none;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bihar-portrait-initials { color: rgba(255,255,255,0.9); font-size: 20px; }
        .bihar-figure-name { font-size: 19px; margin: 0 0 4px; }
        .bihar-figure-role { color: var(--terracotta); font-size: 13px; margin-bottom: 8px; }
        .bihar-figure-desc { color: var(--text-muted); font-size: 14px; line-height: 1.6; }

        @media (max-width: 900px) { .bihar-hero { grid-template-columns: 1fr; } }
        @media (max-width: 760px) {
          .bihar-grid, .bihar-row-grid, .bihar-figure-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="bihar-hero">
        <div>
          <button className="bihar-back" onClick={onBack}>
            ← Back to Map
          </button>
          <div className="bihar-eyebrow">EASTERN INDIA</div>
          <h1 className="bihar-heading bihar-serif">
            Bihar <em>— land of the awakened</em>
          </h1>
          <p className="bihar-lede">
            Home to the seat of the Buddha's enlightenment and the ruins of
            the world's earliest universities, Bihar carries some of the
            subcontinent's oldest continuous traditions of learning, faith
            and craft.
          </p>
          <div className="bihar-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="bihar-stat-value bihar-serif">{s.value}</div>
                <div className="bihar-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bihar-facts">
          <div className="bihar-facts-title">QUICK FACTS</div>
          {quickFacts.map((f) => (
            <div className="bihar-fact-row" key={f.label}>
              <span className="bihar-fact-label">{f.label}</span>
              <span>{f.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bihar-section">
        <div className="bihar-section-head">
          <h2 className="bihar-section-title bihar-serif">Heritage Sites</h2>
          <p className="bihar-section-note">
            Temples, monasteries and monuments that have shaped Bihar's
            place in India's religious and intellectual history.
          </p>
        </div>
        <div className="bihar-grid">
          {heritageSites.map((site, i) => (
            <div className="bihar-card" key={site.title}>
              <Tile item={site} index={i} kind="temple" />
              <div className="bihar-card-body">
                <div className="bihar-card-top">
                  <span>{site.n}</span>
                  <span>{site.tag}</span>
                </div>
                <h3 className="bihar-card-title bihar-serif">{site.title}</h3>
                <div className="bihar-card-place">{site.place}</div>
                <p className="bihar-card-desc">{site.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bihar-section">
        <div className="bihar-section-head">
          <h2 className="bihar-section-title bihar-serif">Living Crafts</h2>
          <p className="bihar-section-note">
            Handwork passed down through generations, still practised in
            villages across the state.
          </p>
        </div>
        <div className="bihar-row-grid">
          {crafts.map((c, i) => (
            <div className="bihar-row-card" key={c.title}>
              <Tile item={c} index={i} kind="craft" height={130} />
              <div className="bihar-row-body">
                <h3 className="bihar-row-title bihar-serif">{c.title}</h3>
                <p className="bihar-row-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bihar-section" style={{ borderBottom: "none" }}>
        <div className="bihar-section-head">
          <h2 className="bihar-section-title bihar-serif">Festivals</h2>
          <p className="bihar-section-note">
            Seasonal observances that continue to draw pilgrims and
            communities from across the region.
          </p>
        </div>
        <div className="bihar-row-grid">
          {festivals.map((f, i) => (
            <div className="bihar-row-card" key={f.title}>
              <Tile item={f} index={i} kind="festival" height={130} />
              <div className="bihar-row-body">
                <h3 className="bihar-row-title bihar-serif">{f.title}</h3>
                <div className="bihar-row-when">{f.when}</div>
                <p className="bihar-row-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bihar-section" style={{ borderBottom: "none" }}>
        <div className="bihar-section-head">
          <h2 className="bihar-section-title bihar-serif">Notable Figures</h2>
          <p className="bihar-section-note">
            People whose work and lives are tied to this land, across two
            and a half thousand years.
          </p>
        </div>
        <div className="bihar-figure-grid">
          {figures.map((f, i) => (
            <div className="bihar-figure" key={f.name}>
              <Portrait name={f.name} index={i} />
              <div>
                <h3 className="bihar-figure-name bihar-serif">{f.name}</h3>
                <div className="bihar-figure-role">{f.role}</div>
                <p className="bihar-figure-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
         <HeritageGame />

    </div>
  );
}
