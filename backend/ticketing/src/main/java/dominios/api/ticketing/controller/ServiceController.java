package dominios.api.ticketing.controller;

import dominios.api.ticketing.entity.Evento;
import dominios.api.ticketing.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/evento")
public class ServiceController {
    @Autowired
    private EventoService eventoService;
    @GetMapping("/all")
    public List<Evento> getAll() {
        return eventoService.getAllEvento();
    };
    @GetMapping("/{id}")
    public Evento getById(String id) {
        return eventoService.getEventoById(id);
    };
    @PostMapping("/add")
    public Evento add(Evento evento){
        return eventoService.addEvento(evento);
    };
    @DeleteMapping("/delete/{id}")
    public Evento delete(String id) {
        return eventoService.deleteEvento(id);
    };
    @PutMapping("/update/{id}")
    public Evento update(@PathVariable String id, Evento evento) {
        return eventoService.updateEvento(id, evento);
    };

}
