import React from "react";
import { createRoot } from "react-dom/client";

export function Pazienti(){
    const [nome,setNome] = React.useState("temp");

    const [pazienti,setPazienti] = React.useState(['Gianfranco', 'Giangigillo','SoloGian','GianPancrazio']);

    return <div>
        <h2>Pazienti</h2>
        <input type="text" id="nomepaziente" name="nomepaziente" placeholder="Nome Del Paziente" value={nome} onChange={evento => setNome(evento.target.value)}/>
        <p>{nome}</p>
        <button onClick={() => {setPazienti(lista => [...lista,nome]); setNome("")}}>Aggiungi</button>
        <ul>
            {pazienti.map(nome => <li key={nome}>{nome}</li>)}
        </ul>
    
    
    
    </div>
}