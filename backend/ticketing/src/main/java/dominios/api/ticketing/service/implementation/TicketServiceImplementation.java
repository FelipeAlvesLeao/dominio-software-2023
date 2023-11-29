package dominios.api.ticketing.service.implementation;

import dominios.api.ticketing.entity.Evento;
import dominios.api.ticketing.entity.Ticket;
import dominios.api.ticketing.repo.TicketRepo;
import dominios.api.ticketing.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketServiceImplementation implements TicketService{
    @Autowired
    private TicketRepo ticketRepo;

    @Override
    public List<Ticket> getAllTicket() {
        return ticketRepo.findAll();
    }

    @Override
    public Ticket getTicketById(String id) {
        return ticketRepo.findById(id).orElse(null);
    }

    @Override
    public Ticket addTicket(Ticket ticket) {
        return ticketRepo.save(ticket);
    }

    @Override
    public Ticket deleteTicket(String id) {
        Ticket ticketDelete = ticketRepo.findById(id).orElse(null);
        ticketRepo.delete(ticketDelete);
        return ticketDelete;
    }
}
