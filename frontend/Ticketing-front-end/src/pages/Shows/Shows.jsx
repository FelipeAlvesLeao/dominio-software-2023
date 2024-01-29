import { Header, Footer } from '../../components';
import { FaLocationDot } from "react-icons/fa6";
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';


export default function Shows() {

    const [eventos, setEventos] = useState([]);

    const objHeaders = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    };

    useEffect(() => {
        fetch('http://localhost:8090/api/evento/all', objHeaders)
            .then(response => response.json())
            .then(data => {
                setEventos(data);
            })
            .catch(error => {
                console.error('Erro ao buscar eventos:', error);
            });
    }, []);

    return (
        <div className="ShowsPage">
            <Header/>
            <div className="h-full w-full">
                <div className="eventoPro flex-wrap ">
                    {eventos.map((evento) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                    <Link key={evento.id} to={`/teste/${evento.id}`} className="evento1">
                        <div className="flex mx-auto h-full w-full max-w-full"><img src="src/assets/splash.png" alt="Imagem do Evento" /></div>
                        <div className="descricao">
                            <div className="texDes">
                                <div className="mes-dia">
                                    <label className="mes"> {new Date(evento.dataInicial).toLocaleDateString('pt-BR', {
                                        day: 'numeric',
                                        month: 'numeric',
                                        year: 'numeric',
                                    })}</label>
                                    <label className="mes"> {evento.horario}</label>
                                </div>
                                <label className="nome">{evento.nome}</label>
                                <label className="preco">R$ {evento.preco}</label>
                                <div className="location">
                                    <FaLocationDot className=""/><label className="ml-1 preco">{evento.endereco}</label>
                                </div>
                            </div>
                        </div>
                    </Link>
                    )
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}