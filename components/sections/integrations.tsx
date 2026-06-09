const CELLS = [
  "CRM", "ERP", "Email", "Calendar",
  "Phone & text", "CPQ / quoting", "Service systems", "Spreadsheets",
];

export function Integrations() {
  return (
    <section className="intg" id="integrations">
      <div className="wrap">
        <div className="eyebrow ctr reveal" style={{ justifyContent: "center" }}>
          Works with your tools
        </div>
        <h2 className="sec-h ctr reveal">It works with what you already use.</h2>
        <p className="sec-p ctr reveal">
          Nothing to switch. Otto reads from and writes to your existing tools.
        </p>
        <div className="intg-grid">
          {CELLS.map((c) => (
            <div className="intg-cell reveal" key={c}>
              <span className="idot" /> {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
