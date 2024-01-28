import { useEffect, useState } from 'react';
import { Header, Footer } from '../../components';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import {Link, useParams} from 'react-router-dom';
import "./StyleTeste.css";

export default function Teste() {
    const { id } = useParams();
    const [eventoSelecionado, setEventoSelecionado] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:8090/api/evento/${id}`)
            .then(response => response.json())
            .then(data => {
                setEventoSelecionado(data);
            })
            .catch(error => {
                console.error(`Erro ao buscar evento com ID ${id}:`, error);
            });
    }, [id]);

    if (!eventoSelecionado) {
        return <p>Carregando...</p>; // ou qualquer indicador de carregamento que você preferir
    }

    return (
        <div className="pageTeste">
            <Header/>
            <div className="flex items-center justify-center mt-4">
                <div className="imagemVisualizar p-4">
                    <img src="src/assets/splash.png" className="mx-auto h-full w-full max-w-full" alt="Imagem do Evento"/>
                </div>
            </div>
            <div className="testt">
                <div className="descricaoEvento" >
                    <div className="detalhamento">
                        <label className="tipo1">{eventoSelecionado.nome}</label>
                        <label className="mt-2 tipo2"><FaLocationDot className="mr-2 icon" />{eventoSelecionado.endereco}</label>
                        <label className="mt-2 tipo2"><FaCalendarAlt className="mr-2 icon" />Data</label>
                    </div>
                    <div className="detalheCompra">
                        <div className="textoC">
                            <label>Ingressos a partir de</label>
                            <label>R$ {eventoSelecionado.preco}</label>
                        </div>
                        <Link key={eventoSelecionado.id} to={`/comprar/${eventoSelecionado.id}`}>
                            <button className="buton">Comprar</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="testt">
                <div className="infoEvento">
                    <label className="tipo1">Informações do Evento</label>
                    <div className="infoEvento2">
                        <label className="tipo3">{eventoSelecionado.descricao}</label>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
