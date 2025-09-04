interface AncoraProps {
    href: string,
    target?: string,
    content: string
}

export function Ancora({href, target, content} : AncoraProps) {
    return (
        <a href={href} target={target}
            className="font-semibold"
        >
            {content}
        </a>
    );
}