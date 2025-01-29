import TuneIcon from '@mui/icons-material/Tune';
import estilos from './FiltroProduto.module.scss'


const FiltroProduto = () => {
    return (
        <>
            <div className={estilos.Container}>
                <div className={estilos.Filtro}>
                    <h2>Filtro </h2>
                    <TuneIcon style={{color: 'black'}}/>
                </div>
               
                <ul>
                    <li>Pratos</li>
                    <li>Copos</li>
                    <li>Rechaud</li>
                    <li>Garrafas</li>
                    <li>Talheres</li>
                    <li>Vidros</li>
                    <li>Travessas</li>
                    <li>Inox</li>
                    <li>Louças</li>
                    <li>Xícaras</li>
                    <li>Prataria</li>
                    <li>Madeira</li>
                    <li>Panela</li>
                    <li>Toalhas</li>
                    <li>Equipamentos</li>
                </ul>
                
            </div>
            
        </>
    )
}

export default FiltroProduto