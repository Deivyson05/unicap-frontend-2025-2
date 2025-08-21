import styles from './styles.module.css';
import Link from 'next/link';

export function Header() {
    return (
        <header className={styles.container}>
            <span>
                ☰
            </span>

            <Link href="/">
                <h1>
                    f1
                </h1>
            </Link>



            <span>
                🔎
            </span>
        </header>
    );
}