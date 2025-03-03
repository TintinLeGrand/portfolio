import { TextButton } from "../components/Buttons";
import sentences from "@/data/fr/main.json";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col gap-4 justify-center items-center">
      <p>Bienvenue sur la page de documents.</p>
      <TextButton href="/documents/cv">{sentences.cv}</TextButton>
    </div>
  );
}
