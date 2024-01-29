import "./Style.css"
import { Header, Footer} from '../../components';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import {useNavigate, useParams} from 'react-router-dom';
import { useAuth } from '../../AuthContext.jsx';
import {useEffect, useState} from "react";
import placehold from "../../assets/splash.png";

const decodeBase64Image = (base64String) => {
    const binaryString = window.atob(base64String);
    const byteArray = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i++) {
        byteArray[i] = binaryString.charCodeAt(i);
    }

    return new Blob([byteArray], { type: 'image/png' });
};

export default function ComprarIngresso() {

    const { userId } = useAuth();
    const navigate = useNavigate();

    if(!userId){
        navigate('/login');
    }

    {/*Dados do evento*/}
    const { id } = useParams();
    const [eventoSelecionado, setEventoSelecionado] = useState(null);

    const [numeroCartao, setNumeroCartao] = useState("");
    const [nomeCartao, setNomeCartao] = useState("");
    const [cpfDonoCartao, setCpfDonoCartao] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cvv, setCvv] = useState("");

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
    {/*Fim dados do Evento*/}


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

    const formatarDataAtual = () => {
        const dataAtual = new Date();
        return dataAtual.toDateString() + ' ' + dataAtual.toLocaleTimeString('en-US', { timeZone: 'America/Sao_Paulo' });
    };

    const finalizarCompra = async () => {

        if (!numeroCartao || !nomeCartao || !cpfDonoCartao || !dataNascimento || !cvv) {
            alert("Por favor, preencha todos os campos antes de finalizar a compra.");
            return;
        }

        var formdata = new FormData();
        formdata.append("evento", eventoSelecionado.id);
        formdata.append("usuario", userId.toString());
        formdata.append("dataCompra", formatarDataAtual());

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        try {
            const response = await fetch("http://localhost:8090/api/ticket/add", requestOptions);
            const result = await response.text();

            // Se a compra foi bem-sucedida, redireciona para a página /perfil
            if (response.ok) {
                console.log(result); // Pode querer fazer algo com o resultado aqui
                navigate('/perfil');
            } else {
                console.error('Erro ao finalizar a compra:', result);
                // Pode querer exibir uma mensagem de erro ao usuário aqui
            }
        } catch (error) {
            console.error('Erro ao finalizar a compra:', error);
            // Pode querer exibir uma mensagem de erro ao usuário aqui
        }
    };

    const imagemSrc = eventoSelecionado.imagem
        ? URL.createObjectURL(decodeBase64Image(eventoSelecionado.imagem))
        : placehold;

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
                        <input onInput={(e) => {
                            mascaraCartaoCredito(e);
                            setNumeroCartao(e.target.value);
                        }} type="text" placeholder="Digite o número do Cartão"/>
                    </div>
                    <div>
                        <h1>Nome no Cartão</h1>
                        <input onInput={(e) => {
                            setNomeCartao(e.target.value);
                        }} type="text" placeholder="Digite o nome no cartão"/>
                    </div>
                    <div>
                        <h1>Digite o CPF do Dono do Cartão</h1>
                        <input onInput={(e) => {
                            mascara(e);
                            setCpfDonoCartao(e.target.value);
                        }} type="text" placeholder="Digite o CPF"/>
                    </div>
                    <div className="DT mr-32">
                        <h1>Data de Nascimento</h1>
                        <input onInput={(e) => {
                            setDataNascimento(e.target.value);
                        }} type="date"/>
                    </div>
                    <div className="CVV">
                        <h1>CVV</h1>
                        <input onInput={(e) => {
                            mascaraCVV(e);
                            setCvv(e.target.value);
                        }} type="text"/>
                    </div>
                </div>
                <div className="DetalhesdaCompra">
                    <div className="flex">
                        <label>Detalhes da Compra</label>
                    </div>
                    <div className="infoCompra">
                        <div className="imgC">
                            <img src={imagemSrc} alt="Imagem do Evento" className="mx-auto h-full w-full max-w-full"/>
                        </div>
                        <div className="textoC ml-4">
                            <label className="ml-2">{eventoSelecionado.nome}</label>
                            <h1><FaLocationDot className="icon mr-2"/>{eventoSelecionado.endereco}</h1>
                            <h1><FaCalendarAlt className="icon mr-2"/>{new Date(eventoSelecionado.dataInicial).toLocaleDateString('pt-BR', {
                                day: 'numeric',
                                month: 'numeric',
                                year: 'numeric',
                            })}{" - "}{eventoSelecionado.horario}</h1>
                        </div>
                    </div>
                    <div className="valor">
                        <h2>Preço do Ingresso</h2>
                        <h3>R$ {eventoSelecionado.preco}</h3>
                    </div>
                    <button className="botaoF" onClick={finalizarCompra}>Finalizar Compra</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}