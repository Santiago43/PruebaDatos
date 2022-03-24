package com.prueba.ejercicio.service;

import com.prueba.ejercicio.model.Localizacion;
import com.prueba.ejercicio.repository.LocalizacionRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Clase de Localización
 * @author Santiago Pérez
 * @since 2022-03-24
 */
@Service
public class LocalizacionService {
    @Autowired
    private LocalizacionRepository repo;
    public boolean create(Localizacion localizacion){
        return repo.save(localizacion)!=null;
    }
    public Localizacion read(Integer id){
        return repo.getLocalizacion(id).get();
    }
    public List<Localizacion> all(){
        return repo.getAll();
    }
    public boolean update(Integer id, Localizacion localizacion){
        Optional <Localizacion> l = repo.getLocalizacion(id);
        if(l.isPresent()){
            if(localizacion.getLocalizacion()!=null){
                l.get().setLocalizacion(localizacion.getLocalizacion());
            }
            if(localizacion.getEstado()!=null){
                l.get().setEstado(localizacion.getEstado());
            }
            return repo.save(l.get())!=null;
        }
        return false;
    }
    public boolean delete(Integer id){
        Optional <Localizacion> l = repo.getLocalizacion(id);
        if(l.isPresent()){
            repo.delete(l.get());
            return true;
        }
        return false;
    }
}
