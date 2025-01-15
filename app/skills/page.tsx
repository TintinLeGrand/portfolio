import { MonoText, MonoTitle } from "../components/MonoText";
import profileData from "@/data/fr/profile.json";
import frPack from "@/data/fr/main.json";
import { MainHeader } from "../components/PageSkeleton";
import { ElementCard } from "../components/Cards";

const sentences = frPack;
const profile = profileData;
const frameworks = profile.skills.frameworks;
const languages = profile.skills.languages;
const tools = profile.skills.tools;

export default function Skills() {
  return (
    <div className="flex flex-col gap-8">
      <MainHeader>
        <MonoText className="text-lg md:text-2xl max-w-96">{sentences.skillDetails}</MonoText>
      </MainHeader>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{sentences.languages}</MonoTitle>
        <div className="flex flex-wrap gap-4 justify-center py-4">
          {
            Object.entries(languages).map(([name, { knowledge, url }]) => (
              <ElementCard
                key={name}
                name={name}
                url={url}
                knowledge={knowledge}
              />
            ))
          }
        </div>
      </div>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{sentences.frameworks}</MonoTitle>
        <div className="flex flex-wrap gap-4 justify-center py-4">
          {
            Object.entries(frameworks).map(([name, { knowledge, url }]) => (
              <ElementCard
                key={name}
                name={name}
                url={url}
                knowledge={knowledge}
              />
            ))
          }
        </div>
      </div>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{sentences.tools}</MonoTitle>
        <div className="flex flex-wrap gap-4 justify-center py-4">
        {
            Object.entries(tools).map(([name, { knowledge, url }]) => (
              <ElementCard
                key={name}
                name={name}
                url={url}
                knowledge={knowledge}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
