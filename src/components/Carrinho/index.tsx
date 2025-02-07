import { Link } from 'react-router'
import { useCarrinhoContext } from '../../hooks/useCarrinhoContext'
import CartItem from '../CartItem'
import estilos from './Carrinho.module.scss'

const Carrinho = ({carrinhoAberto, toggleCarrinho}: {carrinhoAberto: any, toggleCarrinho: any}) => {

    const {carrinho} = useCarrinhoContext()

    return (
        <section className={`${estilos.Cart} ${carrinhoAberto ? estilos.carrinhoAberto : ""}`} >
            <div className={estilos.Header}>
                <button onClick={toggleCarrinho} className={estilos.Fechar}>X</button>
                <h2>Meu Carrinho</h2>
            </div>
            
            {carrinho.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <>
                    <div className={estilos.CartItems}>
                        {carrinho.map((produto) => (
                            <CartItem key={produto.id} produto={produto} variant='sidebar' />
                        ))}
                    </div>
                    <Link className={estilos.Carrinho} to='/cart'>Ir para Carrinho</Link>
                </>
            )}
        </section>
    )

}


export default Carrinho