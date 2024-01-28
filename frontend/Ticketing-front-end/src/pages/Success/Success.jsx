import "./Style.css"
import { Header, Footer } from '../../components';

export default function Success() {


    return (
        <>
            <div className="page1">
                <Header />

                <h1 className="p-2 py-6 justify-center align-middle font-thin">Registrado com sucesso!</h1>
                
                <Footer />
            </div>
        </>
    )
}