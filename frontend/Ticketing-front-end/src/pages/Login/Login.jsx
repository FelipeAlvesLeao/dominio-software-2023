import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../AuthContext.jsx'; // Importe o useAuth do contexto
import "./style.css"

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth(); // Use o hook useAuth para acessar as funções de autenticação

    const Form = () => {
        const [formData, setFormData] = useState({
            username: '',
            password: '',
        });

        const handleFormSubmit = async (e) => {
            e.preventDefault();

            if (Object.values(formData).some((value) => value === "")) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            console.log(formData);

            var requestOptions = {
                method: "GET",
                redirect: "follow",
            };

            try {
                const response = await fetch(
                    `http://localhost:8090/api/usuario/${formData.username}/${formData.password}`,
                    requestOptions
                );

                if (response.ok) {
                    const usuario = await response.json();

                    if (usuario !== null) {
                        // Armazenar o ID do usuário no contexto de autenticação
                        login(usuario.id);

                        // Redirecionar para a página desejada após o login bem-sucedido
                        navigate('/painel');
                    } else {
                        console.error('Falha na autenticação');
                        alert('Usuário ou senha incorretos');
                    }
                } else {
                    console.error('Falha na autenticação');
                    alert('Usuário ou senha incorretos');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
                alert('Usuário ou senha incorretos');
            }
        };

        return (
            <div className="page">
                <div className="Login">
                    <form onSubmit={handleFormSubmit} className="formularioLogin">
                        <div className="logoLogin">
                            <Link to="/">
                                <img src="src/assets/logo.png" alt="Logo" />
                            </Link>
                        </div>
                        <div className="detaLogin">
                            <h1>Digite seu Usuário</h1>
                            <input
                                onChange={(e) =>
                                    setFormData({ ...formData, username: e.target.value })
                                }
                                value={formData.username}
                                type="text"
                                placeholder="Digite seu usuário"
                            />
                            <h1>Digite sua Senha</h1>
                            <input
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                                value={formData.password}
                                type="password"
                                placeholder="Digite sua senha!"
                            />
                            <button
                                type="submit"
                                className="bg-white text-[rgba(10, 34, 59, 0.66)] text-base px-10 py-2 border border-transparent rounded-md font-semibold uppercase mt-10 cursor-pointer shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Fazer Login!
                            </button>
                            <Link to="/register">
                                <h3 className="textoR">Não tem conta? Registre-se!</h3>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    return <Form />;
}
