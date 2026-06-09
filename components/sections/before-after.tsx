const BEFORE = [
  "Notes stay in the rep's head",
  "CRM updated late, or not at all",
  "Coordinators chase for details",
  "Quotes go cold",
  "Follow-ups slip",
  "Managers work off gut feel",
];
const AFTER = [
  "Every visit becomes a clean update",
  "CRM stays current",
  "Coordinators get clean handoffs",
  "Quote risks are visible",
  "Follow-ups are set automatically",
  "Managers see account movement",
];

export function BeforeAfter() {
  return (
    <section id="beforeafter">
      <div className="wrap">
        <div className="eyebrow reveal">The difference</div>
        <h2 className="sec-h reveal">What changes when the visit gets captured.</h2>
        <div className="ba">
          <div className="ba-col before reveal">
            <h4>Before Otto</h4>
            {BEFORE.map((b) => (
              <div className="bl" key={b}>
                <span className="bd">×</span> {b}
              </div>
            ))}
          </div>
          <div className="ba-col after reveal">
            <h4>After Otto</h4>
            {AFTER.map((b) => (
              <div className="bl" key={b}>
                <span className="bd">✓</span> {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
