package com.prueba.ejercicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Clase de Localización
 * @author Santiago Pérez
 * @since 2022-03-24 
 */
@Entity
@Table(name="localizacion")
public class Localizacion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(nullable=false)
    private String localizacion;
    private String estado;
    @OneToMany(cascade =(CascadeType.PERSIST),mappedBy="localizacion")
    @JsonIgnoreProperties("localizacion")
    private List<Usuario> usuarios; 
    

    public String getLocalizacion() {
        return localizacion;
    }

    public void setLocalizacion(String localizacion) {
        this.localizacion = localizacion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    
}
