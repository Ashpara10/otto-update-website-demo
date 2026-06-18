export default function IntroSection() {
  return (
    <section className="bg-dark px-5 pb-10 pt-32 sm:px-8 sm:pb-12 sm:pt-36">
      <div className="mx-auto max-w-4xl">
        <div className=" font-semibold border-l-3 border-brand pl-3 text-brand">
          Get in touch
        </div>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
          Contact Us
        </h1>
        <div className="mt-6 space-y-4 text-lg text-foreground/85">
          <p>
            Email:{" "}
            <a
              href="mailto:omkar@ottosales.ai"
              className="text-brand underline decoration-brand/50 underline-offset-4 transition-colors hover:opacity-80"
            >
              omkar@ottosales.ai
            </a>
          </p>
          <p>
            Book a meeting:{" "}
            <a
              href="https://calendly.com/omkar-ottosales"
              target="_blank"
              rel="noreferrer"
              className="text-brand underline decoration-brand/50 underline-offset-4 transition-colors hover:opacity-80"
            >
              calendly.com/omkar-ottosales
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
