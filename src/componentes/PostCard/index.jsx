import React from "react"
import styles from "./Post.module.css"
import { Link } from "react-router-dom"
import BotaoPrincipal from "componentes/BotaoPrincipal"

export default function PostCard({post}){
    return(
        // cada card leva a um link com um id próprio
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa}
                // a pasta deve estar no public
                src={`/assets/posts/${post.id}/capa.png`} 
                alt="imagem de capa do post" />

                <h2 className={styles.titulo}>{post.titulo}</h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}