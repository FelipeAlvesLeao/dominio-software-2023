import "./styleReg.css";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";

export default function Register() {
    const Form = () => {
        const [formData, setFormData] = useState({
            username: "",
            password: "",
            email: "",
        });

        const [registrationSuccess, setRegistrationSuccess] = useState(false);

        const navigate = useNavigate();

        const registrarUser = async (e) => {
            e.preventDefault(); // Adicione esta linha para prevenir o comportamento padrão do formulário

            if (Object.values(formData).some((value) => value === '')) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            console.log(formData);

            var userdata = new FormData();
            userdata.append("username", formData.username);
            userdata.append("password", formData.password);
            userdata.append("email", formData.email);

            var requestOptions = {
                method: "POST",
                body: userdata,
                redirect: "follow",
            };

            fetch("http://localhost:8090/api/usuario/add", requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.log("error", error));

            setRegistrationSuccess(true);
        };

        if (registrationSuccess) {
            navigate("/login");
        }

        return (
            <div className="page">
                <div className="LoginR">
                    <form
                        onSubmit={registrarUser}
                        className="formularioLoginR"
                    >
                        <div className="logoLoginR">
                            <Link to="/">
                                <img src="src/assets/logo.png" alt="Logo" />
                            </Link>
                        </div>
                        <div className="detaLoginR">
                            <h1>Digite seu usuário</h1>
                            <input
                                onChange={(e) =>
                                    setFormData({ ...formData, username: e.target.value })
                                }
                                value={formData.username}
                                type="text"
                                placeholder="Digite seu usuario"
                            />
                            <h1>Digite seu E-mail</h1>
                            <input
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                value={formData.email}
                                type="email"
                                placeholder="Digite seu E-mail"
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
                            <button type="submit" className="bg-white text-[rgba(10, 34, 59, 0.66)] text-base px-10 py-2 border border-transparent rounded-md font-semibold uppercase mt-10 cursor-pointer shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300">
                                Registrar
                            </button>
                            <Link to="/login">
                                <h3 className="textoR">Já possui conta? Faça Login!</h3>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    return <Form />;
}
