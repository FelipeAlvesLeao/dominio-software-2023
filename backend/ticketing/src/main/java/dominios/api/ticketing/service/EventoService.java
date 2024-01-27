package dominios.api.ticketing.service;

import dominios.api.ticketing.entity.Evento;
import dominios.api.ticketing.entity.TipoEvento;

import java.util.List;

public interface EventoService {
    public List<Evento> getAllEvento();
    public Evento getEventoById(String id);
    public List<Evento> getEventosByOrganizador(String organizadorId);
    public List<Evento> getEventosByTipo(TipoEvento tipo);
    public Evento addEvento(Evento evento);
    public Evento deleteEvento(String id);
    public Evento updateEvento(String id, Evento evento);
}
