import styles from "./BoatoPrincipal.module.css"

export default function BotaoPrincipal({children, tamanho}){
    return(
        <button className={`
        ${styles.botaoPrincipal}
        ${styles[tamanho]}
        `}>
            {/* deve ser em minusculo */}
            {children}
        </button>
    )
}