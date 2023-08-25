package com.gida.classicCarserver.car.controller;

import com.gida.classicCarserver.car.model.Car;
import com.gida.classicCarserver.car.model.Images;
import com.gida.classicCarserver.car.service.CarService;
import com.gida.classicCarserver.car.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/public")
public class PublicController {

    @Autowired
    CarService carService;

    @Autowired
    ImageService imageService;

    @GetMapping("/cars/{id}")
    public Car getCarById(@PathVariable("id") Long id) {
        return carService.findById(id);
    }

    @GetMapping("/images/{id}")
    public ResponseEntity<List<Images>> getAllImagesByCarId(@PathVariable("id") Long carId) {
        return ResponseEntity.ok(imageService.findByCarId(carId));
    }

    @GetMapping("/sold/{bool}")
    public List<Car> isCarsSold(@PathVariable("bool")boolean bool) {
        return carService.isSold(bool);
    }
}
