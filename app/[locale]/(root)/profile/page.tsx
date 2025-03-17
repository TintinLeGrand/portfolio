'use client';

import { MonoText, MonoTitle } from "@/components/MonoText";
import { MainHeader } from "@/components/PageSkeleton";
import { Metadata } from "next";
import { useScopedI18n } from "@/locales/client";

// export const metadata: Metadata = {
//   title: "Projets - Ethan Le Neindre",
//   description: `Voici mes projets actuels et futurs.`,
//   robots: "index, follow",
// };

export default function Projects() {
  const t = useScopedI18n("profile");
  return (
    <div className="flex flex-col gap-8">
      <MainHeader>
        <MonoText className="text-lg md:text-2xl text-justify">{ t('description') }</MonoText>
      </MainHeader>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{ t('titles.personal') }</MonoTitle>
        <MonoText className="text-lg md:text-2xl text-justify">{ t('texts.personal') }</MonoText>
      </div>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{ t('titles.scolarship') }</MonoTitle>
        <MonoText className="text-lg md:text-2xl text-justify">{ t('texts.scolarship') }</MonoText>
      </div>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{ t('titles.professional') }</MonoTitle>
        <MonoText className="text-lg md:text-2xl text-justify">{ t('texts.professional') }</MonoText>
      </div>
    </div>
  );
}
