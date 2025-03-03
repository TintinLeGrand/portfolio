import { MonoText } from "../../components/MonoText";
import frPack from "@/data/fr/main.json";
import { MainHeader } from "../../components/PageSkeleton";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { RiBlueskyFill } from "react-icons/ri";
import profile from "@/data/fr/profile.json";
import { TextButton } from "../../components/Buttons";
import { Metadata } from "next";

const sentences = frPack;

export const metadata: Metadata = {
  title: "Liens - Ethan Le Neindre",
  description: "Retrouvez ici tous les liens utiles pour en savoir plus sur moi, et me contacter.",
  robots: "index, follow",
};

export default function Links() {
  return (
    <div className="flex flex-col gap-8">
      <MainHeader>
        <MonoText className="text-lg md:text-2xl max-w-96">{sentences.linksDetails}</MonoText>
      </MainHeader>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div className="flex flex-wrap gap-16 justify-center py-4">
        <TextButton href={profile.socials.github}>
          <div className="flex flex-col gap-2 items-center">
            <IoLogoGithub className="text-5xl" />
            <p>GitHub</p>
          </div>
        </TextButton>
        <TextButton href={profile.socials.linkedin}>
          <div className="flex flex-col gap-2 items-center">
            <IoLogoLinkedin className="text-5xl" />
            <p>LinkedIn</p>
          </div>
        </TextButton>
        <TextButton href={profile.socials.bluesky}>
          <div className="flex flex-col gap-2 items-center">
            <RiBlueskyFill className="text-5xl" />
            <p>BlueSky</p>
          </div>
        </TextButton>
      </div>
    </div>
  );
}
