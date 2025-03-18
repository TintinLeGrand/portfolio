import { Ubuntu_Sans_Mono, Ubuntu_Sans } from "next/font/google";
import "../globals.css";
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
    <div className="flex flex-col justify-center items-center gap-4">
      <MonoTitle className="text-3xl md:text-5xl font-semibold">404</MonoTitle>
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
  );
}
