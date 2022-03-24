package com.prueba.ejercicio.interfaces;

import com.prueba.ejercicio.model.Usuario;
import org.springframework.data.repository.CrudRepository;

/**
 * Interfaz de repositorio de usuario
 * @author santi
 */
public interface IUsuarioRepository extends CrudRepository<Usuario,Integer>{
    
}
