import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import MediaSection from "@/components/resources/media/media-section";

export default function MediaPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col bg-dark text-neutral-100">
      <Nav />
      <main className="pt-24 md:pt-28">
        <MediaSection />
      </main>
      <Footer />
    </div>
  );
}
