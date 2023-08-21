import styles from "./Rodape.module.css"
// importando um arquivo svg
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg"


export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            <p>Desenvolvido por Alura</p>
        </footer>
    )
}