package dominios.api.ticketing.repo;
import dominios.api.ticketing.entity.Evento;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventoRepo extends MongoRepository<Evento, String> {
}
