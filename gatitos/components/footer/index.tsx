import { FooterLink } from "./link"
import {
    Mail,
    Phone,
    Send
} from "lucide-react";

export function Footer() {
    return (
        <footer className="p-10 flex flex-col gap-6 bg-gray-950">
            <header className="flex justify-between">
                <div>
                    <h3 className="text-2xl font-semibold">Deivyson</h3>
                    <span>FullStack Developer</span>
                </div>

                <div className="flex flex-col">
                    <strong className="font-light">
                        NAVEGAÇÃO
                    </strong>
                    <a 
                        className="font-bold" 
                        href="#home"
                    >Home</a>
                    <a 
                        className="font-bold"
                        href="#sobre"
                    >
                        Projetos
                    </a>
                    <a 
                        className="font-bold"
                        href="#sobre"
                    >
                        Sobre
                    </a>
                    <a 
                        className="font-bold"
                        href="#sobre"
                    >
                        Blog
                    </a>
                </div>

                <div className="flex flex-col">
                    <strong className="font-light">
                        SERVIÇOS
                    </strong>
                    <a 
                        className="font-bold" 
                        href="#home"
                    >WebSites</a>
                    <a 
                        className="font-bold"
                        href="#sobre"
                    >
                        APIs
                    </a>
                    <a 
                        className="font-bold"
                        href="#sobre"
                    >
                        Banco de dados
                    </a>

                </div>


                <div className="flex flex-col">
                    <strong className="font-medium text-gray-400">
                        CURRÍCULO
                    </strong>
                    <FooterLink
                        href="#"
                        name="Lattes"
                        target="_blank"
                    />
                    <FooterLink
                        href="#"
                        name="LinkedIn"
                        target="_blank"
                    />
                    <FooterLink
                        href="#"
                        name="GitHub"
                        target="_blank"
                    />
                    
                </div>
                
            </header>
            <footer className="flex justify-between items-center">
                <span className="text-gray-500">© Deivyson Ricardo Silva dos Santos 2025</span>

                <div className="flex gap-6">
                    <a href="#">
                        <Mail/>
                    </a>
                    <a href="#">
                        <Phone/>
                    </a>
                    <a href="#">
                        <Send/>
                    </a>
                </div>
            </footer>
        </footer>
    )
}