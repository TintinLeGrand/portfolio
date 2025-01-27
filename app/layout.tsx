import type { Metadata } from "next";
import { Ubuntu_Sans_Mono, Ubuntu_Sans } from "next/font/google";
import { Header, Footer } from "./components/PageSkeleton";
import { Suspense } from "react";
import "./globals.css";
import sentences from "@/data/fr/main.json";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
  weight: "400"
});

const ubuntuSansMono = Ubuntu_Sans_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: "400"
});

const birth = new Date("2004-07-16");
const now = new Date();
const age =
  now.getMonth() > birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate())
    ? now.getFullYear() - birth.getFullYear()
    : now.getFullYear() - birth.getFullYear() - 1;

export const metadata: Metadata = {
  title: "Portfolio - Ethan Le Neindre",
  description: `Ethan Le Neindre, développeur de ${age} ans, actuellement étudiant en 3e année de BUT Informatique à Caen.`,
  authors: [{ name: "Ethan Le Neindre", url: "https://jvaiscaennais.com" }],
  robots: "index, follow",
  keywords: ["Ethan Le Neindre", "Portfolio", "Développeur", "Fullstack", "Web", "Mobile", "React", "Next.js", "MySQL", "TypeScript", "JavaScript", "HTML", "CSS", "TailwindCSS", "Flowbite", "Git", "GitHub", "Visual Studio Code", "Android Studio", "Insomnia"],
  icons: "/tiny-profilePicture.png",
  creator: "Ethan Le Neindre",
  publisher: "Ethan Le Neindre",
  category: "Portfolio",
};

function Loading() {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">{sentences.loading}</h1>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${ubuntuSans.variable} ${ubuntuSansMono.variable} select-none bg-[url('/wave.jpg')] bg-fixed bg-cover bg-center anti  aliased flex flex-col min-h-screen font-sans`}
      >
        <div className="w-screen h-screen fixed bg-black bg-opacity-0 dark:bg-opacity-60 -z-50" />
        <Header />
        <main className="bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-70 dark:font-normal font-semibold p-4 gap-4 rounded-xl mx-4 my-8 border-black dark:border-white border-2 flex-grow z-0 flex items-center justify-center text-center">
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}