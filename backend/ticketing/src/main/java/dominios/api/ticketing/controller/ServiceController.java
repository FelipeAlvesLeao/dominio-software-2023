package dominios.api.ticketing.controller;

import dominios.api.ticketing.entity.Evento;
import dominios.api.ticketing.service.EventoService;
import dominios.api.ticketing.entity.TipoEvento;
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
    public Evento getById(@PathVariable String id) {
        return eventoService.getEventoById(id);
    };
    @GetMapping("/evento/organizador/{organizadorId}")
    public List<Evento> getEventosByOrganizador(@PathVariable String organizadorId) {
        return eventoService.getEventosByOrganizador(organizadorId);
    };
    @GetMapping("/evento/tipo/{tipo}")
    public List<Evento> getEventosByTipo(@PathVariable TipoEvento tipo) {
        return eventoService.getEventosByTipo(tipo);
    };
    @PostMapping("/evento/add")
    public Evento add(Evento evento){
        return eventoService.addEvento(evento);
    };
    @DeleteMapping("/evento/delete/{id}")
    public Evento delete(@PathVariable String id) {
        return eventoService.deleteEvento(id);
    };
    @PutMapping("/evento/update/{id}")
    public Evento update(@PathVariable String id, Evento evento) {
        return eventoService.updateEvento(id, evento);
    };

    @GetMapping("/ticket/all")
    public List<Ticket> tgetAll() {
        return ticketService.getAllTicket();
    };
    @GetMapping("/ticket/{id}")
    public Ticket tgetById(@PathVariable String id) {
        return ticketService.getTicketById(id);
    };
    @GetMapping("/ticket/evento/{eventoId}")
    public List<Ticket> getTicketByEvento(@PathVariable String eventoId) {
        return ticketService.getTicketByEvento(eventoId);
    };
    @GetMapping("/ticket/usuario/{usuarioId}")
    public List<Ticket> getTicketByUsuario(@PathVariable String usuarioId) {
        return ticketService.getTicketByUsuario(usuarioId);
    };
    @PostMapping("/ticket/add")
    public Ticket tadd(Ticket ticket) {
        return ticketService.addTicket(ticket);
    };
    @DeleteMapping("/ticket/delete/{id}")
    public Ticket tdelete(@PathVariable String id) {
        return ticketService.deleteTicket(id);
    };
    
    @GetMapping("/usuario/all")
    public List<Usuario> usuarioGetAll() {
        return usuarioService.getAllUsuario();
    };
    @GetMapping("/usuario/{id}")
    public Usuario usuarioGetById(@PathVariable String id) {
        return usuarioService.getUsuarioById(id);
    };
    @PostMapping("/usuario/add")
    public Usuario usuarioAdd(Usuario usuario){
        return usuarioService.addUsuario(usuario);
    };
    @DeleteMapping("/usuario/delete/{id}")
    public Usuario usuarioDelete(@PathVariable String id) {
        return usuarioService.deleteUsuario(id);
    };
    @PutMapping("/usuario/update/{id}")
    public Usuario usuarioUpdate(@PathVariable String id, Usuario usuario) {
        return usuarioService.updateUsuario(id, usuario);
    }
}
