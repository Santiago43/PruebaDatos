package com.prueba.ejercicio.repository;
import com.prueba.ejercicio.interfaces.ICargoRepository;
import com.prueba.ejercicio.model.Cargo;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Repositorio (dao) de cargos
 * @author Santiago Pérez
 * @since 2022-03-24
 */
@Repository
public class CargoRepository {
    @Autowired
    private ICargoRepository crud;
    public List<Cargo> getAll(){
        return (List<Cargo>) crud.findAll();
    }
   public Optional <Cargo> getCargo(Integer id){
       return crud.findById(id);
   } 
   public Cargo save (Cargo cargo){
       return crud.save(cargo);
   }
   
   public void delete(Cargo cargo){
       crud.delete(cargo);
    }
}
