import { MonoText } from "../components/MonoText";
import { MainHeader } from "../components/PageSkeleton";
import frPack from "@/data/fr/main.json";

const sentences = frPack;

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <MainHeader>
        <MonoText className="text-lg md:text-2xl max-w-96">{sentences.projectsDetails}</MonoText>
      </MainHeader>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <MonoText className="text-lg md:text-2xl">Je n'ai pas encore fini de réaliser mon portfolio, vous pourrez revenir très vite voir mes projets !</MonoText>
    </div>
  );
}
