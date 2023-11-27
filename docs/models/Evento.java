import org.springframework.data.annotation.Id;


public class Evento {

  @Id
  public String id;
  public String nome;
  public String descricao;
  public String endereco;
  @JsonFormat(pattern="yyyy-MM-dd")
  public Date dataInicial;
  @JsonFormat(pattern="yyyy-MM-dd")
  public Date dataFinal;

  public Evento() {}

//  Criar um construtor aqui com todos os parametros que são required
// public Evento(params) {
 //   this.nome = nome;
//  }

  @Override
  public String toString() {
    return String.format(
        "Customer[id=%s, nome='%s', descricao='%s']",
        id, nome, descricao);
  }

}
