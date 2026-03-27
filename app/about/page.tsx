import AboutCommunity from "@/src/components/AboutCommunity";
import AboutHero from "@/src/components/AboutHero";
import AboutMission from "@/src/components/AboutMission";
import AboutReviews from "@/src/components/AboutReviews";
import AboutTrusted from "@/src/components/AboutTrusted";
import AboutValues from "@/src/components/AboutValues";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AZMIL Power, a trusted solar energy company in Nigeria delivering reliable and sustainable energy solutions.",

  keywords: [
    "about AZMIL Power",
    "solar company Nigeria",
    "renewable energy experts",
  ],

  openGraph: {
    title: "About AZMIL Power",
    description:
      "We are committed to delivering sustainable solar energy solutions across Nigeria.",
    url: "https://azmilsolar.com/about",
  },
};

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
