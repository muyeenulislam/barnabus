import HomeHero from "@/components/home/hero";
import DefineNewCategory from "@/components/home/define-new-category";
import Intelligence from "@/components/home/intelligence";
import AgiPillar from "@/components/home/agi-pillar";
import Team from "@/components/home/team";
import NotJustAI from "@/components/home/not-just-ai";
import JoinRnd from "@/components/home/join-rnd";

export default function Home() {
  return (
    <>
      <HomeHero />
      <DefineNewCategory />
      <Intelligence />
      <AgiPillar />
      <Team />
      <NotJustAI />
      <JoinRnd />
    </>
  );
}
