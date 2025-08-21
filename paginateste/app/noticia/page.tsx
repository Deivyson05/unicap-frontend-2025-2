import { Header } from "../components/header/header";
import styles from "./styles.module.css"

export default function Noticia() {
    return (
        <main className={styles.container}>
            <div className={styles.title}>
                <h2>População brasileira está convicta que tralalero venceu o debate</h2>
                <span className={styles.subtitle}>Com sua maestria, tralalero coloca Mulssumano no chinelo.</span>
                <div className={styles.autor}>
                    <span className={styles.nome}>Por Redação Z1</span>
                    <span>11/09/2001 - Atualizado há 2 horas</span>
                </div>

                <section className={styles.content}>
                    <p>Na noite desta segunda-feira, milhões de brasileiros acompanharam o aguardado debate entre os candidatos Tralalero Tralala e Mulssumano, realizado nos estúdios da TV Nacional. E, ao que tudo indica, o povo não tem dúvidas: Tralalero venceu com folga.</p>

                    <p>Com sua retórica afiada, presença de palco imponente e domínio dos temas mais quentes da política nacional, Tralalero conquistou não apenas os especialistas, mas principalmente o público, que reagiu em massa nas redes sociais com memes, hashtags e elogios ao desempenho do candidato.</p>

                    <p>Já Mulssumano, conhecido por seu estilo mais contido, teve dificuldades em responder a algumas perguntas sobre economia e enfrentou críticas por fugir de temas sensíveis. Em certo momento, foi visivelmente encurralado após uma pergunta direta sobre saúde pública.</p>

                    <p>"O que vimos hoje foi uma aula de debate. Tralalero mostrou preparo, carisma e clareza. Não tem como negar que ele foi o nome da noite", comentou a analista política Marisa Duarte durante a transmissão pós-debate.</p>

                    <p>Uma pesquisa instantânea realizada pelo Instituto Vox Populi logo após o programa apontou que <strong>78% dos telespectadores consideraram Tralalero como o vencedor</strong> do confronto, enquanto apenas 12% apontaram Mulssumano como melhor desempenho.</p>

                    <p>Com esse resultado, Tralalero Tralala reforça sua posição como um dos favoritos na corrida presidencial, enquanto a campanha de Mulssumano precisará se reinventar para recuperar terreno nos próximos embates.</p>
                </section>
            </div>
        </main>
    );
}