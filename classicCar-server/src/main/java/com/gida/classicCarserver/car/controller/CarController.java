package com.gida.classicCarserver.car.controller;

import com.gida.classicCarserver.car.model.Car;
import com.gida.classicCarserver.car.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/cars")
public class CarController {

    @Autowired
    CarService carService;

    @GetMapping
    public List<Car> getAllCars() {
    return carService.findALl();
    }

    @GetMapping("/{id}")
    public Car getCarById(@PathVariable("id") Long id) {
        return carService.findById(id);
    }

    @GetMapping("/sold/{bool}")
    public List<Car> getSoldCars(@PathVariable("bool")boolean bool) {
        return carService.isSold(bool);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Car newCar(@RequestBody Car car) {
        return carService.create(car);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/cars")
    public String newCars(@RequestBody Car[] cars) {
        Arrays.stream(cars).forEach(this::newCar);
        return "done";
    }

    @PutMapping("/{id}")
    public Car updateCar(@RequestBody Car car, @PathVariable("id") Long id) {
        return carService.update(car, id);
    }

    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable Long id) {
        carService.delete(id);
    }


}
