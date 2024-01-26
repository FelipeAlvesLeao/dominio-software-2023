package dominios.api.ticketing.service;

import dominios.api.ticketing.entity.Ticket;

import java.util.List;

public interface TicketService {
    public List<Ticket> getAllTicket();
    public Ticket getTicketById(String id);
    public List<Ticket> getTicketByEvento(String eventoId);
    public List<Ticket> getTicketByUsuario(String usuarioId);
    public Ticket addTicket(Ticket ticket);
    public Ticket deleteTicket(String id);
}
