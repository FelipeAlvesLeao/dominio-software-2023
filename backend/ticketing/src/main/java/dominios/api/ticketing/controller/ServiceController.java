package dominios.api.ticketing.controller;

import dominios.api.ticketing.entity.Evento;
import dominios.api.ticketing.service.EventoService;
import dominios.api.ticketing.entity.Ticket;
import dominios.api.ticketing.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ServiceController {
    @Autowired
    private EventoService eventoService;
    @Autowired
    private TicketService ticketService;
    @GetMapping("/evento/all")
    public List<Evento> getAll() {
        return eventoService.getAllEvento();
    };
    @GetMapping("/evento/{id}")
    public Evento getById(String id) {
        return eventoService.getEventoById(id);
    };
    @PostMapping("/evento/add")
    public Evento add(Evento evento){
        return eventoService.addEvento(evento);
    };
    @DeleteMapping("/evento/delete/{id}")
    public Evento delete(String id) {
        return eventoService.deleteEvento(id);
    };
    @PutMapping("/evento/update/{id}")
    public Evento update(@PathVariable String id, Evento evento) {
        return eventoService.updateEvento(id, evento);
    };

    @GetMapping("/ticket/all")
    public List<Ticket> tgetAll() {
        return ticketService.getAllTicket();
    }
    @GetMapping("/ticket/{id}")
    public Ticket tgetById(String id) {
        return ticketService.getTicketById(id);
    }
    @PostMapping("/ticket/add")
    public Ticket tadd(Ticket ticket) {
        return ticketService.addTicket(ticket);
    }
    @DeleteMapping("/ticket/delete/{id}")
    public Ticket tdelete(String id) {
        return ticketService.deleteTicket(id);
    }
}
