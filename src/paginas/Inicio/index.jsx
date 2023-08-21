import styles from "./Inicio.module.css"
import posts from "assets/json/posts.json"
import Posts from "componentes/PostCard";

export default function Inicio(){
    return(
        <main>
            <ul className={styles.posts}>
                {posts.map((post) =>(
                    <li key={post.id}>
                        <Posts post={post} />
                    </li>
                ))}
            </ul>
        </main>

    )
}