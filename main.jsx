import React from "react";
import { createRoot } from "react-dom/client";
import { Pazienti } from "./Pazienti";
import { Appuntamenti } from "./Appuntamenti";

function App() {
    const [schermata,setSchermata] = React.useState("pazienti");

    let pagina;

    if(schermata === "pazienti"){
        pagina = <Pazienti/>
     }else if(schermata === "appuntamenti") {
        pagina = <Appuntamenti/>
    } else {
        pagina = <h1 style={{color: "var(--errore)"}}>Se vedi questo non dovresti essere qui</h1>
    }

        return <div>
             <h1>Studio Dentistico v2</h1>
            <Menu setSchermata={setSchermata}/>
            {pagina}
        </div>    

}
function Menu({setSchermata}){
    return <div>
        <button onClick={() =>setSchermata("appuntamenti")}>Appuntamenti</button>
        <button onClick={() => setSchermata("pazienti") } >Pazienti</button>
    </div>

}






const contenitore = document.getElementById("root");
const root = createRoot(contenitore);
root.render(<App />);

