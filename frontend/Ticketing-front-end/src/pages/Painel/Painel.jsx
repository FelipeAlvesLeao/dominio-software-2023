import { Header, Footer} from '../../components';
import { IoPerson } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import { Link } from "react-router-dom";
import "./PainelS.css"


export default function Painel() {
    return(
        <div className="PainelP">
            <Header/>
                <div className="bodyP">
                    <div className="CadastrarEvento">
                        <Link to="/registrar"><h1><MdEventNote /></h1></Link>
                        <h2>Cadastrar Evento</h2>
                    </div>
                    <div className="CadastrarEvento">
                        <Link to="/perfil"><h1><IoPerson/></h1></Link>
                        <h2>Meu Perfil</h2>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}