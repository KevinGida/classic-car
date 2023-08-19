package com.gida.classicCarserver.car.service;

import com.cloudinary.Cloudinary;
import com.gida.classicCarserver.car.model.Images;
import com.gida.classicCarserver.car.repository.CarRepository;
import com.gida.classicCarserver.car.repository.ImageRepository;
import org.apache.tomcat.util.http.fileupload.FileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.*;
import java.util.List;

@Service
public class ImageService {

    @Autowired
    CarRepository carRepository;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    Cloudinary cloudinary;


    public void upload(MultipartFile imageFile, Long carId) throws IOException {
        String imageURL = cloudinary.uploader()
                .upload(imageFile.getBytes(),
                        Map.of("public_id", UUID.randomUUID().toString()))
                .get("url")
                .toString();
        Images image = new Images();
        image.setType(imageFile.getContentType());
        image.setPath(imageURL);
        image.setCar(carRepository.findById(carId).get());
        imageRepository.save(image);
    }

    public void uploadImages(MultipartFile[] files, Long carId){
        Arrays.stream(files)
                .forEach(file -> {
                    try {
                        upload(file, carId);
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                });
    }

    public byte[] downloadImages(Long id) throws IOException {
        Optional<Images> image = imageRepository.findById(id);
        String fullPath = image.get().getPath();
        return Files.readAllBytes(new File(fullPath).toPath());
    }

    public List<Images> findALl() {
        return imageRepository.findAll();
    }

    public List<Images> findByCarId(Long carId) {
        return imageRepository.findByCarId(carId);
    }


}
