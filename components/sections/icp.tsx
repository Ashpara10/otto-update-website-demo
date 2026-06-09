const TAGS = [
  "Industrial equipment",
  "Manufacturing supplies",
  "Material handling",
  "Electrical & mechanical components",
  "Packaging & automation",
  "Building materials",
  "Industrial gases & chemicals",
  "Industrial services",
  "B2B distribution",
];

export function ICP() {
  return (
    <section id="icp" className="pos">
      <div className="wrap">
        <div className="eyebrow ctr reveal" style={{ justifyContent: "center" }}>
          Who it is for
        </div>
        <h2 className="sec-h ctr reveal">Built for field-heavy industrial sales.</h2>
        <p className="sec-p ctr reveal">
          If your reps spend the day in the field and your revenue depends on follow-up, Otto fits.
        </p>
        <div className="icp-grid">
          {TAGS.map((t) => (
            <span className="icp-tag reveal" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
