package dominios.api.ticketing.service.implementation;

import dominios.api.ticketing.entity.Evento;
import dominios.api.ticketing.entity.TipoEvento;
import dominios.api.ticketing.repo.EventoRepo;
import dominios.api.ticketing.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
@Service
public class EventoServiceImplementation implements EventoService {
    @Autowired
    private EventoRepo eventoRepo;
    @Override
    public List<Evento> getAllEvento() {
        return eventoRepo.findAll();
    }


    @Override
    public Evento getEventoById(String id) {
        return eventoRepo.findById(id).orElse(null);
    }

    @Override
    public List<Evento> getEventosByOrganizador(String organizadorId) {
        return eventoRepo.findByOrganizadorId(organizadorId);
    }

    @Override
    public List<Evento> getEventosByTipo(TipoEvento tipo) {
        return eventoRepo.findByTipo(tipo);
    }

    @Override
    public Evento addEvento(Evento evento) {
        System.out.println("Recebendo solicitação para adicionar evento: " + evento);
        return eventoRepo.save(evento);
    }

    @Override
    public Evento deleteEvento(String id) {
        Evento eventoDelete = eventoRepo.findById(id).orElse(null);
        eventoRepo.delete(eventoDelete);
        return eventoDelete;
    }

    @Override
    public Evento updateEvento(String id, Evento evento) {
        Evento eventoUpdate = eventoRepo.findById(id).orElse(null);
        eventoUpdate.setNome(evento.getNome());
        eventoUpdate.setDescricao(evento.getDescricao());
        eventoUpdate.setEndereco(evento.getEndereco());
        eventoUpdate.setDataInicial(evento.getDataInicial());
        eventoUpdate.setDataFinal(evento.getDataFinal());
        eventoUpdate.setCapacidade(evento.getCapacidade());
        eventoUpdate.setPreco(evento.getPreco());
        eventoUpdate.setReservasAtuais(evento.getReservasAtuais());
        eventoUpdate.setImagem(evento.getImagem());
        eventoUpdate.setDuracao(evento.getDuracao());
        eventoUpdate.setHorario(evento.getHorario());
        eventoUpdate.setTipo(evento.getTipo());
        eventoUpdate.setOrganizador(evento.getOrganizador());
        eventoRepo.save(eventoUpdate);
        return eventoUpdate;
    }
}
