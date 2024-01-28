import { Header, Footer } from '../../components';
import "./Style.css"
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
    return (
        <div className="pageH">
            <Header />
            <img src="src/assets/splash.png" className="w-full" alt="Splash" />
            <h1 className="textoA">Eventos Proximos</h1>
            <div className="eventoPro">
                <div className="evento1">
                    <div className="flex mx-auto h-full w-full max-w-full"><img src="src/assets/splash.png" alt="Evento 1" /></div>
                    <div className="descricao">
                        <div className="texDes">
                            <div className="ml-4 mes-dia">
                                <label className="mes">Mês</label>
                                <label className="mes">Dia</label>
                            </div>
                            <label className="ml-16 nome">Nome Evento</label>
                            <label className="ml-4 preco">Preço</label>
                            <div className="location">
                                <FaLocationDot className="ml-12" /><label className="ml-1 preco">Local</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evento1">
                    <div className="flex mx-auto h-full w-full max-w-full"><img src="src/assets/splash.png" alt="Evento 2"/></div>
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
                <div className="evento1">
                    <div className="flex mx-auto h-full w-full max-w-full"><img src="src/assets/splash.png" alt="Evento 3"/></div>
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
                <div className="evento1">
                    <div className="flex mx-auto h-full w-full max-w-full"><img src="src/assets/splash.png" alt="Evento 4"/></div>
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
            </div>
            <Footer/>
        </div>
    )
}
