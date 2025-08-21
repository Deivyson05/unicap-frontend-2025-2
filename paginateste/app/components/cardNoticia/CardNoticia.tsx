import styles from './styles.module.css';
import Link from 'next/link';

interface props {
    img: string,
    cat1: string,
    cat2: string,
    titulo: string,
    subtitulo: string,
    tempo: number
}

export function CardNoticia({img, cat1, cat2, titulo, subtitulo, tempo} : props) {
    return(
        <article className={styles.container}>
            <img src={img} alt="banner" />
            <div>
                <span className={styles.categoria}>{cat1}</span>
                <Link href="/noticia">
                    <h3>{titulo}</h3>
                </Link>
                <p>{subtitulo}</p>
                <span className={styles.tempo}>Há {tempo} horas - Em {cat2}</span>
            </div>
        </article>
    );
}