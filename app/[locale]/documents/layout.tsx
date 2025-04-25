import type { Metadata } from "next";
import { Ubuntu_Sans_Mono, Ubuntu_Sans } from "next/font/google";
import { Providers } from "@/app/providers";
import "../../globals.css";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
  weight: "400",
});

const ubuntuSansMono = Ubuntu_Sans_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: "400",
});

const birth = new Date("2004-07-16");
const now = new Date();
const age =
  now.getMonth() > birth.getMonth() ||
  (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate())
    ? now.getFullYear() - birth.getFullYear()
    : now.getFullYear() - birth.getFullYear() - 1;

export const metadata: Metadata = {
  title: "Documents - Ethan Le Neindre",
  description: "Voici la liste de mes documents à disposition.",
  authors: [{ name: "Ethan Le Neindre", url: "https://ethanleneind.re" }],
  robots: "index, follow",
  keywords: [
    "Ethan Le Neindre",
    "Portfolio",
    "Développeur",
    "Fullstack",
    "Web",
    "Mobile",
    "Java",
    "CV",
    "Etudiant",
    "Informatique",
  ],
  icons: "/tiny-profilePicture.png",
  creator: "Ethan Le Neindre",
  publisher: "Ethan Le Neindre",
  category: "Portfolio",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${ubuntuSans.variable} ${ubuntuSansMono.variable} bg-black flex flex-col justify-center items-center py-4 gap-4 print:hidden`}
      >
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
