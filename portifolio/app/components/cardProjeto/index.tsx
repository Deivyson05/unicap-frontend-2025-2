interface CardProps {
    img: string;
    nome: string;
    desc: string;
}

export function CardProjeto({img, nome, desc} : CardProps) {
    return (
        <article className="w-80 flex flex-col gap-2 bg-gray-300 p-4 rounded-xl shadow-lg hover:scale-105 transition ease-in duration-300 cursor-pointer">
            <img src={img} className="w-fill h-40 rounded-lg object-cover"/>
            <h4 className="text-xl font-semibold">{nome}</h4>
            <span>{desc}</span>
        </article>
    );
}