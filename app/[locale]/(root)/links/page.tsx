'use client';

import { MonoText } from "@/components/MonoText";
import { MainHeader } from "@/components/PageSkeleton";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { RiBlueskyFill } from "react-icons/ri";
import links from "@/data/links.json";
import { TextButton } from "@/components/Buttons";
import { useScopedI18n } from "@/locales/client";

export default function Links() {
  const t = useScopedI18n("links");

  return (
    <div className="flex flex-col gap-8">
      <MainHeader>
        <MonoText className="text-lg md:text-2xl max-w-96">{ t('texts.description') }</MonoText>
      </MainHeader>
      <hr className="mx-4 border-black dark:border-white border rounded-full" />
      <div className="flex flex-wrap gap-16 justify-center py-4">
        <TextButton href={links.socials.github}>
          <div className="flex flex-col gap-2 items-center">
            <IoLogoGithub className="text-5xl" />
            <p>GitHub</p>
          </div>
        </TextButton>
        <TextButton href={links.socials.linkedin}>
          <div className="flex flex-col gap-2 items-center">
            <IoLogoLinkedin className="text-5xl" />
            <p>LinkedIn</p>
          </div>
        </TextButton>
        <TextButton href={links.socials.bluesky}>
          <div className="flex flex-col gap-2 items-center">
            <RiBlueskyFill className="text-5xl" />
            <p>BlueSky</p>
          </div>
        </TextButton>
      </div>
    </div>
  );
}
