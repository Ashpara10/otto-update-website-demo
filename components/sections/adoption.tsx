const CARDS = [
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    ),
    h: "It is a phone call",
    p: "No dashboard to open and no login. The rep dials a number.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M4 4h16v12H4z" />
        <path d="M2 20h20" />
      </svg>
    ),
    h: "Nothing typed later",
    p: "The visit is captured as the rep speaks, not from memory hours after.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
    h: "It happens in the car",
    p: "The rep calls between visits, while the details are still fresh.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M15 5l4 4M3 21l4-1L19 8l-4-4L3 16z" />
      </svg>
    ),
    h: "One each, not one shared",
    p: "Every rep gets their own, instead of waiting on a shared coordinator.",
  },
];

export function Adoption() {
  return (
    <section id="adoption" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="eyebrow reveal">Why reps use it</div>
        <h2 className="sec-h reveal">Reps already do this part out loud.</h2>
        <p className="sec-p reveal">
          After a visit, reps already talk it through, to a coordinator, a teammate, or themselves.
          Otto listens to that same debrief and turns it into the CRM update and follow-ups. The rep
          does not change what they do.
        </p>
        <div className="adopt-grid">
          {CARDS.map((c) => (
            <div className="adopt reveal" key={c.h}>
              <div className="ai">{c.svg}</div>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
