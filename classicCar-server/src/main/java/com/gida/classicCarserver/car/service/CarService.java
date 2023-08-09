package com.gida.classicCarserver.car.service;

import com.gida.classicCarserver.car.model.Car;
import com.gida.classicCarserver.car.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CarService {

    @Autowired
    CarRepository repository;

    //GET
    public List<Car> findALl() {
        return repository.findAll();
    }

    //GET
    public Car findById(UUID id) {
        return repository.findById(id).get();
    }

    //POST
    public Car create(Car car) {
         return repository.save(car);
    }

    //PUT
    public Car update(Car car, UUID id) {
        Car carToUpdate = repository.findById(id).get();
        carToUpdate.setManufacturer(car.getManufacturer());
        carToUpdate.setModel(car.getModel());
        carToUpdate.setYear(car.getYear());
        carToUpdate.setBodyStyle(car.getBodyStyle());
        carToUpdate.setKm(car.getKm());
        carToUpdate.setTransmission(car.getTransmission());
        carToUpdate.setOrigin(car.getOrigin());
        carToUpdate.setHorsepower(car.getHorsepower());
        carToUpdate.setPrice(car.getPrice());
        carToUpdate.setDetail(car.getDetail());
        carToUpdate.setSold(car.isSold());
        return repository.save(carToUpdate);
    }

    //DELETE
    public void delete(UUID id) {
        repository.deleteById(id);
    }

}
