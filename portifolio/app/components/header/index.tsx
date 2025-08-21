import Link from "next/link";
import Image from "next/image"

export function Header() {
    return (
        <header className={`
            flex items-center justify-between p-4
            fixed w-screen
            border-b 
            font-sans
            bg-background
            z-100
        `}> 
            <a href="#home">
                <Image src="/logo.png" alt="logo" width={60} height={60}/>
            </a>
            <nav className={`
                    flex gap-4
                `}>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>
    );
}