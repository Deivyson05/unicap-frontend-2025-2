import Image from "next/image";
import { Books } from "./sections/books";

export default function Home() {
  return (
    <div className="flex flex-col p-8">
      <h2 className="text-3xl font-semibold">Recomendados</h2>
      <Books/>
      <h2 className="text-3xl font-semibold">Comprar novamente</h2>
      <Books/>
    </div>
  );
}
