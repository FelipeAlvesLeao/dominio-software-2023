package dominios.api.ticketing.entity;

import lombok.*;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Ticketing")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Evento {
    @Id
    private String id;
    private String nome;
    private String descricao;
    private String endereco;
    private Date dataInicial;
    private Date dataFinal;
    private Integer capacidade;
    private Integer preco;
    private Integer reservasAtuais = 0;
    private String imagem;
    private String duracao;
    private String horario;
    private String tipo;
}
