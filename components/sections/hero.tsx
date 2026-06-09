import { BookDemoButton } from "@/components/book-demo-button";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg">
        <img
          src="/ottoupdate-background.png"
          alt="Industrial field sales rep calling Otto from the truck at a plant site"
        />
      </div>
      <div className="hero-scan" />
      <div className="hero-content">
        <div className="wrap">
          <div className="hero-tag">
            <span className="dot" /> For industrial field sales teams
          </div>
          <h1 className="hero-h">
            <span className="l1">Your reps call Otto</span>
            <span className="l2">after every visit.</span>
          </h1>
          <p className="hero-sub">
            Otto is an AI sales coordinator reps talk to on the phone.{" "}
            <b>Your CRM stays current, quotes keep moving, and nothing slips after a visit.</b>
          </p>
          <div className="hero-cta">
            <BookDemoButton className="btn-primary">
              Book a demo <span className="arr">→</span>
            </BookDemoButton>
            <a href="#how" className="btn-ghost">
              <span className="pl">►</span> See how it works
            </a>
          </div>
        </div>
      </div>
      <div className="hero-float">
        <div className="pulse">
          <img src="/otto-logo.png" alt="Otto" />
        </div>
        <div>
          <div className="ht">On a call with Otto</div>
          <div className="hs">
            <span className="dot" /> Logging the visit, hands free
          </div>
        </div>
      </div>
    </header>
  );
}
