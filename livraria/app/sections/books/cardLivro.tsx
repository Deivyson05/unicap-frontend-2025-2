import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Skeleton } from "@/components/ui/skeleton"

interface LivroProps {
    titulo: string,
    autor: string,
    img: string
}

export function CardLivro({titulo, autor, img}: LivroProps) {
    return (
        <Card className="w-60 p-2 gap-2 transition-all cursor-pointer hover:scale-105">
            <img src={img} className="w-full h-80 object-cover rounded-md" />
            <CardTitle className="w-full text-lg">{titulo}</CardTitle> 
            <CardDescription className="w-full text-md">{autor}</CardDescription>
        </Card>
    )
}