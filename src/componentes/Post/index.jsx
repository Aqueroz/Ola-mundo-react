import "./post.css"
import styles from "./Post.module.css"


import { Route, Routes, useParams } from "react-router-dom";
import posts from "assets/json/posts.json"
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "componentes/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

export default function Post(){
    // dando um id pra cada card gerado
    const parametros = useParams();

    const post = posts.find((post) =>
    {
        return post.id === Number(parametros.id);
    })

    // caso seja procurado um id inexistente
    if(!post){
        return <NaoEncontrada />
    }

const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)

// reutilizando o compoinente Outlet
    return(
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}>
                        {/* react-markdown */}
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Outros posts que você pode gostar:
                        </h2>
                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post} />
                                </li>
                            ))}
                        </ul>
                    </PostModelo>
                }/>
            </Route>
        </Routes>

    )

}