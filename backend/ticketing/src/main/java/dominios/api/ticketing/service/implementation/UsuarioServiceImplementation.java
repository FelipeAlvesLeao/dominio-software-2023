package dominios.api.ticketing.service.implementation;

import dominios.api.ticketing.entity.Usuario;
import dominios.api.ticketing.repo.UsuarioRepo;
import dominios.api.ticketing.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UsuarioServiceImplementation implements UsuarioService{
    @Autowired
    private UsuarioRepo usuarioRepo;

    @Override
    public List<Usuario> getAllUsuario() {
        return usuarioRepo.findAll();
    }
    
    @Override
    public Usuario getUsuarioById(String id) {
        return usuarioRepo.findById(id).orElse(null);
    }

    @Override
    public Usuario addUsuario(Usuario usuario) {
        return usuarioRepo.save(usuario);
    }

    @Override
    public Usuario deleteUsuario(String id) {
        Usuario usuarioDelete = usuarioRepo.findById(id).orElse(null);
        usuarioRepo.delete(usuarioDelete);
        return usuarioDelete;
    }

    @Override
    public Usuario updateUsuario(String id, Usuario usuario) {
        Usuario usuarioUpdate = usuarioRepo.findById(id).orElse(null);
        usuarioUpdate.setUsername(usuario.getUsername());
        usuarioUpdate.setPassword(usuario.getPassword());
        usuarioUpdate.setEmail(usuario.getEmail());
        return usuarioUpdate;
    }
}
