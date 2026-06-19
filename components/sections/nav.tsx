import { BookDemoButton } from "@/components/book-demo-button";

export function Nav() {
  return (
    <nav id="nav">
      <div className="nav-in">
        <a href="#" className="logo">
          <img src="/otto-logo.png" alt="Otto" /> Otto
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#leak">Quote risk</a>
          <a href="#manager">For managers</a>
          <a href="#icp">Who it&apos;s for</a>
          <BookDemoButton sourcePage="sections_nav" className="nav-cta">Book a demo</BookDemoButton>
        </div>
      </div>
    </nav>
  );
}
