import { Ubuntu_Sans_Mono, Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import { MonoText, MonoTitle } from "@/components/MonoText";
import { TextButton } from "@/components/Buttons";
import { HiHome } from "react-icons/hi";

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

export default async function Page404() {
  return (
    <html lang="fr">
      <body
        className={`${ubuntuSans.variable} ${ubuntuSansMono.variable} select-none bg-[url('/wave.jpg')] bg-fixed bg-cover bg-center antialiased flex flex-col min-h-screen font-sans`}
      >
        <div className="w-screen h-screen fixed bg-black bg-opacity-0 dark:bg-opacity-60 -z-50" />
        <main className="bg-white dark:bg-black text-black dark:text-white bg-opacity-90 dark:bg-opacity-70 dark:font-normal font-semibold p-4 gap-4 rounded-xl mx-4 my-8 border-black dark:border-white border-2 flex-grow z-0 flex items-center justify-center text-center ease-out duration-700 transition-all transition-discrete">
          <div className="flex flex-col justify-center items-center gap-4">
            <MonoTitle className="text-3xl md:text-5xl font-semibold">
              404
            </MonoTitle>
            <MonoText className="text-lg md:text-2xl text-justify">
              Page introuvable
            </MonoText>
            <TextButton href="/">
              <div className="flex flex-col gap-2 items-center">
                <HiHome className="text-5xl" />
                <p>Accueil</p>
              </div>
            </TextButton>
          </div>
        </main>
      </body>
    </html>
  );
}
