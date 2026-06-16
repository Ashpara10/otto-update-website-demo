import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import IntroSection from "@/components/resources/contact/intro-section";
import FormSection from "@/components/resources/contact/form-section";

export const metadata = {
  title: "Contact Otto",
  description:
    "Get in touch with Otto Sales AI to talk about anti-CRM workflows and AI sales automation.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Nav />
      <main>
        <IntroSection />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
}
