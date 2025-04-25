'use client';

import { MonoText, MonoTitle } from "@/components/MonoText";
import { TextButton } from "@/components/Buttons";
import { MainHeader } from "@/components/PageSkeleton";
import { useI18n, useScopedI18n } from "@/locales/client";

export default function Home() {
  const t = useI18n();
  const buttons = useScopedI18n('buttons');

  return (
    <div className="flex flex-col gap-8">
      <MainHeader>
        <MonoTitle className="text-3xl md:text-5xl font-semibold">Ethan Le Neindre</MonoTitle>
        <MonoText className="text-lg md:text-2xl max-w-96">{ t('me') }</MonoText>
      </MainHeader>
      <hr className="mx-4 border rounded-full border-black dark:border-white" />
      <div className="flex flex-col gap-4">
        <MonoText className="text-md md:text-xl text-justify">
          { t('description')}
        </MonoText>
      </div>
      <div className="flex gap-4 items-center flex-wrap justify-center">
        <TextButton href="/profile">{ buttons('profile') }</TextButton>
        <TextButton href="/skills">{ buttons('skills') }</TextButton>
        <TextButton href="/projects">{ buttons('projects')}</TextButton>
        <TextButton href="/links">{buttons('links')}</TextButton>
        <TextButton href="/documents">{buttons('documents')}</TextButton>
      </div>
    </div>
  );
}
