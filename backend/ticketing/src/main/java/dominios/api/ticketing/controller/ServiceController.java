package dominios.api.ticketing.controller;

import dominios.api.ticketing.entity.Evento;
import dominios.api.ticketing.service.EventoService;
import dominios.api.ticketing.entity.Ticket;
import dominios.api.ticketing.service.TicketService;
import dominios.api.ticketing.entity.Usuario;
import dominios.api.ticketing.service.UsuarioService;
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
    @Autowired
    private UsuarioService usuarioService;
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
    
        @GetMapping("/usuario/all")
    public List<Usuario> usuarioGetAll() {
        return usuarioService.getAllUsuario();
    };
    @GetMapping("/usuario/{id}")
    public Usuario usuarioGetById(String id) {
        return usuarioService.getUsuarioById(id);
    };
    @PostMapping("/usuario/add")
    public Usuario usuarioAdd(Usuario usuario){
        return usuarioService.addUsuario(usuario);
    };
    @DeleteMapping("/usuario/delete/{id}")
    public Usuario usuarioDelete(String id) {
        return usuarioService.deleteUsuario(id);
    };
    @PutMapping("/usuario/update/{id}")
    public Usuario usuarioUpdate(@PathVariable String id, Usuario usuario) {
        return usuarioService.updateUsuario(id, usuario);
    }
}
