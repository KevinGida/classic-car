package com.gida.classicCarserver.car.controller;
import com.gida.classicCarserver.car.model.Images;
import com.gida.classicCarserver.car.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/images")
public class ImageController {

    @Autowired
    ImageService imageService;


    @GetMapping
    public ResponseEntity<List<Images>> getAllImages() {
        return ResponseEntity.ok(imageService.findALl());
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Images>> getAllImagesByCarId(@PathVariable("id") Long carId) {
        return ResponseEntity.ok(imageService.findByCarId(carId));
    }

    @PostMapping("/upload/{id}")
    public void uploadImages(@RequestParam("image")MultipartFile[] files,@PathVariable("id") Long carId) {
        imageService.uploadImages(files, carId);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadImage (@PathVariable("id") Long id) throws IOException {
        byte[] image = imageService.downloadImages(id);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/jpeg"))
                .body(image);
    }
}
