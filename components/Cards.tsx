"use client";

import { MonoText, MonoTitle } from "./MonoText";
import { CircularProgress } from "@nextui-org/react";
import {
  Card,
  Avatar,
  Popover,
  CustomFlowbiteTheme,
  Spinner,
} from "flowbite-react";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n, useScopedI18n } from "@/locales/client";

const customCard: CustomFlowbiteTheme["card"] = {
  img: {
    base: "rounded-lg max-w-sm lg:max-w-lg",
  },
  root: {
    base: "bg-white dark:bg-black border-2 border-black dark:border-white rounded-lg shadow-lg max-w-sm lg:max-w-lg overflow-hidden",
    children: "bg-white dark:bg-black rounded-lg text-justify p-4",
  },
};

const customPopover: CustomFlowbiteTheme["popover"] = {
  content:
    "bg-white dark:bg-black border-2 border-black dark:border-white rounded-lg shadow-lg p-2",
};

export function ElementCard({
  name,
  url,
  knowledge,
}: Readonly<{
  name: string;
  url: string;
  knowledge: any;
}>) {
  let value: number = knowledge.value;
  let color: string;
  if (value <= 15) {
    color = "stroke-gray-400";
  } else if (value <= 40) {
    color = "stroke-blue-400";
  } else if (value <= 65) {
    color = "stroke-orange-400";
  } else {
    color = "stroke-lime-400";
  }

  let track = color + "/10";

  const t = useScopedI18n("skills.levels");

  return (
    <div className="rounded-full flex flex-col items-center min-w-32 lg:min-w-40 min-h-32 lg:min-h-40 p-4 gap-2 h-fit">
      <div className="rounded-full overflow-hidden h-24 w-24 items-center justify-center flex bg-white">
        <CircularProgress
          className="absolute rounded-full ring-0 hover:ring-2 ring-black dark:ring-white ease-out duration-300 transition-all transition-discrete"
          classNames={{
            svg: "w-32 h-32 drop-shadow-md",
            indicator: color,
            track: track,
            value: "text-3xl font-semibold text-white",
          }}
          strokeWidth={2}
          value={value}
        />
        <Suspense fallback={<Spinner color="info" aria-label="Loading..." />}>
          <Image
            src={url}
            alt={`${name} application icon`}
            height={60}
            width={60}
            aria-label={`${name} application icon`}
          />
        </Suspense>
      </div>
      <MonoText className="text-lg md:text-xl max-w-24 mt-4">{name}</MonoText>
      <p className="text-sm">{t(knowledge.text)}</p>
    </div>
  );
}

export function ProjectCard({
  name,
  url,
  description,
  mates,
  technologies,
  frameworks,
  link,
}: Readonly<{
  name: string;
  url: string;
  link?: string;
  description: string;
  mates: Array<string>;
  technologies: Array<string>;
  frameworks: Array<string>;
}>) {
  const t = useI18n();

  return (
    <Card theme={customCard}>
      <div className="relative w-full md:min-w-96 max-w-sm lg:max-w-lg aspect-[16/9] overflow-hidden">
        <img
          src={url}
          alt="Description"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {url.includes("/bg/") && (
          <MonoTitle className="absolute inset-0 flex items-center justify-center z-50 text-black text-xl">
            {t("skills.errors.noPic")}
          </MonoTitle>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="flex flex-col justify-center items-center">
          <MonoText>Technologies</MonoText>
          <div className="flex flex-wrap justify-center -space-x-1">
            {technologies.map((technologie) => (
              <div className="overflow-hidden">
                <Popover
                  content={<p>{technologie}</p>}
                  trigger="hover"
                  placement="top"
                  theme={customPopover}
                >
                  <Avatar
                    size="md"
                    img={`/languages/${technologie
                      .toLowerCase()
                      .replace(/ /g, "-")}.png`}
                    className="bg-white rounded-full border border-black overflow-hidden"
                    rounded
                  />
                </Popover>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MonoText>Frameworks</MonoText>
          <div className="flex flex-wrap justify-center -space-x-1">
            {frameworks.map((framework) => (
              <div className="overflow-hidden">
                <Popover
                  content={<p>{framework}</p>}
                  trigger="hover"
                  placement="top"
                  theme={customPopover}
                >
                  <Avatar
                    size="md"
                    img={`/frameworks/${framework
                      .toLowerCase()
                      .replace(/ /g, "-")}.png`}
                    className="bg-white rounded-full border border-black overflow-hidden"
                    rounded
                  />
                </Popover>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-4 border border-black dark:border-white" />
      <div className="flex flex-wrap gap-2 items-center">
        <MonoText>By</MonoText>
        <Avatar.Group>
          {mates.map((mate) => (
            <Link href={`https://github.com/${mate}`} target="_blank">
              <Popover
                content={<p>{mate}</p>}
                trigger="hover"
                placement="top"
                theme={customPopover}
              >
                <Avatar
                  size="md"
                  img={`https://github.com/${mate}.png`}
                  rounded
                  stacked
                />
              </Popover>
            </Link>
          ))}
        </Avatar.Group>
      </div>
      <div
        onClick={link ? () => window.open(link, "_blank") : undefined}
        className="cursor-pointer hover:underline"
      >
        <MonoTitle className={"text-2xl lg:text-3xl font-bold tracking-tight"}>
          {name}
        </MonoTitle>
        <MonoText>{description}</MonoText>
      </div>
    </Card>
  );
}
