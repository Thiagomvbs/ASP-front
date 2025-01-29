import estilos from './Product.module.scss'
import Navbar from "../../components/Navbar"
import { useEffect, useState } from 'react'
import FiltroProduto from '../../components/FiltroProduto';
import Rodape from '../../components/Rodape';
import { useSearchParams } from 'react-router';
import ProdutoPagina from '../../components/ProdutoPagina';

function App(){

    const [text, setText] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pagina = Number(searchParams.get('pagina') || 1); // Página atual, default 1
    const busca = searchParams.get('busca') || '';


    useEffect(() => {
        if (text) {
            setSearchParams({ busca: text }); // Quando houver busca, apenas 'busca' deve estar na URL
        } else {
            const params: { pagina?: string } = {};
            if (searchParams.get('pagina')) {
                params.pagina = searchParams.get('pagina')!;
            }
            setSearchParams(params); // Mantém a página se já estiver definida
        }
    }, [text, searchParams, setSearchParams]);
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Previne o envio do formulário
    }


    return(
        <>
            <Navbar/>
            <div className={estilos.Cabecalho}>
                <p>Home &gt; Produtos</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="search"
                        placeholder='Buscar produtos...' 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button type="submit"></button>
                </form>
            </div>
            <main className={estilos.Conteudo}>
                <aside>
                    <FiltroProduto/>
                </aside>
                <ProdutoPagina pagina={pagina} busca={busca}/>
            </main>
            <Rodape />
            
        </>
    )
}

export default App