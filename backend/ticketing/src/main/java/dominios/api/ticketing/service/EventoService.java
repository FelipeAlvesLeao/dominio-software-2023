package dominios.api.ticketing.service;

import dominios.api.ticketing.entity.Evento;

import java.util.List;

public interface EventoService {
    public List<Evento> getAllEvento();
    public Evento getEventoById(String id);
    public Evento addEvento(Evento evento);
    public Evento deleteEvento(String id);
    public Evento updateEvento(String id, Evento evento);
}
