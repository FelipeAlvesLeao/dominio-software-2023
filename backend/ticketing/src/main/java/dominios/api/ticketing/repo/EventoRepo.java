package dominios.api.ticketing.repo;
import dominios.api.ticketing.entity.Evento;
import dominios.api.ticketing.entity.TipoEvento;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventoRepo extends MongoRepository<Evento, String> {
    List<Evento> findByOrganizadorId(String organizadorId);
    List<Evento> findByTipo(TipoEvento tipo);
}
