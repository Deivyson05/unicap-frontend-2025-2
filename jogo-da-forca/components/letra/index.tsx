import styles from "./styles.module.css";

interface LetraProps {
    active: boolean;
    content: string;
}

export function Letra({active, content} : LetraProps) {
    return(
        <div className={`${styles.content} ${active == true? styles.active: ''}`}>
            {content}
        </div>
    );
}