import { CardLivro } from "./cardLivro";
import { livros } from "./livros";

export function Books() {
    return (
        <section className="flex flex-wrap gap-2 justify-start py-4">
            {livros.map(livro => (
                <CardLivro 
                    key={livro.id}
                    titulo={livro.titulo}
                    autor={livro.autor}
                    img={livro.img}
                />
            ))}
        </section>
    );
}