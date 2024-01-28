import { Header, Footer } from '../../components';
import { useState } from 'react'
import "./RegStyle.css";

export default function RegistrarEvento() {

    const Form = () => {
        const [formData, setFormData] = useState({
            nome: '',
            descricao: "",
            endereco: '',
            dataInicial: '',
            dataFinal: '',
            horario: '',
            capacidade: '',
            preco: '',
            tipo: 'Show',

        });

        const handleFormSubmit = async (event) => {
            event.preventDefault();

            try {
                console.log(JSON.stringify(formData))
                const response = await fetch('http://localhost:8090/api/evento/add', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                console.log(response);

                if (response.ok) {
                    console.log('Evento cadastrado com sucesso!');

                } else {
                    console.error('Falha ao cadastrar o evento. Status:', response.status);
                }
            } catch (error) {
                console.error('Erro durante a requisição:', error);
            }
        };


  return (
      <div className="pagR">
          <Header />
          <div className="pag01">
              <div className="pag02">
                  <div className="pag03">
                      <form encType="multipart/form-data" onSubmit={handleFormSubmit}>
                          <label>Informações do Evento</label>
                          <div className="pag04">
                              <div className="t05">
                                  <h1>Nome do Evento</h1>
                                  <input onChange={(e) => setFormData({...formData, nome: e.target.value})} value={formData.nome} className="w-96 mr-16" type="text"/>
                              </div>
                              <div className="t05">
                                  <h1 className="mr-16">Tipo do Evento</h1>
                                  <select onChange={(e) => setFormData({...formData, tipo: e.target.value})} value={formData.tipo} className="w-32" required>
                                      <option>Show</option>
                                      <option>Palestra</option>
                                      <option>Filme</option>
                                      <option>Seminário</option>
                                  </select>
                              </div>
                              <div className="t05">
                                  <h1 className="mr-16">Data Evento</h1>
                                  <input onChange={(e) => setFormData({...formData, dataInicial: e.target.value})} value={formData.dataInicial} className="w-32 text-center" type="date"/>
                              </div>
                              <div className="t05">
                                  <h1 className="mr-16">Hora do Evento</h1>
                                  <input onChange={(e) => setFormData({...formData, horario: e.target.value})} value={formData.horario} className="w-24 text-center" type="time"/>
                              </div>
                              <div className="t05">
                                  <h1 className="mr-16">Capacidade</h1>
                                  <input onChange={(e) => setFormData({...formData, capacidade: e.target.value})} value={formData.capacidade} className="w-24" type="number"/>
                              </div>
                              <div className="t05">
                                  <h1 className="mr-16">Preço</h1>
                                  <input onChange={(e) => setFormData({...formData, preco: e.target.value})} value={formData.preco} className="w-24" type="number"/>
                              </div>
                              <div className="t05">
                                  <h1 className="mr-80">Endereço do Evento</h1>
                                  <input onChange={(e) => setFormData({...formData, endereco: e.target.value})} value={formData.endereco} className="w-96" type="text"/>
                              </div>
                              <div className="t05">
                                  <h1 className="mr-80">Descrição do Evento</h1>
                                  <input onChange={(e) => setFormData({...formData, descricao: e.target.value})} value={formData.descricao} className="w-96" type="text"/>
                              </div>
                              {/*<div className="mt-10">
                                <h1>Adicione uma imagem</h1>
                                <input type="file" onChange={handleFileChange} accept="image/*"/>
                            </div>*/}
                          </div>
                          <div className="bt01">
                              <button type="submit"
                                      className="w-48 h-12 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                                  Registrar Evento
                              </button>
                          </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
    return <Form />;
}