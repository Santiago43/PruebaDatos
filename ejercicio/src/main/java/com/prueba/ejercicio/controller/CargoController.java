package com.prueba.ejercicio.controller;


import com.prueba.ejercicio.model.Cargo;
import com.prueba.ejercicio.service.CargoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador de Cargos
 * @author Santiago Pérez
 * @since 2022-03-24
 */
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RestController
@RequestMapping("/cargo")
public class CargoController {
    @Autowired
    CargoService service;
    @GetMapping()
    public List<Cargo> list() {
        return service.all();
    }
    
    @GetMapping("/{id}")
    public Cargo get(@PathVariable String id) {
        return service.read(Integer.parseInt(id)).get();
    }
    
    @PutMapping("/{id}")
    public Boolean put(@PathVariable String id, @RequestBody Cargo input) {
        return service.update(Integer.parseInt(id),input);
    }
    
    @PostMapping
    public boolean post(@RequestBody Cargo input) {
        return service.create(input);
    }
    
    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable String id) {
        return service.delete(Integer.parseInt(id));
    }
}
