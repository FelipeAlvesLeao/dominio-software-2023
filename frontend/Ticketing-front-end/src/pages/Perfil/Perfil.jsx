import { Header, Footer } from '../../components';
import {FaLocationDot} from "react-icons/fa6";
import { MdQrCode2 } from "react-icons/md";
import "./PerfilS.css"


export default function Perfil() {

    function mascara(e) {
        var i = e.target;
        var v = i.value;

        if (isNaN(v[v.length - 1])) {
            // Impede entrar outro caractere que não seja número
            i.value = v.substring(0, v.length - 1);
            return;
        }

        i.setAttribute("maxLength", "14");
        if (v.length === 3 || v.length === 7) i.value += ".";
        if (v.length === 11) i.value += "-";
    }

    return (
            <div className="TelaUtil">
                <Header/>
                <div className="UserIngressos">
                    <div>
                        <h1>Meus Ingressos</h1>
                    </div>
                    <div className="ingresso">
                        <div className="ingresso1">
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
                        <div className="QRcode">
                            <h2><MdQrCode2 /></h2>
                            <h1>ID ingresso</h1>
                        </div>
                    </div>


                </div>
                <div className="teste">
                    <div className="UserData">
                        <div className="dados">
                            <label>Meus Dados</label>
                        </div>
                        <div className="userdate">
                            <h1>Digite seu Nome</h1>
                            <input type="text" placeholder="Digite seu Nome"/>
                            <h1>Digite seu CPF</h1>
                            <input onInput={mascara} type="text" placeholder="Digite seu CPF"/>
                            <h1>Digite seu E-mail</h1>
                            <input type="email" placeholder="Digite seu E-mail"/>
                            <h1>Digite sua Senha</h1>
                            <input type="password" placeholder="Digite sua senha!"/>
                            <h1>Confirme sua Senha</h1>
                            <input type="password" placeholder="Digite sua senha!"/>
                        </div>
                        <div className="botoes">
                            <button className="botAlt">Alterar Dados</button>
                            <button className="botExc">Excluir Conta</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

    )
}