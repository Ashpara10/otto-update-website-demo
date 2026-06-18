const manifestoParagraphs = [
  "We carry the number. We hold the relationships. We sit across from another human being and figure out, in real time, whether there's a deal here or not.",
  "That takes instinct. Empathy. Guts.",
  "And then? Then, we go home and type it all into a box.",
  "That feeling is why we got into sales. And why we stay.",
  "But that feeling... it vaporises. Every single day. It dies in the thirty minutes after a great call — when instead of riding that momentum into the next conversation, we stop.",
  "The rush is dead. The instinct is frigid.",
  "And we're doing data entry at 9 PM asking ourselves — when did selling stop being the job?",
  "Updating geriatric software is not selling. It never was.",
  "We pulsate when we sell. And our time should be spent doing just that.",
  "The Sales Tribe deserves a better future.",
  "Where we carry the rush of a closed deal long after the handshake. Where our sharpest hours are spent reading rooms, not filling fields. Where evenings belong to great food, great closers, and conversations that make us better. Where the systems finally keep up with us. A future where our Tribe soars above mundane paperwork and does what it lives to do.",
];

export default function BodySection() {
  return (
    <section className="bg-dark px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl space-y-8 text-base leading-8 text-neutral-200 sm:text-lg">
        <p className=" font-medium tracking-tight text-neutral-100 text-xl md:text-2xl lg:text-3xl">
          {manifestoParagraphs[0]}
        </p>
        <p>{manifestoParagraphs[1]}</p>
        <p>{manifestoParagraphs[2]}</p>

        <div className="space-y-1 text-xl md:text-2xl font-medium tracking-tight lg:text-3xl text-neutral-100 ">
          <p>A closed deal is a rush.</p>
          <p>The call that lands. The handshake.</p>
          <p>That moment a buyer says yes — and you know you earned that.</p>
        </div>

        <p>{manifestoParagraphs[3]}</p>
        <p>{manifestoParagraphs[4]}</p>

        <div className="border-l-2 bg-brand-soft/40 border-brand pl-5 py-5 text-neutral-200">
          <p>Open the CRM.</p>
          <p className="font-semibold text-neutral-100">Type. Log. Update. Tag.</p>
          <p>
            Write notes nobody will read so a dashboard somewhere turns green.
          </p>
        </div>

        <p>{manifestoParagraphs[5]}</p>
        <p>{manifestoParagraphs[6]}</p>

        <div className="rounded-xl border border-brand/20 bg-brand/10 p-6 text-neutral-100">
          <p>Admin work is not productivity.</p>
          <p>A green dashboard is not a healthy pipeline.</p>
          <p>
            And &quot;process&quot;? It&apos;s their word for what they do
            <span className="text-brand"> to us.</span>
          </p>
          <p className="mt-6 font-semibold">
            Not for us. <span className="text-brand">To us.</span>
          </p>
        </div>

        <p>{manifestoParagraphs[7]}</p>

        <div className="space-y-4 tracking-tight text-xl font-medium text-neutral-100 md:text-2xl lg:text-3xl">
          <p>We pulsate when we sell.</p>
          <p>And our time should be spent doing just that.</p>
          <p className="pt-4">The Sales Tribe deserves a better future.</p>
        </div>

        <p>{manifestoParagraphs[10]}</p>
      </div>
    </section>
  );
}
