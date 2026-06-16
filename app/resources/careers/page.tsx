import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import CareersSection from "@/components/resources/careers/careers-section";

export const metadata = {
  title: "Careers · Otto",
  description: "Build Otto with us.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Nav />
      <main>
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
}
