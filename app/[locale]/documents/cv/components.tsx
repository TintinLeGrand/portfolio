import React from "react";
import Link from "next/link";
import { RiPhoneLine, RiMailSendLine, RiLinksFill } from "react-icons/ri";

export function Block({
  title,
  children,
  bordered,
  ignorePt,
}: Readonly<{
  title: string;
  children: React.ReactNode;
  bordered?: boolean;
  ignorePt?: boolean;
}>) {
  return (
    <div
      className={`flex flex-col gap-4 ${bordered ? "light-border-b" : ""} ${
        ignorePt ? "px-[8mm] pb-[8mm]" : "p-[8mm]"
      } border-black`}
    >
      <h1 className="font-bold text-lg">{title}</h1>
      <div className="text-sm">{children}</div>
    </div>
  );
}

export function Header() {
  return (
    <div className="flex flex-row flex-grow w-full gap-2 border-black bg-gray-100">
      <div className="flex flex-col items-start justify-center w-full p-[8mm] border-black">
        <h1 className="text-4xl font-bold">Ethan Le Neindre</h1>
        <h2 className="text-2xl font-extralight">Étudiant en informatique</h2>
      </div>
      <div className="p-[8mm] flex flex-col items-end justify-center">
        <ul>
          <li className="flex items-center justify-end text-right gap-1">
            <Link
              className="underline underline-offset-[1mm] flex justify-end text-right"
              href={"tel:0621604939"}
            >
              06 21 60 49 39
            </Link>
            <span>
              <RiPhoneLine />
            </span>
          </li>
          <li className="flex items-center justify-end text-right gap-1">
            <Link
              className="underline underline-offset-[1mm]"
              href={"mailto:ethan.leneindre@gmail.com"}
            >
              ethan.leneindre@gmail.com
            </Link>
            <span>
              <RiMailSendLine />
            </span>
          </li>
          <li className="flex items-center justify-end text-right gap-1">
            <Link
              className="underline underline-offset-[1mm]"
              href={"https://ethanleneind.re"}
            >
              https://ethanleneind.re
            </Link>
            <span>
              <RiLinksFill />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="flex items-center justify-center w-full p-[8mm] border-black">
      <p className="text-sm">© 2022 Ethan Le Neindre</p>
    </div>
  );
}
