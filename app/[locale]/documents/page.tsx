'use client';

import { TextButton } from "@/components/Buttons";
import { useScopedI18n } from "@/locales/client";

export default function Page() {
  const t = useScopedI18n("documents");

  return (
    <div className="flex h-full w-full flex-col gap-4 justify-center items-center">
      <p className="dark:text-white">{t("description")}</p>
      <TextButton href="/documents/cv">CV</TextButton>
      <TextButton href="/">{t('buttons.back')}</TextButton>
    </div>
  );
}
