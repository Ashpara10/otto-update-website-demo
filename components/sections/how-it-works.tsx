const CHECK = (
  <svg viewBox="0 0 24 24">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

export function HowItWorks() {
  return (
    <section id="how" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="eyebrow reveal">How it works</div>
        <h2 className="sec-h reveal">
          The rep talks. <span className="hl">Otto does the work.</span>
        </h2>
        <p className="sec-p reveal">
          The rep does what they are good at, the visit. Then they call Otto and say what happened.
          Otto handles the rest.
        </p>
        <div className="callgrid">
          <div className="callcol says reveal">
            <div className="ctitle">⏺ You say</div>
            <div className="says-line">&quot;Just left Apex Welding.&quot;</div>
            <div className="says-line">&quot;They need revised pricing by Friday.&quot;</div>
            <div className="says-line">&quot;They care more about delivery than discount.&quot;</div>
            <div className="says-line">&quot;Competitor quoted lower on the argon mix.&quot;</div>
            <div className="says-line">
              &quot;Follow up Tuesday, update the CRM, send my manager a summary.&quot;
            </div>
          </div>
          <div className="callcol does reveal">
            <div className="ctitle">✴ Otto then does this for you</div>
            <div className="does-item"><span className="dc">{CHECK}</span> CRM updated with the visit</div>
            <div className="does-item"><span className="dc">{CHECK}</span> Follow-up task set for Tuesday</div>
            <div className="does-item"><span className="dc">{CHECK}</span> Quote flagged, pricing due Friday</div>
            <div className="does-item"><span className="dc">{CHECK}</span> Competitor intel logged to the account</div>
            <div className="does-item"><span className="dc">{CHECK}</span> Manager summary sent</div>
            <div className="does-item"><span className="dc">{CHECK}</span> Account memory updated</div>
          </div>
        </div>
      </div>
    </section>
  );
}
