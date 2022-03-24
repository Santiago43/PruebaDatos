package com.prueba.ejercicio.interfaces;

import com.prueba.ejercicio.model.Cargo;
import org.springframework.data.repository.CrudRepository;

public interface ICargoRepository extends CrudRepository<Cargo,Integer>{
    
}
