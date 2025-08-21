import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/header/header";
import { CardNoticia } from "./components/cardNoticia/CardNoticia";

export default function Home() {

  const noticias = [
    {
      img: "https://i.ytimg.com/vi/6vLK3W8DVpc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwzA6GIjmg3hDRE-GsEk70hJKaEg",
      cat1: "Debate Presidencial",
      titulo: "População brasileira está convicta que tralalero venceu o debate",
      subtitulo: "Com sua maestria, tralalero coloca Mulssumano no chinelo.",
      tempo: 5,
      cat2: "Política"
    },
    {
      img: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/08/homem-careca.webp?w=1200&h=675&crop=1",
      cat1: "Violência",
      titulo: "Homem Careca é arrastado pelos cabelos nas ruas da capital de São Paulo",
      subtitulo: "'Não aguento mais tanta calvofobia nesse mundo' exclama o careca.",
      tempo: 6,
      cat2: "Criminalidade"
    },
    {
      img: "https://www.diariodosertao.com.br/wp-content/uploads/2017/12/alface.jpg",
      cat1: "Tragédia",
      titulo: "Homem sobe em pé de alface e ameaça se jogar",
      subtitulo: "Cansado de sua vidade programador, Seu Emanuel atenta contra sua própria vida.",
      tempo: 6,
      cat2: "Fatalidade"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomB6rdDOMPhAFf6JNWy484yNMlITETubgstLyDB8MbIVk-GDBtT9s_FFo8SL1swUZ-bM&usqp=CAU",
        cat1: "Violência",
        titulo: "Mulher banguela mata marido a dentadas",
        subtitulo: "'Tudo por conta de ciúmes!' exclama o filho do casal.",
        tempo: 6,
        cat2: "Fatalidade"
    },
  ]


  return (
    <main className={styles.page}>

      {
        noticias.map(noticia => (
          <CardNoticia
            img={noticia.img}
            cat1={noticia.cat1}
            titulo={noticia.titulo}
            subtitulo={noticia.subtitulo}
            tempo={noticia.tempo}
            cat2={noticia.cat2}
          />
        ))
      }

      
    </main>
  );
}
