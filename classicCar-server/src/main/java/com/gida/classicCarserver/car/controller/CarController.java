package com.gida.classicCarserver.car.controller;

import com.gida.classicCarserver.car.model.Car;
import com.gida.classicCarserver.car.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/")
public class CarController {

    @Autowired
    CarService carService;

    @GetMapping
    public List<Car> getAllCars() {
    return carService.findALl();
    }

    @GetMapping("/{id}")
    public Car getCarById(@PathVariable("id") UUID id) {
        return carService.findById(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Car newCar(@RequestBody Car car) {
        return carService.create(car);
    }

    @PutMapping("/{id}")
    public Car updateCar(@RequestBody Car car, @PathVariable("id") UUID id) {
        return carService.update(car, id);
    }

    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable UUID id) {
        carService.delete(id);
    }
}
