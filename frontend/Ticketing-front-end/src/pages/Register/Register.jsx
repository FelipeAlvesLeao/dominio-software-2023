import React from "react";
import "./styleReg.css";
import {AddLink} from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function Register() {

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
        <div className="page">
            <div className="LoginR">
                <form className="formularioLoginR">
                    <div className="logoLoginR">
                        <Link to="/"><img src="src/assets/logo.png" alt="Logo"/></Link>
                    </div>
                    <div className="detaLoginR">
                        <h1>Digite seu Nome</h1>
                        <input type="text" placeholder="Digite seu Nome"/>
                        <h1>Digite seu CPF</h1>
                        <input onInput={mascara} type="text" placeholder="Digite seu CPF"/>
                        <h1>Digite seu E-mail</h1>
                        <input type="email" placeholder="Digite seu E-mail"/>
                        <h1>Digite sua Senha</h1>
                        <input type="password" placeholder="Digite sua senha!"/>
                        <button className="botaoLogin">Registrar</button>
                        <Link to="/login"><a className="textoR">Já possui conta? Faça Login!</a></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
