const ARROW = (
  <svg viewBox="0 0 24 24">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function Positioning() {
  return (
    <section className="pos" id="positioning">
      <div className="wrap">
        <div className="eyebrow reveal">Where Otto fits</div>
        <h2 className="sec-h reveal">Not another CRM. Not another dashboard.</h2>
        <p className="sec-p reveal">
          You already have a CRM. The problem was never where the data goes. It is getting what
          happened in the field into the system before it disappears. Otto sits between the field and
          the tools you already run.
        </p>

        <div className="fit-map reveal">
          <div className="fit-node">
            <div className="fi">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>
            <div className="fl">The rep</div>
            <div className="fsub">In the field</div>
          </div>
          <div className="fit-arrow">{ARROW}</div>
          <div className="fit-node fit-otto">
            <div className="fi">
              <svg viewBox="0 0 24 24">
                <path d="M7 4h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4l-4 3v-3H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                <path d="M9 10h.01M12 10h.01M15 10h.01" />
              </svg>
            </div>
            <div className="fl">Otto</div>
            <div className="fsub">Captures &amp; structures the visit</div>
          </div>
          <div className="fit-arrow">{ARROW}</div>
          <div className="fit-node">
            <div className="fi">
              <svg viewBox="0 0 24 24">
                <ellipse cx="12" cy="6" rx="8" ry="3" />
                <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
              </svg>
            </div>
            <div className="fl">CRM &amp; ERP</div>
            <div className="fsub">Always current</div>
          </div>
        </div>

        <div className="pos-flow">
          <div className="pos-card reveal">
            <div className="pn">01</div>
            <div className="pic">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
              </svg>
            </div>
            <div className="pt">Captures the field</div>
            <div className="pp">The rep talks. Otto listens and gets every detail of the visit.</div>
          </div>
          <div className="pos-card reveal">
            <div className="pn">02</div>
            <div className="pic">
              <svg viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h10" />
              </svg>
            </div>
            <div className="pt">Structures the update</div>
            <div className="pp">Turns the conversation into clean notes, fields, and next steps.</div>
          </div>
          <div className="pos-card reveal">
            <div className="pn">03</div>
            <div className="pic">
              <svg viewBox="0 0 24 24">
                <rect x="4" y="5" width="16" height="16" rx="2" />
                <path d="M8 3v4M16 3v4M4 10h16M9 14l2 2 4-4" />
              </svg>
            </div>
            <div className="pt">Creates the follow-up</div>
            <div className="pp">Sets the tasks, reminders, and quote nudges automatically.</div>
          </div>
          <div className="pos-card reveal">
            <div className="pn">04</div>
            <div className="pic">
              <svg viewBox="0 0 24 24">
                <path d="M3 12h4l3-8 4 16 3-8h4" />
              </svg>
            </div>
            <div className="pt">Keeps the account moving</div>
            <div className="pp">Everyone knows what happened and what needs to happen next.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
