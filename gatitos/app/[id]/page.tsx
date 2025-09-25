'use client'

import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { projetos } from "@/app/sections/projetos/projetos";

import styles from "./styles.module.css";

import { Button } from "@/components/ui/button"

import {
    Card,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

interface Props {
    params: {
        id: string;
    }
}

export default function ProjetoDetalha({ params }: Props) {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const projeto = projetos.find(projeto => projeto.id === params.id);

    function decodeBase64(base64String: string) {
        const binaryString = atob(base64String);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        const decoder = new TextDecoder('utf-8');
        return decoder.decode(bytes);
    }

    function filterColors(tec: string) {
        if (tec == "React Js" || tec == "JavaScript") {
            return "orange";
        } else if (tec == "CSS3" || tec == "TaiwlindCSS" || tec == "Figma") {
            return "purple";
        } else if (tec == "HTML5" || tec == "Node Js") {
            return "green"
        }

        return "blue"
    }

    useEffect(() => {
        const fetchReadme = async () => {
            try {
                setLoading(true);
                const url = `https://api.github.com/repos/Deivyson05/${params.id}/readme`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Erro ao buscar o README. Status: ${response.status}`);
                }

                const data = await response.json();

                const decodedContent = decodeBase64(data.content);
                setContent(decodedContent);
            } catch (err) {
                let errorMessage = "Ocorreu um erro desconhecido";
                if (err instanceof Error) {
                    errorMessage = err.message;
                } else if (typeof err === "string") {
                    errorMessage = err;
                }
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchReadme();
    }, [params.id])

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Carregando README...</div>;
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center">Erro ao carregar o README: {error}</div>;
    }


    return (
        <main className="min-h-screen mt-20 flex flex-col p-10 gap-10 md:flex-row md:justify-between">
            <section className={`flex flex-col gap-4 ${styles.content} md:w-[70%]`}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </section>
            <section className="flex flex-col gap-5">
                <Card className="flex flex-col px-5 bg-gray-900">
                    <CardTitle>Tecnologias</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                        {
                            projeto?.tec.map((t, index) => (
                                <Badge variant="default" key={index}
                                    className={`text-white border-l-4 border-l-${filterColors(t)}-200 bg-${filterColors(t)}-600`}
                                >{t}</Badge>
                            ))
                        }

                    </div>
                </Card>
                <Card className="flex flex-col px-5 bg-gray-900">
                    <CardTitle>Visualizar</CardTitle>
                    <div className="flex gap-2">
                        <Button variant="default" className="flex-1 text-white cursor-pointer"
                            onClick={() => {
                                window.open(projeto?.site || "#");
                            }}
                        >Projeto</Button>
                        <Button variant="secondary" className="flex-1 text-white cursor-pointer"
                            onClick={() => {
                                window.open(projeto?.repo || "#");
                            }}
                        >Código</Button>
                    </div>
                </Card>
            </section>
        </main>
    )
}