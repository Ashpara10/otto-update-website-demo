const CELLS = [
  {
    svg: <svg viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" /></svg>,
    label: "Secure data handling",
  },
  {
    svg: <svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>,
    label: "Role-based access",
  },
  {
    svg: <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10" /></svg>,
    label: "CRM & ERP integration",
  },
  {
    svg: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
    label: "Email & calendar context",
  },
  {
    svg: <svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6" /></svg>,
    label: "Human-approved actions",
  },
  {
    svg: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><path d="M8 9h8M8 13h5" /></svg>,
    label: "Audit-ready history",
  },
];

export function Trust() {
  return (
    <section id="trust" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="eyebrow ctr reveal" style={{ justifyContent: "center" }}>
          Security
        </div>
        <h2 className="sec-h ctr reveal">How Otto handles your data.</h2>
        <p className="sec-p ctr reveal">
          Otto works with customer and account data, so here is how it is kept and controlled.
        </p>
        <div className="trust-grid">
          {CELLS.map((c) => (
            <div className="trust-cell reveal" key={c.label}>
              <span className="tc">{c.svg}</span> {c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
