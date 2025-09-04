import Image from "next/image";
import { HomeSection } from "./sections/home";
import { Sobre } from "./sections/sobre"
import { Projetos } from "./sections/projetos";
import { ProjetosEmExecucao } from "./sections/projetosEx";
export default function Home() {
  return (
    <main>
      <HomeSection/>
      <Projetos/>
      <ProjetosEmExecucao/>
    </main>
  );
}
