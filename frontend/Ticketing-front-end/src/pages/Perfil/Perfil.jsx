import { useEffect, useState } from 'react';
import { Header, Footer } from '../../components';
import { FaLocationDot } from 'react-icons/fa6';
import { MdQrCode2 } from 'react-icons/md';
import './PerfilS.css';
import { useAuth } from '../../AuthContext.jsx';

export default function Perfil() {
    const { userId } = useAuth();

    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8090/api/evento/organizador/${userId}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar eventos');
                }
                const data = await response.json();
                setEventos(data);
            } catch (error) {
                console.error('Erro ao buscar eventos:', error);
            }
        };

        fetchData();
    }, []);

    if (!userId) {
        return (
            <div className="flex-column">
                <Header />
                <div className="restrito">
                    <h2>Área Restrita, por favor faça Login!</h2>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="TelaUtil">
            <Header/>
            <div className="UserIngressos">
                <div>
                    <h1>Meus Eventos</h1>
                </div>
                {eventos.map((evento) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className="ingresso">
                                <div className="ingresso1">
                                    <div className="flex mx-auto h-full w-full max-w-full">
                                        <img src="src/assets/splash.png" alt="Evento 1"/>
                                    </div>
                                    <div className="descricao">
                                        <div className="texDes">
                                            <div className="ml-4 mes-dia">
                                                <label
                                                    className="mes">{new Date(evento.dataInicial).toLocaleDateString('pt-BR', {
                                                    day: 'numeric',
                                                    month: 'numeric',
                                                    year: 'numeric',
                                                })}</label>
                                                <label className="mes">{evento.horario}</label>
                                            </div>
                                            <label className="ml-16 nome">{evento.nome}</label>
                                            <label className="ml-4 preco">{evento.preco}</label>
                                            <div className="location">
                                                <FaLocationDot className="ml-12"/><label
                                                className="ml-1 preco">{evento.endereco}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="QRcode">
                                    <h2><MdQrCode2/></h2>
                                    <h1>ID ingresso</h1>
                                </div>
                            </div>
                        )
                })}
            </div>
            <div className="UserIngressos mr-16">
                <div>
                    <h1>Meus Ingressos</h1>
                </div>
                <div className="ingresso">
                    <div className="ingresso1">
                        <div className="flex mx-auto h-full w-full max-w-full"><img src="src/assets/splash.png"
                                                                                    alt="Evento 1"/></div>
                        <div className="descricao">
                            <div className="texDes">
                                <div className="ml-4 mes-dia">
                                    <label className="mes">Mês</label>
                                    <label className="mes">Dia</label>
                                </div>
                                <label className="ml-16 nome">Nome Evento</label>
                                <label className="ml-4 preco">Preço</label>
                                <div className="location">
                                    <FaLocationDot className="ml-12"/><label className="ml-1 preco">Local</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="QRcode">
                        <h2><MdQrCode2/></h2>
                        <h1>ID ingresso</h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}