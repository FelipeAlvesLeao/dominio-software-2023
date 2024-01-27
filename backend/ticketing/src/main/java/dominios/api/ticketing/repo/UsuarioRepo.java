package dominios.api.ticketing.repo;
import dominios.api.ticketing.entity.Ticket;
import dominios.api.ticketing.entity.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepo extends MongoRepository<Usuario, String> {
    Usuario findByUsernameAndPassword(String usuario, String password);
}
