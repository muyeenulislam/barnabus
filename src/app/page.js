import HeroCarousel from "@/components/home/hero-carousel";
import DefineNewCategory from "@/components/home/define-new-category";
import Intelligence from "@/components/home/intelligence";
import AgiPillar from "@/components/home/agi-pillar";
import Team from "@/components/home/team";
import NotJustAI from "@/components/home/not-just-ai";
import JoinRnd from "@/components/home/join-rnd";
import { generateMetadata } from "@/utils/metadata";
import HomeHeroTwo from "@/components/home/hero-two";

export const metadata = generateMetadata({
  title: "Barnabus.ai",
  description:
    "Barnabus builds living, agentic intelligence that collaborates like a co-founder, adapts to your workflows, and keeps learning beyond one-off prompts.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <DefineNewCategory />
      <Intelligence />
      <AgiPillar />
      <Team />
      <NotJustAI />
      <JoinRnd />
    </>
  );
}
