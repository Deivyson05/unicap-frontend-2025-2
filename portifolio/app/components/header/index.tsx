import Link from "next/link";
import Image from "next/image"

export function Header() {
    return (
        <header className={`
            flex items-center justify-between py-4 px-6
            fixed w-screen
            border-b 
            font-sans
            bg-background
            z-100
        `}> 
            <a href="#home">
                <Image src="/logo.png" alt="logo" width={60} height={60} className="filter dark:invert"/>
            </a>
            <nav className={`
                    flex gap-4
                `}>
                <a href="#sobre" className="p-4">Sobre</a>
                <a href="#projetos" className="p-4">Projetos</a>
                <a href="#habilidades" className="p-4">Habilidades</a>
                <a href="#contato" className="p-4">Contato</a>
            </nav>
        </header>
    );
}