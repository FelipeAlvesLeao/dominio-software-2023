import "./Style.css"
import { Header, Footer} from '../../components';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import React, { useState } from "react";

export default function ComprarIngresso() {

    const [isPopupVisible, setPopupVisible] = useState(false);

    const exibirPopup = () => {
        setPopupVisible(true);
    };

    const fecharPopup = () => {
        setPopupVisible(false);
    };

    function mascaraCartaoCredito(e) {
        var i = e.target;
        var v = i.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

        if (isNaN(v[v.length - 1])) {
            // Impede a entrada de caracteres não numéricos
            i.value = v.substring(0, v.length - 1);
            return;
        }

        i.setAttribute("maxLength", "19"); // 16 dígitos + 3 hifens
        i.value = v.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
    }

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

    function mascaraCVV(e) {
        var i = e.target;
        var v = i.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

        if (isNaN(v[v.length - 1])) {
            // Impede a entrada de caracteres não numéricos
            i.value = v.substring(0, v.length - 1);
            return;
        }

        i.setAttribute("maxLength", "3"); // CVV possui 3 dígitos
    }



    return (
        <div className="PageCompra">
            <Header />
            <div className="MaiorR">
                <div className="DadosdaCompra ml-4 ">
                    <div className="mr-80">
                        <label>Dados da Compra</label>
                    </div>
                    <div>
                        <h1>Número do Cartão</h1>
                        <input onInput={mascaraCartaoCredito} type="text" placeholder="Digite o número do Cartão" />
                    </div>
                    <div>
                        <h1>Nome no Cartão</h1>
                        <input type="text" placeholder="Digite o nome no cartão" />
                    </div>
                    <div>
                        <h1>Digite o CPF do Dono do Cartão</h1>
                        <input onInput={mascara} type="text" placeholder="Digite o CPF" />
                    </div>
                    <div className="DT mr-32">
                        <h1>Data de Nascimento</h1>
                        <input type="date" />
                    </div>
                    <div className="CVV">
                        <h1>CVV</h1>
                        <input onInput={mascaraCVV} type="text" />
                    </div>
                </div>
                <div className="DetalhesdaCompra">
                    <div className="flex">
                        <label>Detalhes da Compra</label>
                    </div>
                    <div className="infoCompra">
                        <div className="imgC">
                            <img src="src/assets/splash.png" className="mx-auto h-full w-full max-w-full" alt="Imagem do Evento"/>
                        </div>
                        <div className="textoC ml-4">
                            <label className="ml-2">Titulo do Evento</label>
                            <h1><FaLocationDot className="icon mr-2" />Endereço Evento</h1>
                            <h1><FaCalendarAlt className="icon mr-2" />Data Evento</h1>
                        </div>
                    </div>
                    <div className="valor">
                        <h2>Preço do Ingresso</h2>
                        <h3>R$ 00,00</h3>
                    </div>
                    <button className="botaoF" onClick={exibirPopup}>Finalizar Compra</button>
                </div>
            </div>
            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
            <span className="close" onClick={fecharPopup}>
              &times;
            </span>
                        <p>Preencha todos os campos!</p>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}