"use client";

import {
  RiBasketballLine,
  RiDiceLine,
  RiCodeView,
  RiHome4Line,
  RiCarLine,
  RiPhpLine,
  RiJavaFill,
} from "react-icons/ri";
import { TbVinyl } from "react-icons/tb";
import { FaEarthEurope } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import { Block, Header } from "./components";
import { DatedTimeline } from "@/components/Timelines";
import { ActionButton, TextButton } from "@/components/Buttons";
import { downloadPDF, downloadPNG } from "../download";
import { DisplayAlert } from "@/components/Alert";
import { useRef } from "react";
import { useScopedI18n } from "@/locales/client";

const jobs = [
  {
    date: "2024 - aujourd'hui",
    title: "Apprenti développeur Fullstack",
    body: (
      <ul>
        <li className="italic">SAP Labs France, Caen</li>
        <li>
          Développement d'une application avec les technologies SAP pour iOS et
          Android, et web.
        </li>
      </ul>
    ),
  },
  {
    date: "Août 2024",
    title: "CDD Mise en rayon",
    body: (
      <ul>
        <li className="italic">Leroy Merlin, Tollevast</li>
        <li>Mise en rayon, et rangement des stocks.</li>
      </ul>
    ),
  },
  {
    date: "Avril - juin 2024",
    title: "Stage en développement web",
    body: (
      <ul>
        <li className="italic">Distritech, Verson</li>
        <li>
          Développement du site vitrine de Distritech, développement d'un site
          de gestion de stock.
        </li>
      </ul>
    ),
  },
  {
    date: "Août 2023",
    title: "CDD Monteur pneumatique",
    body: (
      <ul>
        <li className="italic">SAP Labs France, Caen</li>
        <li>
          Démontage, changement et réparation de pneumatiques de voitures.
        </li>
      </ul>
    ),
  },
];

const studies = [
  {
    date: "Septembre 2022 - juillet 2025",
    title: "BUT Informatique",
    body: (
      <ul>
        <li className="italic">IUT Grand-Ouset Normandie, Ifs</li>
        <li>
          Création d'une application web et mobile pour la gestion d'un club de
          plongée.
        </li>
        <li>Jeu du Gobblet Gobblers implémenté en C.</li>
        <li>
          Création d'un site de transport, avec implémentation d'un graphe.
        </li>
      </ul>
    ),
  },
  {
    date: "Juillet 2022",
    title: "Baccalauréat générale, mention Très Bien",
    body: (
      <ul>
        <li className="italic">Lycée Alexis de Tocqueville, Cherbourg</li>
        <li>
          Spécialités Mathématiques, NSI (Numérique et Sciences Informatique) et
          LLCE Anglais (jusqu’en première).
        </li>
        <li>Options Maths expertes, DNL Maths (section européenne).</li>
      </ul>
    ),
  },
];

export default function Page() {
  const documentRef = useRef<HTMLDivElement>(null);
  const t = useScopedI18n("documents");

  return (
    <div>
      <DisplayAlert>
        Cette page n'est pas destinée à un affichage sur mobile. Veuillez
        utiliser un ordinateur ou une tablette pour une meilleure expérience.
      </DisplayAlert>
      <main
        ref={documentRef}
        className="bg-white w-[210mm] h-[297.0mm] text-black flex justify-start items-start"
      >
        <div
          className="flex flex-col w-full h-full z-0 font-mono antialiased"
          id="document"
        >
          <Header />
          <div className="flex flex-row w-full gap-2">
            <div className="w-1/3 flex flex-col light-border-r border-black">
              <Block bordered title="Langues">
                <ul>
                  <li>Français : langue maternelle</li>
                  <li>
                    Anglais : B2, certifié (<b>Cambridge Assessment</b>, TOEIC <b>895</b>)
                  </li>
                  <li>Italien : B1 (LV2 au collège et lycée)</li>
                </ul>
              </Block>
              <Block bordered title="Langages et frameworks">
                <ul>
                  <li className="flex items-center gap-1">
                    <span>
                      <RiJavaFill />
                    </span>
                    <p>Java, CAP CDS, Kotlin, Python</p>
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <RiPhpLine />
                    </span>
                    <p>PhP, Javascript, HTML, CSS</p>
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <SiNextdotjs />
                    </span>
                    <p>NextJS, Laravel, React</p>
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <LiaDocker />
                    </span>
                    <p>Docker, Kubernetes</p>
                  </li>
                </ul>
              </Block>
              <Block bordered title="Loisirs">
                <ul>
                  <li className="flex items-center gap-1">
                    <span className="flex text-sm">
                      <RiBasketballLine />
                    </span>
                    Basketball
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="flex text-sm">
                      <TbVinyl />
                    </span>
                    Musique
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="flex text-sm">
                      <RiDiceLine />
                    </span>
                    Jeux de société
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="flex text-sm">
                      <RiCodeView />
                    </span>
                    Développement web
                  </li>
                </ul>
              </Block>
              <Block title="Autres informations">
                <ul>
                  <li className="flex items-center gap-1">
                    <span>
                      <RiHome4Line />
                    </span>
                    <p>10 boulevard Maréchal Juin, 14000 Caen</p>
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <RiCarLine />
                    </span>
                    <p>Permis B, véhiculé</p>
                  </li>
                  <li className="flex items-center gap-1">
                    <span>
                      <FaEarthEurope />
                    </span>
                    <p>Nationalité française</p>
                  </li>
                </ul>
              </Block>
            </div>
            <div className="w-2/3">
              <Block title="Expériences professionnelles">
                <DatedTimeline content={jobs} />
              </Block>
              <Block ignorePt title="Expériences scolaires et universitaires">
                <DatedTimeline content={studies} />
              </Block>
            </div>
          </div>
        </div>
      </main>
      <div className="flex justify-between w-[210mm] pt-[8mm] print:hidden select-none">
        <div>
          <TextButton href={"/documents"}>{t("buttons.back")}</TextButton>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-white">{t("export")}</p>
          <ActionButton action={() => downloadPDF(documentRef.current)}>
            PDF
          </ActionButton>
          <ActionButton action={() => downloadPNG(documentRef.current)}>
            PNG
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
