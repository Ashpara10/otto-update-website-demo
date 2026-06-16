export default function IntroSection() {
  return (
    <section className="bg-white px-5 pb-10 pt-32 sm:px-8 sm:pb-12 sm:pt-36">
      <div className="mx-auto max-w-4xl">
        <div className=" font-semibold border-l-3 border-green-contrast pl-2 text-green-contrast">
          Get in touch
        </div>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
          Contact Us
        </h1>
        <div className="mt-6 space-y-4 text-lg text-neutral-700">
          <p>
            Email:{" "}
            <a
              href="mailto:omkar@ottosales.ai"
              className="text-green-contrast underline decoration-green-contrast/50 underline-offset-4 transition-colors hover:opacity-80"
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
              className="text-green-contrast underline decoration-green-contrast/50 underline-offset-4 transition-colors hover:opacity-80"
            >
              calendly.com/omkar-ottosales
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
