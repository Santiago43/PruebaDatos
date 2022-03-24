package com.prueba.ejercicio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.prueba.ejercicio"})
public class EjercicioApplication {
	public static void main(String[] args) {
		SpringApplication.run(EjercicioApplication.class, args);
	}

}
