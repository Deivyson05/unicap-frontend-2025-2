

import Link from "next/link";


interface AncoraProps {
    href: string,
    target?: string,
    content: string,
    active: boolean
}

export function Ancora({href, target, content, active} : AncoraProps) {
    
    return (
        <Link href={href} target={target}
            className={`font-semibold ${active == true? "text-primary": "text-foreground"}`}
        >
            {content}
        </Link>
    );
}