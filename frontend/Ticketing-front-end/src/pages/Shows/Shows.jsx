import { Header, Footer } from '../../components';
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import placehold from "../../assets/splash.png";

export default function Shows() {
    const [eventos, setEventos] = useState([]);
    const [tipoSelecionado, setTipoSelecionado] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8090/api/evento/all')
            .then(response => response.json())
            .then(data => {
                setEventos(data);
            })
            .catch(error => {
                console.error('Erro ao buscar eventos:', error);
            });
    }, []);

    const decodeBase64Image = (base64String) => {
        const binaryString = window.atob(base64String);
        const byteArray = new Uint8Array(binaryString.length);

        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }

        return new Blob([byteArray], { type: 'image/png' });
    };

    const filtrarEventos = (tipo) => {
        if (tipo === tipoSelecionado) {
            setTipoSelecionado(null); // Deselecionar o tipo se clicar novamente
        } else {
            setTipoSelecionado(tipo);
        }
    };

    const eventosFiltrados = tipoSelecionado
        ? eventos.filter(evento => evento.tipo === tipoSelecionado)
        : eventos;

    return (
        <div className="ShowsPage">
            <Header />
            <div className="h-full w-full flex flex-col items-center">
                <div className="filtro-tipos mt-2">
                    <button
                        className={`mr-4 px-4 py-2 rounded-full ${tipoSelecionado === 'Show' ? 'bg-blue-950 text-white' : 'bg-blue-800 text-white'}`}
                        onClick={() => filtrarEventos("Show")}
                    >
                        Shows
                    </button>
                    <button
                        className={`mr-4 px-4 py-2 rounded-full ${tipoSelecionado === 'Palestra' ? 'bg-blue-950 text-white' : 'bg-blue-800 text-white'}`}
                        onClick={() => filtrarEventos("Palestra")}
                    >
                        Palestras
                    </button>
                    <button
                        className={`mr-4 px-4 py-2 rounded-full ${tipoSelecionado === 'Filme' ? 'bg-blue-950 text-white' : 'bg-blue-800 text-white'}`}
                        onClick={() => filtrarEventos("Filme")}
                    >
                        Filmes
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full ${tipoSelecionado === 'Seminario' ? 'bg-blue-950 text-white' : 'bg-blue-800 text-white'}`}
                        onClick={() => filtrarEventos("Seminario")}
                    >
                        Seminários
                    </button>
                </div>
                <div className="eventoPro flex-wrap">
                    {eventosFiltrados.map((evento) => {

                        if (!evento.nome || evento.nome.trim() === "") {
                            return null; // Ignora eventos com nome vazio
                        }

                        const imagemSrc = evento.imagem
                            ? URL.createObjectURL(decodeBase64Image(evento.imagem))
                            : placehold;
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Link key={evento.id} to={`/teste/${evento.id}`} className="evento1">
                                <div className="flex mx-auto h-full w-full max-w-full overflow-hidden">
                                    <img
                                        src={imagemSrc}
                                        alt="Imagem do Evento"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
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
                                        <label className="preco">R$ {evento.preco},00</label>
                                        <div className="location">
                                            <FaLocationDot className="" /><label className="ml-1 preco">{evento.endereco}</label>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}
