package com.prueba.ejercicio.interfaces;

import com.prueba.ejercicio.model.Usuario;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Interfaz de repositorio de usuario
 * @author santi
 */
public interface IUsuarioRepository extends CrudRepository<Usuario,Integer>{
    @Query(value="select * from usuario where cargo_id=?",nativeQuery=true)
    public List<Usuario> getAllWhereCargoIdEqualsTo(Integer cargoId);
    @Query(value="select * from usuario where identificacion=? and contrasena=?",nativeQuery=true)
    public Usuario login(String identificacion,String password);
    @Query(value="select * from usuario where localizacion_id=?",nativeQuery=true)
    public List<Usuario> getAllWhereLocalizacionIdEqualsTo(Integer localizacionId);
}
