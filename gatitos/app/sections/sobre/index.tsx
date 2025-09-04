import {
    Card,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { 
    Sparkles,
    Apple,
    BookHeart,
    Plane,
    Handshake
} from "lucide-react";


export function Sobre() {
    return (
        <section className="p-20 flex gap-20 h-fill items-center justify-center">
            <div className="flex flex-col gap-8">
                <h2 className="text-4xl font-semibold">Sobre a StackHole</h2>

                <h3 className="text-2xl">Nossos Valores:</h3>
                
                <ul className="flex flex-col gap-4">
                    <li className="flex gap-4">
                        <Apple width={30} height={30}/>
                        Inovação: Buscamos sempre as soluções mais modernas e criativas para desafios complexos.
                    </li>
                    <li className="flex gap-4">
                        <Sparkles width={30} height={30}/>
                        Qualidade: Comprometidos com excelência, entregamos resultados que superam as expectativas.
                    </li>
                    <li className="flex gap-4">
                        <BookHeart width={30} height={30}/>
                        Transparência: Mantemos uma comunicação clara e aberta em todos os processos.
                    </li>
                    <li className="flex gap-4">
                        <Plane width={30} height={30}/>
                        Agilidade: Trabalhamos de forma rápida e eficiente, garantindo que cada projeto seja entregue no prazo.
                    </li>
                    <li className="flex gap-4">
                        <Handshake width={30} height={30}/>
                        Comprometimento: Estamos dedicados ao sucesso dos nossos clientes e ao impacto positivo que podemos gerar através da tecnologia.
                    </li>
                </ul>
            </div>

            <Card className="flex flex-col items-center w-80 h-fit py-8 px-4 max-w-200">
                <img src="https://tse3.mm.bing.net/th/id/OIP.qNfoguQF-UXY1F1MdXDXrAHaHY?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3" alt="profile" width={100} height={100} className="rounded-full"/>
                <CardTitle>StackHole</CardTitle>
                <CardDescription>Mil Milhões Repositórios</CardDescription>
                <Button className="text-white cursor-pointer w-full">Ver repositório</Button>
            </Card>
        </section>
    );
}