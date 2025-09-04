import { Ancora } from "./ancora"

export function Header() {
    return (
        <header className="w-full h-16 flex justify-between items-center fixed top-0 px-10 border-b-1 backdrop-blur-sm z-10 bg-opacity-10">
            <h1>Logo</h1>
            <nav className="flex gap-4 h-full items-center">
                <Ancora
                    href="#"
                >Home</Ancora>
                <Ancora
                    href="#"
                >Ofertas</Ancora>
                <Ancora
                    href="#"
                >Minha Conta</Ancora>
            </nav>
        </header>
    )
}