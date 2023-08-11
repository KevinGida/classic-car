package com.gida.classicCarserver.car.repository;

import com.gida.classicCarserver.car.model.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ImageRepository extends JpaRepository<Images, Long> {
    List<Images> findByCarId(String carId);
}
