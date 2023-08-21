import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";


export default function PaginaPadrao(){
    return(
        <main>
            <Banner />
            {/* renderizar rota, só isso mesmo .-. */}
            {/* rotas aninhadas, torna esta uma rota pai */}
            <Outlet />
        </main>
    )
}