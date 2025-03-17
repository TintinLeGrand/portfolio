'use client';

import { MonoText, MonoTitle } from "@/components/MonoText";
import { MainHeader } from "@/components/PageSkeleton";
import { ProjectCard } from "@/components/Cards";
import { Metadata } from "next";
import projectList from '@/data/projects.json';
import { useScopedI18n } from "@/locales/client";

const currentProjects = projectList.en_cours;
const futureProjects = projectList.futurs;

// export const metadata: Metadata = {
//   title: "Projets - Ethan Le Neindre",
//   description: `Voici mes projets actuels et futurs.`,
//   robots: "index, follow",
// };

export default function Projects() {
  const t = useScopedI18n("projects");
  return (
    <div className="flex flex-col gap-8">
      <MainHeader>
        <MonoText className="text-lg md:text-2xl max-w-96">{ t('texts.description') }</MonoText>
      </MainHeader>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{ t('texts.current') }</MonoTitle>
        <div className="flex flex-wrap gap-4 justify-center py-4">
            {
            Object.entries(currentProjects).map(([key, { name, image, frameworks, technologies, workers, link }]) => (
              <ProjectCard
              key={key}
              name={name}
              url={image}
              description={ t(`list.${key as keyof typeof projectList.en_cours}`) }
              mates={workers}
              technologies={technologies}
              frameworks={frameworks}
              link={link}
              />
            ))
            }
        </div>
      </div>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{ t('texts.future') }</MonoTitle>
        <div className="flex flex-wrap gap-4 justify-center py-4">
          {
            Object.entries(futureProjects).map(([key, { name, image, frameworks, technologies, workers }]) => (
              <ProjectCard
                key={key}
                name={name}
                url={image}
                description={ t(`list.${key as keyof typeof projectList.futurs}`) }
                mates={workers}
                technologies={technologies}
                frameworks={frameworks}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
