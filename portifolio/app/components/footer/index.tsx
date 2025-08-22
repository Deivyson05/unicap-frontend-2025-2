import { Apple, Cat, ChartColumnBig, Send } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer id="contato" className="flex flex-col w-screen p-10 font-sans gap-10">
            <header className="flex justify-between">
                <div>
                    <h4 className="text-xl text-gray-800 dark:text-gray-200 font-semibold">Deivyson Santos</h4>
                    <span className="text-gray-700 dark:text-gray-300">Fullstack Developer</span>
                </div>

                <div className="flex flex-col gap-2">
                    <strong className="text-gray-400 font-light">Curriculo</strong>
                    <Link href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K1578678E1" className="text-gray-600 dark:text-gray-300 font-semibold" target="_blank">Lattes</Link>
                    <Link href="https://www.linkedin.com/in/deivyson-ricardo-33354425b/?originalSubdomain=br" className="text-gray-600 font-semibold dark:text-gray-300" target="_blank">LinkedIn</Link>
                    <Link href="https://github.com/Deivyson05" className="text-gray-600 font-semibold dark:text-gray-300" target="_blank">Github</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <strong className="text-gray-400 font-light">Contato</strong>
                    <Link href="#" className="text-gray-600 font-semibold dark:text-gray-300">(81) 9 8358-7681</Link>
                    <Link href="mailto:deivysonrssantos@outlook.com" className="text-gray-600 font-semibold dark:text-gray-300" target="_blank">deivysonrssantos@outlook.com</Link>
                    <Link href="mailto:deivysonr52@gmail.com" className="text-gray-600 font-semibold dark:text-gray-300" target="_blank">deivysonr52@gmail.com</Link>
                </div>
            </header>
            <footer className="flex justify-between">
                <span className="text-gray-400">
                    © 2025 Deivyson Santos
                </span>

                <div className="flex gap-8">
                    <Link href="#" className="hover:-translate-y-2 transition duration-350">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="lucide lucide-instagram-icon lucide-instagram"
                            viewBox="0 0 24 24"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37M17.5 6.5h.01"></path>
                        </svg>
                    </Link>

                    <Link href="#" className="hover:-translate-y-2 transition duration-350">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="lucide lucide-linkedin-icon lucide-linkedin"
                            viewBox="0 0 24 24"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </Link>

                    <Link href="#" className="hover:-translate-y-2 transition duration-350">
                        <Send />
                    </Link>

                    <Link href="#" className="hover:-translate-y-2 transition duration-350">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="lucide lucide-github-icon lucide-github"
                            viewBox="0 0 24 24"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                    </Link>
                </div>
            </footer>
        </footer>
    );
}