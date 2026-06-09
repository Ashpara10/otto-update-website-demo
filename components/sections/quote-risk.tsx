const CARDS = [
  { t: "A quote sent two weeks ago", s: "The buyer has not replied", stat: "Follow up" },
  { t: "The delivery date changed", s: "The customer was not told", stat: "Tell them" },
  { t: "A competitor was mentioned", s: "You have not responded yet", stat: "Respond" },
  { t: "A PO is stuck in approval", s: "It is past the close date", stat: "Chase it" },
  { t: "A reorder is overdue", s: "This account usually buys by now", stat: "Check in" },
  { t: "A service issue is open", s: "It is holding up the next order", stat: "Resolve" },
];

export function QuoteRisk() {
  return (
    <section className="leak" id="leak">
      <div className="wrap">
        <div className="eyebrow ctr reveal" style={{ justifyContent: "center" }}>
          Quotes that slip
        </div>
        <h2 className="sec-h ctr reveal">Quotes are not lost. They are forgotten.</h2>
        <p className="sec-p ctr reveal">
          A quote rarely gets a no. It just goes quiet, and with a full route to cover, it is easy to
          miss. Otto watches for the cases below and flags them.
        </p>
        <div className="quote-grid">
          {CARDS.map((c) => (
            <div className="qcard reveal" key={c.t}>
              <div className="qbar" />
              <div>
                <div className="qt">{c.t}</div>
                <div className="qs">{c.s}</div>
              </div>
              <div className="qstat">{c.stat}</div>
            </div>
          ))}
        </div>
        <p className="leak-foot reveal">
          Otto flags each one <span className="hl">in time to act.</span>
        </p>
      </div>
    </section>
  );
}
