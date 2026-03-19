import AboutCommunity from "@/src/components/AboutCommunity";
import AboutHero from "@/src/components/AboutHero";
import AboutMission from "@/src/components/AboutMission";
import AboutReviews from "@/src/components/AboutReviews";
import AboutTrusted from "@/src/components/AboutTrusted";
import AboutValues from "@/src/components/AboutValues";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutCommunity />
      <AboutValues />
      <AboutTrusted />
      <AboutReviews />
    </main>
  );
}
