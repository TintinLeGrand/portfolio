"use client";

import Link from "next/link";
import {
  Navbar,
  Button,
  Popover,
  Spinner,
  CustomFlowbiteTheme,
} from "flowbite-react";
import Image from "next/image";
import { RiBlueskyFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { HiTranslate, HiCursorClick } from "react-icons/hi";
import { Suspense } from "react";
import {
  useI18n,
  useScopedI18n,
  useChangeLocale,
  useCurrentLocale,
} from "@/locales/client";
import links from "@/data/links.json";

const customHeader: CustomFlowbiteTheme["navbar"] = {
  brand: {
    base: "flex items-center gap-4",
  },
  root: {
    base: "bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-70 border-black dark:border-white border-2 p-4 rounded-xl text-lg md:text-2xl text-black font-sans dark:text-white",
    inner: {
      base: "container mx-auto flex items-center justify-between bg-opacity-100",
    },
  },
  toggle: {
    base: "dark:text-white text-black",
    icon: "dark:text-white text-black",
  },
};

const customPopover: CustomFlowbiteTheme["popover"] = {
  base: "absolute z-50 inline-block w-fit text-center bg-black dark:bg-white font-semibold text-white dark:text-black outline-none rounded-lg shadow-lg",
  content:
    "z-50 bg-black dark:bg-white font-semibold text-white dark:text-black rounded-lg shadow-lg",
  arrow: {
    base: "z-50",
    placement: "z-50",
  },
};

const customButton: CustomFlowbiteTheme["button"] = {
  color: {
    none: "border-none hover:border-white hover:border rounded-full p-0",
  },
};

export function Navigation() {
  const t = useScopedI18n("buttons");
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  const content = (
    <div>
      <div className="p-3 -mt-7">
        <ul>
          <li className="hover:underline">
            <Link href="/" replace>
              {t("home")}
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/profile" replace>
              {t("profile")}
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/skills" replace>
              {t("skills")}
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/projects" replace>
              {t("projects")}
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/links" replace>
              {t("links")}
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/documents" replace>
              {t("documents")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="relative z-50 flex gap-0">
      <Button
        onClick={() => changeLocale(currentLocale === "en" ? "fr" : "en")}
        theme={customButton}
        color="none"
      >
        <HiTranslate className="text-2xl" />
      </Button>
      <Popover theme={customPopover} content={content} placement="bottom">
        <Button theme={customButton} color="none">
          <HiCursorClick className="text-2xl" />
        </Button>
      </Popover>
    </div>
  );
}

export function Header() {
  const t = useI18n();

  return (
    <Navbar theme={customHeader} fluid className="mx-4 my-2 z-50">
      <Navbar.Brand as={Link} replace href="/">
        <Suspense
          fallback={
            <div className="h-8 w-8 sm:h-12 sm:w-12 flex justify-center items-center rounded-full border-black dark:border-white border-2">
              <Spinner color="info" aria-label="Loading..." />
            </div>
          }
        >
          <img
            src="/tiny-profilePicture.png"
            className="h-8 sm:h-12 rounded-full border-black dark:border-white border-2"
            alt="Picture of myself"
          />
        </Suspense>
        <h1 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {t("title")}
        </h1>
      </Navbar.Brand>
      <Navigation />
    </Navbar>
  );
}

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-70 min-h-16 border-black dark:border-white border-2 p-4 mx-4 my-2 rounded-xl text-black dark:text-white flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between text-sm gap-4">
        <div>&copy;{new Date().getFullYear()} - Ethan Le Neindre</div>
        <div className="flex items-center gap-4 text-xl">
          <Link
            className="hover:text-2xl min-w-6 ease-out duration7300 transition-all transition-discrete"
            href={links.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill />
          </Link>
          <Link
            className="hover:text-2xl min-w-6 ease-out duration7300 transition-all transition-discrete"
            href={links.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinFill />
          </Link>
          <Link
            className="hover:text-2xl min-w-6 ease-out duration7300 transition-all transition-discrete"
            href={links.socials.bluesky}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiBlueskyFill />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function MainHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
      <Image
        src="/profilePicture.png"
        alt="My profile picture: it's a photo of me, Ethan Le Neindre, in front of a white wall."
        width={200}
        height={200}
        className="rounded-full bg-black dark:bg-white hover:bg-cover hover:bg-[url('https://upload.wikimedia.org/wikipedia/commons/f/fa/02_classical_greek_4_elements_water.gif')] hover:bg-center border-2 border-black dark:border-white"
      />
      <div className="flex flex-col gap-4 justify-center text-center items-center">
        {children}
      </div>
    </div>
  );
}
