package dominios.api.ticketing.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Ticketing")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Ticket {
    @Id
    private String id;
    @DBRef
    private Evento evento;
    //@DBRef
    //private User user;
    private Date dataCompra;
}
