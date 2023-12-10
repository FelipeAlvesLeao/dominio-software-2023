import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, Footer} from './components';
import { Home, NotFound, RegistrarEvento } from './pages';
function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/registrarEvento" element={<RegistrarEvento/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
