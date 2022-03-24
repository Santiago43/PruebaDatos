package com.prueba.ejercicio.repository;

import com.prueba.ejercicio.interfaces.IUsuarioRepository;
import com.prueba.ejercicio.model.Usuario;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Repositorio de usuarios
 * @author Santiago Pérez
 * @since 2022-03-24
 */
@Repository
public class UsuarioRepository {
    @Autowired
    private IUsuarioRepository crud;
    public List<Usuario> getAll(){
        return (List<Usuario>) crud.findAll();
    }
   public Optional <Usuario> getUsuario(Integer id){
       return crud.findById(id);
   } 
   public Usuario save (Usuario usuario){
       return crud.save(usuario);
   }
   
   public void delete(Usuario usuario){
       crud.delete(usuario);
    }
    
}
