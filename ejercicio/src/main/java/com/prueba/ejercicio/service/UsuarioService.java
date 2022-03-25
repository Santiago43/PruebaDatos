package com.prueba.ejercicio.service;

import com.prueba.ejercicio.model.Usuario;
import com.prueba.ejercicio.repository.UsuarioRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Servicios de usuario
 * @author Santiago Pérez
 * @since 2022-03-24
 */
@Service
public class UsuarioService {
    @Autowired 
    private UsuarioRepository repo;
    public boolean create(Usuario usuario){
        return repo.save(usuario)!=null;
    }
    
    public Usuario read(Integer id){
        return repo.getUsuario(id).get();
    }
    
    public List<Usuario> all(){
        return repo.getAll();
    }
    public boolean update(Integer id, Usuario usuario){
        Optional <Usuario> u = repo.getUsuario(id);
        if(u.isPresent()){
            if(usuario.getNombres()!=null){
                u.get().setNombres(usuario.getNombres());
            }
            if(usuario.getApellidos()!=null){
                u.get().setApellidos(usuario.getApellidos());
            }
            if(usuario.getEstado()!=null){
                u.get().setEstado(usuario.getEstado()); 
            }
            if(usuario.getCargo()!=null){
                u.get().setCargo(usuario.getCargo());
            }
            if(usuario.getIdentificacion()!=null){
                u.get().setIdentificacion(usuario.getIdentificacion());
            }
            if(usuario.getLocalizacion()!=null){
                u.get().setLocalizacion(usuario.getLocalizacion());
            }
            repo.save(u.get());
            return true;
        }
        return false;
    }
    
    public boolean delete(Integer id){
        Optional<Usuario> u = repo.getUsuario(id);
        if(u.isPresent()){
            repo.delete(u.get());
            return true;
        }
        return false;
    }
}
