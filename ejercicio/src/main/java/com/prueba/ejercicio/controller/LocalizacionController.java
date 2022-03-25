package com.prueba.ejercicio.controller;

import com.prueba.ejercicio.model.Localizacion;
import com.prueba.ejercicio.service.LocalizacionService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Controlador de localizaciones
 * @author Santiago Pérez
 * @since 2022-03-24
 */
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RestController
@RequestMapping("/localizacion")
public class LocalizacionController {
    @Autowired
    LocalizacionService service;
    @GetMapping()
    public List<Localizacion> list() {
        return service.all();
    }
    
    @GetMapping("/{id}")
    public Localizacion get(@PathVariable String id) {
        return service.read(Integer.parseInt(id));
    }
    
    @PutMapping("/{id}")
    public Boolean put(@PathVariable String id, @RequestBody Localizacion input) {
        return service.update(Integer.parseInt(id),input);
    }
    
    @PostMapping
    public boolean post(@RequestBody Localizacion localizacion) {
        return service.create(localizacion);
    }
    
    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable String id) {
        return service.delete(Integer.parseInt(id)); 
    }
    
}
