import { Link } from "react-router";
import estilos from './Navbar.module.scss';

const Navbar = () => {
    return (<nav className={estilos.Link}>
        <ul>
            <li>
                <Link to= '/'>Home</Link>
            </li>
            <li>
                <Link to='/rent'>Como Alugar</Link>
            </li>
            <li>
                <Link to='/products'>Produtos</Link>
            </li>
            <li>
                <Link to='/budget'>Orçamento</Link>
            </li>
        </ul>
    </nav>)
}

export default Navbar;