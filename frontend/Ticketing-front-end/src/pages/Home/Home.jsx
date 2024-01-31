import { Header, Footer } from '../../components';
import "./Style.css"
import { FaLocationDot } from "react-icons/fa6";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import placehold from "../../assets/splash.png"

export default function Home() {

    const [eventos, setEventos] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8090/api/evento/all')
            .then(response => response.json())
            .then(data => {
                // Filtrar apenas os eventos futuros
                const eventosFuturos = data.filter(evento => new Date(evento.dataInicial) > new Date());

                // Ordenar os eventos futuros com base na data de início
                const eventosOrdenados = eventosFuturos.sort((a, b) => new Date(a.dataInicial) - new Date(b.dataInicial));

                // Pegar os primeiros 4 eventos ordenados
                const eventosProximos = eventosOrdenados.slice(0, 4);

                setEventos(eventosProximos);
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

    return (
        <div className="pageH">
            <Header />
            <img src="src/assets/splash.png" className="w-full" alt="Splash" />
            <h1 className="textoA">Eventos Próximos</h1>
            <div className="eventoPro">
                {eventos.map((evento) => {
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
                                        <label
                                            className="mes">{new Date(evento.dataInicial).toLocaleDateString('pt-BR', {
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
            <Footer/>
        </div>
    )
}
