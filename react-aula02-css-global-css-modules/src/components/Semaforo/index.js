// Importando o CSS do componente
import styles from "@/components/Semaforo/Semaforo.module.css"
// Importando o hook usestate
import { useState } from "react";

const Semaforo = () => {

    // Criando o estado para controlar as CORES
    const [cor, setCor] = useState("cinza")

    return (
        <>
        <div
        // CSS INLINE
        style={
            {
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
            }
        }>
            <h3 style={{ marginTop: "30px", color: "#000000" }}>
                Semáforo em React
            </h3>
            <br />
            {/* Exemplo de classe externa (css module) */}
            <div className={`${styles.luz} ${cor == "vermelha" ? styles.vermelha : styles.cinza}`}></div>
            <div className={`${styles.luz} ${cor == "amarela" ? styles.amarela : styles.cinza}`}></div>
            <div className={`${styles.luz} ${cor == "verde" ? styles.verde : styles.cinza}`}></div>
            <br />
            <div>
                <button className="button" onClick={() => setCor("vermelha")}>
                    Pare!
                </button>
                <button className="button" onClick={() => setCor("amarela")}>
                    Atenção!
                </button>
                <button className="button" onClick={() => setCor("verde")}>
                    Prossiga!
                </button>
            </div>
        </div>
        </>
    )
}
export default Semaforo;