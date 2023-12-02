package dominios.api.ticketing.repo;
import dominios.api.ticketing.entity.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepo extends MongoRepository<Ticket, String> {
}
