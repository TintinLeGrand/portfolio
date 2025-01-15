import { MonoText, MonoTitle } from "./components/MonoText";
import { TextButton } from "./components/Buttons";
import profileData from "@/data/fr/profile.json";
import frPack from "@/data/fr/main.json";
import { MainHeader } from "./components/PageSkeleton";

const sentences = frPack;

export default function Home() {
  const profile = profileData;
  return (
    <div className="flex flex-col gap-8">
      <MainHeader>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">Ethan Le Neindre</MonoTitle>
        <MonoText className="text-lg md:text-2xl max-w-96">Développeur Fullstack, passionné par les applis Web et mobiles</MonoText>
      </MainHeader>
      <hr className="mx-4 border rounded-full border-black dark:border-white" />
      <div className="flex flex-col gap-4">
        <MonoText className="text-md md:text-xl text-justify">
          {`${profile.description}`}
          <br /><br />
          {sentences.welcome}
        </MonoText>
      </div>
      <div className="flex gap-4 items-center flex-wrap justify-center">
        <TextButton href="/skills">{sentences.skills}</TextButton>
        <TextButton href="/projects">{sentences.projects}</TextButton>
        <TextButton href="links">{sentences.links}</TextButton>
      </div>
    </div>
  );
}
