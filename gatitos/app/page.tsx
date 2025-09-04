import Image from "next/image";
import { HomeSection } from "./sections/home";
import { Sobre } from "./sections/sobre"
import { Projetos } from "./sections/projetos";
export default function Home() {
  return (
    <main>
      <HomeSection/>
      <Projetos/>
    </main>
  );
}
