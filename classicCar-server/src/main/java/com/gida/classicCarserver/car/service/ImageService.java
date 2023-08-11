package com.gida.classicCarserver.car.service;

import com.gida.classicCarserver.car.model.Images;
import com.gida.classicCarserver.car.repository.ImageRepository;
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
    ImageRepository repository;

    public void upload(MultipartFile imageFile, String id) throws IOException {
        String PATH = "C:\\Users\\Kevin Gida\\salt\\ClassicCar\\classic_car\\images\\";
        String fullPath = PATH + imageFile.getOriginalFilename();
        Images image = new Images();
        image.setCarId(id);
        image.setType(imageFile.getContentType());
        image.setPath(fullPath);

        imageFile.transferTo(new File(fullPath));
        repository.save(image);
    }

    public void uploadImages(MultipartFile[] files, String id){
        Arrays.stream(files)
                .forEach(file -> {
                    try {
                        upload(file, id);
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                });
    }

    public byte[] downloadImages(Long id) throws IOException {
        Optional<Images> image = repository.findById(id);
        String fullPath = image.get().getPath();
        return Files.readAllBytes(new File(fullPath).toPath());
    }

    public List<Object> getImageByCarId(String carId) {
        List<Images> images = repository.findByCarId(carId);
        List<Object> path = new ArrayList<>();
        images.forEach(image -> path.add(image.getPath()));
        return path;
    }
    public List<Images> findALl() {
        return repository.findAll();
    }


}
