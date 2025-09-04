import {
    Card,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton"

export function Projetos() {
    return (
        <section className="flex flex-col gap-4 p-20">
            <h2 className="text-3xl font-semibold">Projetos Concluídos</h2>
            <div className="flex flex-wrap gap-6">
                <Card className="flex flex-col w-80 h-fill p-4 gap-4 hover:scale-105 transition delay-100 ease-in">
                    <img src="https://deivyson.me/assets/proj-combogo-BceIvUR0.png" alt="banner" className="w-full h-40 rounded-md"/>
                    <h3 className="w-full h-8 font-bold text-xl flex items-center">Landing page Combogó</h3>
                    <span className="w-full h-6s text-md font-semibold flex items-center">Landing page de apresentação da Combogó</span>
                </Card>

                <Card className="flex flex-col w-80 h-fill p-4 gap-4 hover:scale-105 transition delay-100 ease-in">
                    <Skeleton className="w-full h-40"/>
                    <Skeleton className="w-full h-8 rounded-full"/>
                    <Skeleton className="w-full h-6 rounded-full"/>
                </Card>

            </div>
        </section>
    );
}