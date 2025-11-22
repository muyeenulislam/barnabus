import HomeHeroSecondary from "@/components/home/hero-secondary";
import DefineNewCategory from "@/components/home/define-new-category";
import Intelligence from "@/components/home/intelligence";
import AgiPillar from "@/components/home/agi-pillar";
import Team from "@/components/home/team";
import NotJustAI from "@/components/home/not-just-ai";
import JoinRnd from "@/components/home/join-rnd";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Barnabus.ai",
  description:
    "Barnabus builds living, agentic intelligence that collaborates like a co-founder, adapts to your workflows, and keeps learning beyond one-off prompts.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HomeHeroSecondary />
      <DefineNewCategory />
      <Intelligence />
      <AgiPillar />
      <Team />
      <NotJustAI />
      <JoinRnd />
    </>
  );
}
