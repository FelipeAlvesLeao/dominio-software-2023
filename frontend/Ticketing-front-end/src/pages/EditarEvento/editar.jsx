import { Header, Footer } from '../../components';
import { useState, useEffect } from 'react';
import { useAuth } from "../../AuthContext.jsx";
import { useNavigate, useParams } from "react-router-dom";

export default function Editar() {
    const { userId } = useAuth();
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        endereco: '',
        dataInicial: '',
        horario: '',
        capacidade: '',
        preco: '',
        tipo: 'Show',
        imagem: null,
    });

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const response = await fetch(`http://localhost:8090/api/evento/${id}`);
                if (!response.ok) {
                    throw new Error(`Erro ao buscar evento: ${response.statusText}`);
                }

                const eventData = await response.json();
                setFormData({
                    nome: eventData.nome || '',
                    descricao: eventData.descricao || '',
                    endereco: eventData.endereco || '',
                    dataInicial: '',
                    horario: '',
                    capacidade: eventData.capacidade || '',
                    preco: eventData.preco || '',
                    tipo: eventData.tipo || 'Show',
                    imagem: null,  // Aqui você pode precisar de uma lógica para lidar com imagens existentes
                });
            } catch (error) {
                console.error('Erro ao obter detalhes do evento:', error);
            }
        };

        fetchEvento();
    }, [id]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            imagem: file,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(formData).some((value) => value === '')) {
            alert('Por favor, preencha todos os campos antes de registrar o evento.');
            return;
        }

        const formattedDate = formatDate(formData.dataInicial);
        const formattedTime = `${formData.horario}h`;

        const formdata = new FormData();
        formdata.append("nome", formData.nome);
        formdata.append("descricao", formData.descricao);
        formdata.append("endereco", formData.endereco);
        formdata.append("dataInicial", formattedDate);
        formdata.append("capacidade", formData.capacidade);
        formdata.append("preco", formData.preco);
        formdata.append("duracao", "3h");
        formdata.append("horario", formattedTime);
        formdata.append("tipo", formData.tipo);
        formdata.append("organizador", userId.toString());

        if (formData.imagem) {
            const base64Image = await convertImageToBase64(formData.imagem);
            formdata.append('imagem', base64Image);
        }

        const requestOptions = {
            method: 'PUT',
            body: formdata,
            redirect: 'follow'
        };

        try {
            const response = await fetch(`http://localhost:8090/api/evento/update/${id}`, requestOptions);
            const result = await response.text();

            if (response.ok) {
                console.log(result); // Pode querer fazer algo com o resultado aqui
                navigate('/perfil');
            } else {
                console.error('Erro ao atualizar Evento:', result);
                // Pode querer exibir uma mensagem de erro ao usuário aqui
            }
        } catch (error) {
            console.error('Erro ao Atualizar Evento:', error);
            // Pode querer exibir uma mensagem de erro ao usuário aqui
        }
    };

    const convertImageToBase64 = (image) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.onerror = reject;
            reader.readAsDataURL(image);
        });
    };

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${month}/${day}/${year}`;
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
                                        <option>Seminario</option>
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
                                <div className="mt-10">
                                    <h1>Adicione uma imagem</h1>
                                    <input type="file" onChange={handleFileChange} accept="image/*"/>
                                </div>
                            </div>
                            <div className="bt01">
                                <button
                                    type="submit"
                                    className="w-48 h-12 bg-blue-950 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
                                >
                                    Atualizar Evento
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}