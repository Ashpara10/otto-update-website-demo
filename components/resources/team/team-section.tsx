import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";

const teamMembers = [
  {
    name: "Omkar Pandharkame",
    title: "CEO / Co-Founder",
    subtitle:
      "15 years in sales | Didn't study the CRM problem. He lived it.",
    linkedin: "https://www.linkedin.com/in/omkarpandharkame",
    // twitter: "#",`
    image: "omkar.png",
  },
  {
    name: "Tanay Lakhani",
    title: "CPO / Co-Founder",
    subtitle:
      "Built product at Zillow. | Product instinct for what reps actually need.",
    linkedin: "https://www.linkedin.com/in/tanaylakhani/",
    // twitter: "#",
    image: "tanay.png",
  },
];

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function TeamSection() {
  return (
    <>
      <Nav />
      <main className="flex-grow pt-28 pb-20 md:pt-40 md:pb-32 px-5 sm:px-6 mx-auto max-w-7xl w-full bg-dark text-heading">
        <div className="text-center mb-12 md:mb-20">
          <div className="text-[15px] font-medium flex items-center justify-center mb-6 gap-2 text-brand">
            <span className="w-0.5 rounded-full h-4 bg-brand" /> The Team
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-heading tracking-tight">
            2 Co-Founders. 6 Companies Built. <br />
            1 Problem Both of them Lived.
          </h1>
        </div>

        <div className="grid grid-cols-1 max-w-4xl mx-auto w-full sm:grid-cols-2 gap-6 lg:gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col group">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl md:rounded-[24px] bg-light-dark/40 mb-5 border border-light-dark flex items-center justify-center">
                <Image src={`/team/${member.image}`} alt={member.name} fill sizes="(max-width: 640px) 100vw, 50vw" priority className="object-cover" />
              </div>

              <div className="px-1 mt-2">
                <h3 className="text-xl font-medium text-heading mb-1.5">
                  {member.name}
                </h3>
                <p className="text-base font-medium text-heading mb-1.5">
                  {member.title}
                </p>
                <p className="text-muted-foreground mb-5">{member.subtitle}</p>

                <div className="flex items-center gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-brand"
                  >
                    <LinkedinIcon className="size-5" />
                  </a>
                  {/* <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-brand"
                  >
                    <XIcon className="size-5" />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
