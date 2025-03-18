import type { Metadata } from "next";
import { Ubuntu_Sans_Mono, Ubuntu_Sans } from "next/font/google";
import calcAge from "@/lib/age";
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

const age = calcAge;

export const metadata: Metadata = {
  title: "Portfolio - Ethan Le Neindre",
  description: `Erreur 404, la page est introuvable.`,
  authors: [{ name: "Ethan Le Neindre", url: "https://ethanleneind.re" }],
  robots: "noindex, nofollow",
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
    <html lang="fr">
      <body
        className={`${ubuntuSans.variable} ${ubuntuSansMono.variable} select-none bg-[url('/wave.jpg')] bg-fixed bg-cover bg-center antialiased flex flex-col min-h-screen font-sans`}
      >
        <div className="w-screen h-screen fixed bg-black bg-opacity-0 dark:bg-opacity-60 -z-50" />
        <main className="bg-white dark:bg-black text-black dark:text-white bg-opacity-90 dark:bg-opacity-70 dark:font-normal font-semibold p-4 gap-4 rounded-xl mx-4 my-8 border-black dark:border-white border-2 flex-grow z-0 flex items-center justify-center text-center ease-out duration-700 transition-all transition-discrete">
          {children}
        </main>
      </body>
    </html>
  );
}
