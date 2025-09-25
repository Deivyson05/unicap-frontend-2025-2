'use client'

import { useRouter } from "next/navigation";

import {
    Card,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

import Image from "next/image";

import { projetos } from "./projetos";

import { CardProjeto } from "@/components/cardProjeto";

import { useState, useEffect } from 'react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function Projetos() {
    const router = useRouter();

    const [width, setWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])



    return (
        <section className="flex flex-col items-center gap-4 px-20 py-10">
            <h2 className="text-2xl font-semibold text-center md:text-3xl md:text-left">Projetos Concluídos</h2>
            <div className={width > 480 ? "flex flex-wrap gap-6 justify-center" : "flex flex-col items-center"}>

                {
                    width > 480 ? (
                        projetos.map(projeto => (
                            <CardProjeto
                                img={projeto.img}
                                title={projeto.nome}
                                description={projeto.desc}
                                key={projeto.id}
                                id={projeto.id}
                            />
                        ))
                    ) : (
                        <Carousel className="w-60">
                            <CarouselContent>
                                {projetos.map(projeto => (
                                    <CarouselItem className="flex justify-center" key={projeto.id}>
                                        <Card className="flex flex-col w-74 h-fill p-4 gap-4 rounded-lg bg-gray-900"
                                            onClick={() => {
                                                router.push(`/${projeto.id}`);
                                            }}
                                        >
                                            <img src={projeto.img} alt="banner" className="w-full h-40 rounded-md object-cover" />
                                            <h3 className="w-full h-8 font-bold text-xl flex items-center">{projeto.nome}</h3>
                                            <span className="w-full h-6s text-md font-semibold flex items-center">{projeto.desc}</span>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    )
                }

            </div>
        </section>
    );
}