import { MonoText, MonoTitle } from "../../components/MonoText";
import { MainHeader } from "../../components/PageSkeleton";
import { ProjectCard } from "../../components/Cards";
import projectList from "@/data/fr/projects.json";
import frPack from "@/data/fr/main.json";
import { Metadata } from "next";

const sentences = frPack;
const currentProjects = projectList.en_cours;
const futureProjects = projectList.futurs;

export const metadata: Metadata = {
  title: "Projets - Ethan Le Neindre",
  description: `Voici mes projets actuels et futurs.`,
  robots: "index, follow",
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <MainHeader>
        <MonoText className="text-lg md:text-2xl max-w-96">{sentences.projectsDetails}</MonoText>
      </MainHeader>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{sentences.currentProjects}</MonoTitle>
        <div className="flex flex-wrap gap-4 justify-center py-4">
          {
            Object.entries(currentProjects).map(([key, { name, description, image, frameworks, technologies, workers, link }]) => (
              <ProjectCard
                key={key + name.toString()}
                name={name}
                url={image}
                description={description}
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
        <MonoTitle className="text-3xl md:text-5xl font-semibold">{sentences.futureProjects}</MonoTitle>
        <div className="flex flex-wrap gap-4 justify-center py-4">
          {
            Object.entries(futureProjects).map(([key, { name, description, image, frameworks, technologies, workers }]) => (
              <ProjectCard
                key={key}
                name={name}
                url={image}
                description={description}
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
