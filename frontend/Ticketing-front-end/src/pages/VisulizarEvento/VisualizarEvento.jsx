import "./Style.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";



export default function VisualizarEvento() {
    return(
        <div className="page1">
            <div className="figuraImagem"></div>
            <div className="detalhesEvento">
                <div className="detalhes">
                <label className="tituloEvento">Titulo do Evento</label>
                    <div className="eventoTexto"><label className="textoEvento">
                        Endereço do Evento</label><FaLocationDot className="icon"/></div>
                    <div className="eventoTexto"><label className="textoEvento">
                        Data do Evento</label><FaCalendarAlt className="icon"/></div>
                </div>
                <div className="comprarIngresso">
                    <label className="preco">Ingressos a partir de R$ XX,XX</label>
                    <div><button className="botaoComprar">Comprar</button></div>
                </div>
            </div>
            <div className="descricaoEvento">
                <label className="tituloEvento">Descrição Completa</label>
                <label className="descricao"> Decrição do Evento</label>
            </div>
        </div>
)
}