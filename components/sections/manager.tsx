const CHECK = (
  <svg viewBox="0 0 24 24">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

const VIS = [
  "Quotes and follow-ups that are overdue",
  "What reps promised customers",
  "Where competitors were mentioned",
  "Accounts that have gone quiet",
  "Service issues holding up orders",
  "Reps with too much, and gaps in coverage",
];

const ROWS = [
  { acc: "Apex Welding", meta: "Quote 14d silent", flag: "risk", label: "At risk" },
  { acc: "Linde Midwest", meta: "Reorder window slipping", flag: "warn", label: "Watch" },
  { acc: "Praxair South", meta: "Follow-up done, PO in", flag: "ok", label: "On track" },
  { acc: "Matheson Co.", meta: "Competitor quoted lower", flag: "risk", label: "Exposed" },
  { acc: "Airgas North", meta: "Service ticket open 9d", flag: "warn", label: "Blocked" },
];

export function Manager() {
  return (
    <section id="manager">
      <div className="wrap split">
        <div>
          <div className="eyebrow reveal">For managers</div>
          <h2 className="sec-h reveal">Managers see the field as it happens.</h2>
          <p className="sec-p reveal">
            Otto captures every visit and quote as it happens, so you can back your reps up on the
            accounts that need attention now, instead of finding out at Friday&apos;s pipeline review.
          </p>
          <div className="vis-list reveal">
            {VIS.map((v) => (
              <div className="v" key={v}>
                <span className="vc">{CHECK}</span> {v}
              </div>
            ))}
          </div>
        </div>
        <div className="reveal">
          <div className="dash">
            <div className="dash-bar">
              <span className="d d1" />
              <span className="d d2" />
              <span className="d d3" />
              <span className="dttl">Otto · what needs attention today</span>
            </div>
            <div className="dash-body">
              {ROWS.map((r) => (
                <div className="dash-row" key={r.acc}>
                  <span className="acc">{r.acc}</span>
                  <span className="meta">{r.meta}</span>
                  <span className={`flag ${r.flag}`}>{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
