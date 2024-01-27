package dominios.api.ticketing.service;

import dominios.api.ticketing.entity.Usuario;

import java.util.List;

public interface UsuarioService {
    public List<Usuario> getAllUsuario();
    public Usuario getUsuarioById(String id);
    public Usuario addUsuario(Usuario usuario);
    public Usuario deleteUsuario(String id);
    public Usuario getUsuarioByUsernameAndPassword(String username, String password);
    public Usuario updateUsuario(String id, Usuario usuario);
}
