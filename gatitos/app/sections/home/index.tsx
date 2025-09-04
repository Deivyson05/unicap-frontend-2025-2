import { Button } from "@/components/ui/button"

export function HomeSection() {
    return (
        <section className="flex items-center h-screen p-20 gap-5 ">
            <div className="flex flex-col items-start gap-4">
                <h1 className="text-2xl font-semibold">
                    Olá! Eu sou Deivyson
                </h1>
                <h2 className="text-4xl font-bold">
                    Eu desenvolvo sistemas para a web
                </h2>
                <span className="text-lg pl-6 border-l-4">
                    Sou desenvolvedor FullStack sempre procurando novos desafios e formas de facilitar a interação das pessoas no que se trata de internet.
                </span>
            </div>
        </section>
    )
}