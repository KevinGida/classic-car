package com.gida.classicCarserver.car.controller;
import com.gida.classicCarserver.car.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RestController
@CrossOrigin
@RequestMapping("/image")
public class ImageController {

    @Autowired
    ImageService imageService;

    @GetMapping
    public ResponseEntity getAllImages() {
        return ResponseEntity.ok(imageService.findALl());
    }

    @PostMapping("/upload/{id}")
    public void uploadImages(@RequestParam("image")MultipartFile[] files,@PathVariable("id") String id) {
        imageService.uploadImages(files, id);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadImage (@PathVariable("id") Long id) throws IOException {
        byte[] image = imageService.downloadImages(id);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/jpeg"))
                .body(image);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity downloadImageByCarId (@PathVariable("id") String id) {
        return ResponseEntity.ok(imageService.getImageByCarId(id));
    }

}
