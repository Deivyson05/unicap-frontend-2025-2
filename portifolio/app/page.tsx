import Image from "next/image";

import { HomeSection } from "./sections/home";
import { Sobre } from "./sections/sobre";
import { Projetos } from "./sections/projetos";
import { CardHabilidades } from "./components/cardHabilidades";

export default function Home() {
  return (
    <main className="font-sans flex flex-col items-center justify-center">
      <HomeSection/>
      <Sobre/>
      <Projetos/>
      <section id="habilidades" className="scroll-mt-30 w-screen h-auto flex flex-col items-center justify-center gap-10 p-10">
        <h2 className="text-3xl font-semibold">Habilidades</h2>
        <CardHabilidades/>
      </section>
    </main>
  );
}
