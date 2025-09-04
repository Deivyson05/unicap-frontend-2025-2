import { Button } from "../ui/button"
import { Ancora } from "./ancora"
import Image from "next/image";


export function Header () {
    return (
        <header className="bg-background font-sans flex justify-between items-center py-0 px-4 border-b-1 fixed top-0 w-screen z-100 md:px-20">
          <div className="flex gap-1 items-center">
            <Image src="/blackHole.png" alt="logo" width={80} height={80}/>
            <h1 className="invisible md:inline text-xl font-semibold">Deivyson</h1>
          </div>
          <nav className="flex gap-4 items-center">
            <Ancora href="#" content="Home"/>
            <Ancora href="#" content="Sobre"/>
            <Ancora href="#" content="Blog"/>
          </nav>
        </header>
    );
}