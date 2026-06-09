const KEEPS = [
  "Visits", "Calls", "Emails", "Quotes", "Orders", "ERP activity",
  "Service issues", "Competitor mentions", "Rep notes", "CRM history",
];
const TELLS = [
  "Pre-visit briefs", "Follow-up reminders", "Quote-risk alerts",
  "Reorder signals", "Manager summaries", "Next best action",
];

export function Brain() {
  return (
    <section className="brain" id="brain">
      <div className="wrap">
        <div className="eyebrow ctr reveal" style={{ justifyContent: "center" }}>
          What Otto knows
        </div>
        <h2 className="sec-h ctr reveal">Otto knows each account.</h2>
        <p className="sec-p ctr reveal">
          A CRM can only hold what someone has time to type in. Otto keeps track of what actually
          happens across the account, and hands the rep the next step.
        </p>
        <div className="brain-cols">
          <div className="brain-box in reveal">
            <h4>Otto keeps track of</h4>
            {KEEPS.map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
          <div className="brain-core reveal">
            <img src="/otto-logo.png" alt="Otto" />
          </div>
          <div className="brain-box out reveal">
            <h4>So it can tell you</h4>
            {TELLS.map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
        <p className="sec-p ctr reveal" style={{ marginTop: 48, color: "#d4d8d4" }}>
          A CRM shows last week. <span className="hl">Otto shows now.</span>
        </p>
      </div>
    </section>
  );
}
