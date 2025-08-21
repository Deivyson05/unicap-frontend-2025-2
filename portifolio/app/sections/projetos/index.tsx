import { CardProjeto } from "@/app/components/cardProjeto";
import { projetos } from "./projetos";

export function Projetos() {
    return (
        <section id="projetos" className="w-screen h-auto flex flex-col p-10 gap-10 scroll-mt-20">
            <h2 className="text-3xl font-semibold">Projetos</h2>
            <div className="flex flex-wrap gap-10">
                {
                    projetos.map((projeto, index) => (
                        <CardProjeto
                            nome={projeto.nome}
                            desc={projeto.descricao}
                            img={projeto.img}
                            key={index}
                        />
                    ))
                }
            </div>
        </section>
    );
}