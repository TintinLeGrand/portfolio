import type { Metadata } from "next";
import { Providers } from "../../providers";
import { Header, Footer } from "@/components/PageSkeleton";
import { Ubuntu_Sans_Mono, Ubuntu_Sans } from "next/font/google";
import { Suspense } from "react";
import calcAge from "@/lib/age";
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

const age = calcAge;

export const metadata: Metadata = {
  title: "Portfolio - Ethan Le Neindre",
  description: `Ethan Le Neindre, développeur de ${age} ans, actuellement étudiant en 3e année de BUT Informatique à Caen.`,
  authors: [{ name: "Ethan Le Neindre", url: "https://ethanleneind.re" }],
  robots: "index, follow",
  keywords: [
    "Ethan Le Neindre",
    "Portfolio",
    "Développeur",
    "Fullstack",
    "Web",
    "Mobile",
    "React",
    "Next.js",
    "MySQL",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Flowbite",
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Android Studio",
    "Insomnia",
  ],
  icons: "/tiny-profilePicture.png",
  creator: "Ethan Le Neindre",
  publisher: "Ethan Le Neindre",
  category: "Portfolio",
};
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        className={`${ubuntuSans.variable} ${ubuntuSansMono.variable} select-none bg-[url('/wave.jpg')] bg-fixed bg-cover bg-center antialiased flex flex-col min-h-screen font-sans`}
      >
        <div className="w-screen h-screen fixed bg-black bg-opacity-0 dark:bg-opacity-60 -z-50" />
        <Providers locale={locale}>
          <Header />
          <SpeedInsights />
          <main className="bg-white dark:bg-black text-black dark:text-white bg-opacity-90 dark:bg-opacity-70 dark:font-normal font-semibold p-4 gap-4 rounded-xl mx-4 my-8 border-black dark:border-white border-2 flex-grow z-0 flex items-center justify-center text-center ease-out duration-700 transition-all transition-discrete">
            <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
