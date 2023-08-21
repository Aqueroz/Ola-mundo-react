import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css"

// /* comppnente especial, substitui o link mas sem recarregar a pagina como no html normal */
// /* interpolacao */
// props
export default function MenuLink({children, to}){
        return(
        <>
            <NavLink className={({isActive}) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ''}
            `} to={to}>
                 {children}
            </NavLink>
            </>
    )
}