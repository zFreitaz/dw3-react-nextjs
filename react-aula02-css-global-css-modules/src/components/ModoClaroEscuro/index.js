import styles from "@/components/Semaforo/Semaforo.module.css"
import { useState } from "react";

const ModoClaroEscuro = () => {

    const [modo, setModo] = useState("cinza")

    return (
        <>
        <div
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
                Modo Claro/Escuro
            </h3>
            <br />
            {/* Exemplo de classe externa (css module) */}
            <div className={`${styles.luz} ${modo == "branco" ? styles.branco : styles.cinza}`}></div>
            <br />
            <div>
                <button className="button" onClick={() => setModo("branco")}>
                    Claro
                </button>
                <button className="button" onClick={() => setModo("preto")}>
                    Escuro
                </button>
            </div>
        </div>
        </>
    )
}
export default ModoClaroEscuro;