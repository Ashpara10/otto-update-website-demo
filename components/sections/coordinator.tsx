const OLD = [
  "Chasing reps for visit details",
  "Piecing updates together from messages",
  "Quotes moving slowly",
  "Missed commitments",
];
const NEW = [
  "Clean handoff after every visit",
  "Customer requests already captured",
  "Quotes moving faster",
  "Nothing falls through",
];

export function Coordinator() {
  return (
    <section id="coordinator" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="eyebrow reveal">For sales coordinators</div>
        <h2 className="sec-h reveal">
          Otto does not replace your coordinator. It gives them better information.
        </h2>
        <p className="sec-p reveal">
          Instead of chasing reps for what happened, coordinators get clean visit summaries, customer
          requests, pending follow-ups, and quote updates, ready to act on.
        </p>
        <div className="coord-card reveal">
          <div className="coord-col old">
            <h4>Today</h4>
            {OLD.map((c) => (
              <div className="ci" key={c}>
                <span className="cm">×</span> {c}
              </div>
            ))}
          </div>
          <div className="coord-col new">
            <h4>With Otto</h4>
            {NEW.map((c) => (
              <div className="ci" key={c}>
                <span className="cm">✓</span> {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
