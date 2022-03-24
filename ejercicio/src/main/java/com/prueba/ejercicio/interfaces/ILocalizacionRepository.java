package com.prueba.ejercicio.interfaces;

import com.prueba.ejercicio.model.Localizacion;
import org.springframework.data.repository.CrudRepository;

public interface ILocalizacionRepository extends CrudRepository<Localizacion,Integer>{
    
}
