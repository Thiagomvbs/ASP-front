import estilos from './CardProduto.module.scss'
import { Pagination } from "@mui/material";
import { useSearchParams } from "react-router";
import useProdutos from "../../hooks/useProdutos";


const CardProduto = ({pagina, busca}: {pagina: number, busca: string}) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const {produtos, totalCount} = useProdutos(pagina, busca);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) =>{
        if(busca){
            setSearchParams({busca}, {replace: true})
        } else {
            setSearchParams({pagina: newPage.toString() }, {replace: true})
        }
    };
    

    return (
        <section className={estilos.ProdutoContainer}>
            {produtos.map((produto) => (
                <div key={produto.id} className={estilos.ProdutoCard}>
                    <div>
                        <img src={produto.imagem} alt={produto.nome} />
                    </div>
                    <div className={estilos.ProdutoInfo}>
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                    </div>
                    <div className={estilos.Button}>
                        <button>
                            Adicionar no carrinho
                        </button>
                    </div>
                </div>
            ))}
            {(totalCount > 20)}
            <Pagination 
                page={pagina}
                count={Math.ceil(totalCount / 20) } 
                onChange={handlePageChange}
                
            />
        </section>
    )
}

export default CardProduto