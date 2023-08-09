package com.gida.classicCarserver.car.controller;

import com.gida.classicCarserver.car.model.Car;
import com.gida.classicCarserver.car.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/")
public class CarController {

    @Autowired
    CarService carService;

    @GetMapping
    public List<Car> getAllCars() {
    return carService.getAllCars();
}

}
