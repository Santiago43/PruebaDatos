package com.prueba.ejercicio.service;

import com.prueba.ejercicio.model.Cargo;
import com.prueba.ejercicio.repository.CargoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Clase de servicios de cargo
 * @author Santiago Pérez
 * @since 2022-03-24
 */
@Service
public class CargoService {
    @Autowired
    private CargoRepository repo;
    public boolean create(Cargo cargo){
        return repo.save(cargo)!=null;
    }
    public Optional<Cargo> read(Integer id){
        return repo.getCargo(id);
    }
    public List<Cargo> all(){
        return repo.getAll();
    }
    public boolean update(Integer id, Cargo cargo){
        if(cargo.getId()!=null){
            Optional<Cargo>c=repo.getCargo(id);
            if(!c.isEmpty()){
                if(cargo.getCargo()!=null){
                    c.get().setCargo(cargo.getCargo());
                }
                if(cargo.getEstado()!=null){
                    c.get().setEstado(cargo.getEstado());
                }
                return repo.save(c.get())!=null;
            }
        }
        return false;
    }
    public boolean delete(Integer id){
        Optional <Cargo> c = repo.getCargo(id);
        if(c.isPresent()){
            repo.delete(c.get());
            return true;
        }
        return false;
    }
}
