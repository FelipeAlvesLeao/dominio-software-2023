import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./styleComp.css";
import logo from "../assets/logo.png";

export default function Header() {
  const { userId, logout } = useAuth();

  // Verificação condicional para decidir qual conjunto de elementos HTML renderizar
  if (userId) {
    // Se usuário autenticado, renderiza HTML para usuário autenticado
    return (
        <nav className="head">
          <div className="">
            <Link to="/">
              <img src={logo} className="ml-3" width="60%" alt="Logo" />
            </Link>
          </div>
          <div className="filtro">
            <Link to="/shows" className="texto">
              Eventos
            </Link>
            <Link to="/painel" className="texto">
              Painel
            </Link>
          </div>
          <div>
            <button className="mr-4 botaoNav" onClick={logout}>
              Deslogar
            </button>
          </div>
        </nav>
    );
  } else {
    // Se usuário não autenticado, renderiza HTML para usuário não autenticado
    return (
        <nav className="head">
          <div className="">
            <Link to="/">
              <img src={logo} className="ml-3" width="60%" alt="Logo" />
            </Link>
          </div>
          <div className="filtro">
            <Link to="/shows" className="texto">
              Eventos
            </Link>
          </div>
          <div>
            <Link to="/login">
              <button className="mr-4 botaoNav">Login</button>
            </Link>
          </div>
        </nav>
    );
  }
}
