import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componentes/Menu';
import Rodape from 'componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from 'componentes/Post';
import NaoEncontrada from 'componentes/NaoEncontrada';
import ScrollToTop from 'componentes/ScrollToTop';

// console.log(window.location)
// // lendo a url para mudar a pagina e alterar o que será exibido no site
// // operador ternario
// const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />;

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Menu />
    <Routes>
      <Route path='/' element={<PaginaPadrao />}>
        <Route index element={<Inicio />}/>
        <Route path='sobremim' element={<SobreMim />}/>
      </Route>
      <Route path='posts/:id/*' element={<Post/>}/>
      {/* colocando os routes, cada um representa uma pagina dependendo da url */}
      {/* deve estar com uma ' / ' anes das palavras para buscar outra pagina por rota */}
      {/* <Route path='/' element={<Inicio />} />
      <Route path='/sobremim' element={<SobreMim />} /> */}
      <Route path='*' element={<NaoEncontrada />}/>
    </Routes>
    <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
