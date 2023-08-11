package com.gida.classicCarserver.car.controller;
import com.gida.classicCarserver.car.model.Images;
import com.gida.classicCarserver.car.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.zip.DataFormatException;


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

    @GetMapping("/{id}")
    public ResponseEntity<List<byte[]>> getImagesByCarId(@PathVariable("id") String id) {
        List<byte[]> imageData = imageService.findByCarId(id);

        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadImage (@PathVariable("id") Long id) throws DataFormatException, IOException {
        byte[] imageData = imageService.downloadImages(id);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }

    @PostMapping("/upload/{id}")
    public ResponseEntity uploadImage(@RequestParam("image")MultipartFile file,@PathVariable("id") String id) throws IOException {
        return ResponseEntity.ok(imageService.uploadImage(file, id));
    }

//    @PostMapping("/multi-upload/{id}")
//    public ResponseEntity multiUpload(@RequestParam("files") MultipartFile[] files, @PathVariable("id") String id) {
//        List<Images> fileDownloadUrl = new ArrayList<>();
//        Arrays.stream(files)
//                .forEach( file -> {
//                    try {
//                        fileDownloadUrl.add((Images) uploadImage(file, id).getBody());
//                    } catch (IOException e) {
//                        throw new RuntimeException(e);
//                    }
//                });
//        return ResponseEntity.ok(fileDownloadUrl);
//    }



}
