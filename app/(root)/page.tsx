import { Expandable, HeroSection } from "@/components/landing_page";

export default function LandingPage() {
  return (
    <main className="bg-black font-bold text-white">
      <HeroSection />
      <Expandable />
    </main>
  );
}
