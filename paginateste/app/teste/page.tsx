'use client'

import { useState } from "react";

export default function Teste() {

    const [nome, setNome] = useState('');

    const handleChange = (event:any) => {
        setNome(event.target.value)
    }

    return (
        <main>
            <h1>Irei adivinhar o número que você está pensando</h1>
            
            <br/>
            <input type="text" name="nome" id="nome" onChange={handleChange} value={nome}/>
            <br/>
            <p>Você pensou no número {nome}</p>
        </main>
    );
}