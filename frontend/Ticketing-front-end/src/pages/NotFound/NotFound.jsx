import { Header, Footer} from '../../components';
import "./NotF.css"

export default function NotFound() {
    return(
        <div>
            <Header/>
            <h2 className='Notexto flex m-72 justify-center'>Página Não Encontrada!</h2>
            <Footer/>
        </div>
    )
}