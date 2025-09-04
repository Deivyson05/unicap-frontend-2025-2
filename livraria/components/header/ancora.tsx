import React from "react";

interface AncoraProps {
    href: string;
    children: React.ReactNode;
    target?: string;
}

export function Ancora({href, children, target} : AncoraProps) {
    return (
        <a 
            href={href}
            target={target}
            className="py-4.5 transition-all hover:border-b-4"
        >
            {children}
        </a>
    );
}