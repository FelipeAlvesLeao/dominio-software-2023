import { useEffect, useState } from 'react';
import { Header, Footer } from '../../components';
import { FaLocationDot } from 'react-icons/fa6';
import { MdQrCode2 } from 'react-icons/md';
import { IoTrashBinOutline } from "react-icons/io5";
import './PerfilS.css';
import { useAuth } from '../../AuthContext.jsx';
import placehold from "../../assets/splash.png";

export default function Perfil() {
    const {userId} = useAuth();

    const [eventos, setEventos] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [ticketMap, setTicketMap] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseEvento = await fetch(`http://localhost:8090/api/evento/organizador/${userId}`);
                if (!responseEvento.ok) {
                    throw new Error('Erro ao buscar eventos');
                }
                const dataEvento = await responseEvento.json();
                setEventos(dataEvento);

                const responseTicket = await fetch(`http://localhost:8090/api/ticket/usuario/${userId}`);
                if (!responseTicket.ok) {
                    throw new Error('Erro ao buscar tickets');
                }
                const dataTicket = await responseTicket.json();
                setTickets(dataTicket);

                const ticketInfoMap = {};
                dataTicket.forEach((ticket) => {
                    ticketInfoMap[ticket.id] = ticket.evento;
                });
                setTicketMap(ticketInfoMap);
            } catch (error) {
                console.error('Erro ao buscar eventos ou tickets:', error);
            }
        };

        fetchData();
    }, [userId]);

    const handleDeleteEvento = async (idEvento) => {
        try {
            const response = await fetch(`http://localhost:8090/api/evento/delete/${idEvento}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Erro ao excluir evento');
            }

            // Atualize a lista de eventos após a exclusão bem-sucedida
            const updatedEventos = eventos.filter((evento) => evento.id !== idEvento);
            setEventos(updatedEventos);
        } catch (error) {
            console.error('Erro ao excluir evento:', error);
        }
    };

    if (!userId) {
        return (
            <div className="flex-column">
                <Header/>
                <div className="restrito">
                    <h2>Área Restrita, por favor faça Login!</h2>
                </div>
                <Footer/>
            </div>
        );
    }

    const decodeBase64Image = (base64String) => {
        const binaryString = window.atob(base64String);
        const byteArray = new Uint8Array(binaryString.length);

        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }

        return new Blob([byteArray], { type: 'image/png' });
    };

    return (
        <div className="TelaUtil">
            <Header/>
            <div className="UserIngressos">
                <div>
                    <h1>Meus Eventos</h1>
                </div>
                {eventos.map((evento) => {
                    const imagemSrc = evento.imagem
                        ? URL.createObjectURL(decodeBase64Image(evento.imagem))
                        : placehold;
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div className="ingresso" key={evento.id}>
                            <div className="ingresso1">
                                <div className="flex mx-auto h-full w-full max-w-full">
                                    <img src={imagemSrc} alt="Imagem do Evento"/>
                                </div>
                                <div className="descricao">
                                    <div className="texDes">
                                        <div className="ml-1 mes-dia">
                                            <label
                                                className="mes">{new Date(evento.dataInicial).toLocaleDateString('pt-BR', {
                                                day: 'numeric',
                                                month: 'numeric',
                                                year: 'numeric',
                                            })}</label>
                                            <label className="mes">{evento.horario}</label>
                                        </div>
                                        <label className="ml-1 nome">{evento.nome}</label>
                                        <label className="ml-1 preco">R$ {evento.preco},00</label>
                                        <div className="location">
                                            <FaLocationDot className="ml-1"/><label
                                            className="ml-1 preco">{evento.endereco}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="binIcon" onClick={() => handleDeleteEvento(evento.id)}>
                                <h2><IoTrashBinOutline/></h2>
                                <h1>Excluir Evento</h1>
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className="UserIngressos mr-16">
                <div>
                    <h1>Meus Ingressos</h1>
                </div>
                {tickets.map((ticket) => {
                    const eventoInfo = ticketMap[ticket.id];

                    // Verifica se eventoInfo existe e não é nulo antes de acessar propriedades
                    if (eventoInfo && eventoInfo.dataInicial) {
                        const imagemSrc = eventoInfo.imagem
                            ? URL.createObjectURL(decodeBase64Image(eventoInfo.imagem))
                            : placehold;
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className="ingresso" key={ticket.id}>
                                <div className="ingresso1">
                                    <div className="flex mx-auto h-full w-full max-w-full">
                                        <img src={imagemSrc} alt="Imagem do Evento"/>
                                    </div>
                                    <div className="descricao">
                                        <div className="texDes">
                                            <div className="ml-1 mes-dia">
                                                <label
                                                    className="mes">{new Date(eventoInfo.dataInicial).toLocaleDateString('pt-BR', {
                                                    day: 'numeric',
                                                    month: 'numeric',
                                                    year: 'numeric',
                                                })}</label>
                                                <label className="mes">{eventoInfo.horario}</label>
                                            </div>
                                            <label className="ml-1 nome">{eventoInfo.nome}</label>
                                            <label className="ml-1 preco">R$ {eventoInfo.preco},00</label>
                                            <div className="location">
                                                <FaLocationDot className="ml-12"/><label
                                                className="ml-1 preco">{eventoInfo.endereco}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="QRcode">
                                    <h2><MdQrCode2/></h2>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={ticket.id}>
                            </div>
                        );
                    }
                })}
            </div>
            <Footer/>
        </div>
    );
}