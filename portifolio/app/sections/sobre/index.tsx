import { Profile } from "@/app/components/profile"

export function Sobre () {
    return (
        <section id="sobre" className="scroll-mt-20 flex h-fit items-center p-10 gap-40 flex-col md:flex-row">
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-semibold">Sobre</h2>
                <p>
                    Sou Deivyson Ricardo Silva dos Santos, desenvolvedor de software, atualmente cursando tecnólogo em Sistemas para Internet na UNICAP, e concluindo curso técnico em Desenvolvimento de Sistemas na Grau Técnico.
                </p>
                <p>
                    Trabalho com front-end e back-end, criando aplicações web / mobile responsivas e escaláveis usando ReactJs, NodeJs, JavaScript, TypeScript, MySQL, MongoDB, Python, Java e C#.
                </p>
                <p>
                    Procuro sempre aprender tecnologias novas, em busca de solucionar problemas do cotidiano de forma tecnológica e acessível.
                </p>
                <p>
                    Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para me contatar pelas minhas redes sociais ou pelo meu e-mail, disponível na seção de Contato.
                </p>
            </div>

            <Profile/>
        </section>
    );
}