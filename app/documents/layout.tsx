import type { Metadata } from "next";
import { Ubuntu_Sans_Mono, Ubuntu_Sans } from "next/font/google";
import "../globals.css";

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
  authors: [{ name: "Ethan Le Neindre", url: "https://jvaiscaennais.com" }],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${ubuntuSans.variable} ${ubuntuSansMono.variable} bg-none flex flex-col justify-center items-center py-4 gap-4 print:hidden`}
      >
        {children}
      </body>
    </html>
  );
}
