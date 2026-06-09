const STEPS = [
  { n: 1, h: "Morning", p: "Which accounts to see today, and why." },
  { n: 2, h: "Before a visit", p: "The last order, any open quote, the history." },
  { n: 3, h: "After a visit", p: "One call. Everything logged, follow-ups set." },
  { n: 4, h: "On quotes", p: "Which quotes went quiet and need a nudge." },
  { n: 5, h: "For the manager", p: "Which accounts and deals need attention." },
];

export function Workflow() {
  return (
    <section id="workflow">
      <div className="wrap">
        <div className="eyebrow reveal">Through the day</div>
        <h2 className="sec-h reveal">Otto runs the whole day.</h2>
        <div className="flow">
          {STEPS.map((s) => (
            <div className="flow-step reveal" key={s.n}>
              <div className="flow-num">{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
