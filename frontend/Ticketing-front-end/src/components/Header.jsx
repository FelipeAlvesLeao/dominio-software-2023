import { Link } from "react-router-dom";
import "./styleComp.css"
import logo from "../assets/logo.png"


export default function Header() {
  return(


<nav className="head">
  <div className="">
    <Link to="/"><img src={logo} className="ml-3" width="60%"/></Link>
  </div>
  <div className="filtro">
    <Link to="/shows" className="texto">Eventos</Link>
    <Link to="/registrar" className="texto">Registrar</Link>
    <Link to="/comprar" className="texto">Comprar</Link>
  </div>
  <div>
    <Link to="/login"><button className="mr-4 botaoNav">Login</button></Link>
  </div>

</nav>
  )
}