'use client';

import { MonoText, MonoTitle } from "@/components/MonoText";
import { MainHeader } from "@/components/PageSkeleton";
import { ElementCard } from "@/components/Cards";
import { Metadata } from "next";
import { useScopedI18n } from "@/locales/client";
import {skills} from "@/data/skills.json";

const profileSkills = skills;
const frameworks = profileSkills.frameworks;
const languages = profileSkills.languages;
const tools = profileSkills.tools;

// export const metadata: Metadata = {
//   title: "Compétences - Ethan Le Neindre",
//   description: "Voici la liste de mes compétences, à titre de représentation.",
//   robots: "index, follow",
// };

export default function Skills() {
  const t = useScopedI18n("skills");

  return (
    <div className="flex flex-col gap-8">
      <MainHeader>
        <MonoText className="text-lg md:text-2xl max-w-96">{ t('texts.description') }</MonoText>
      </MainHeader>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{ t('texts.languages') }</MonoTitle>
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
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{ t('texts.frameworks') }</MonoTitle>
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
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{ t('texts.tools') }</MonoTitle>
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
