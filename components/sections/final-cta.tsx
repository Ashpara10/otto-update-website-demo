import { BookDemoButton } from "@/components/book-demo-button";

export function FinalCTA() {
  return (
    <section className="final" id="book">
      <div className="wrap final-in">
        <h2 className="reveal">A coordinator for every rep.</h2>
        <p className="reveal">
          The rep finishes a visit and calls Otto. Otto updates the CRM, sets the follow-ups, and
          tracks the quote. The rep goes to the next visit. That is the loop, after every call.
        </p>
        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "center", gap: 18, flexWrap: "wrap", alignItems: "center" }}
        >
          <BookDemoButton className="btn-primary">
            Book a demo <span className="arr">→</span>
          </BookDemoButton>
        </div>
        <p className="micro2 reveal">15 minutes. We run it on a visit that looks like yours.</p>
      </div>
    </section>
  );
}
