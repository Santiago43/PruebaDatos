package com.prueba.ejercicio.repository;

import com.prueba.ejercicio.interfaces.ILocalizacionRepository;
import com.prueba.ejercicio.model.Localizacion;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Repositorio de localización
 * @author Santiago Pérez
 * @since 2022-03-24
 */
@Repository
public class LocalizacionRepository {
    @Autowired
    private ILocalizacionRepository crud;
    public List<Localizacion> getAll(){
        return (List<Localizacion>) crud.findAll();
    }
   public Optional <Localizacion> getLocalizacion(Integer id){
       return crud.findById(id);
   } 
   public Localizacion save (Localizacion localizacion){
       return crud.save(localizacion);
   }
   
   public void delete(Localizacion localizacion){
       crud.delete(localizacion);
    }
}
