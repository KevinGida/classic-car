package com.gida.classicCarserver.car.service;

import com.gida.classicCarserver.car.Utility.ImageUtility;
import com.gida.classicCarserver.car.model.Car;
import com.gida.classicCarserver.car.model.Images;
import com.gida.classicCarserver.car.repository.ImageRepository;
import jakarta.transaction.Transactional;
import org.apache.commons.lang3.exception.ContextedRuntimeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.zip.DataFormatException;

@Service
public class ImageService {

    @Autowired
    ImageRepository repository;

    public String uploadImage(MultipartFile imageFile, String id) throws IOException {
        var image = Images.builder()
                .carId(id)
                .imageData(ImageUtility.compressImage(imageFile.getBytes()))
                .build();
        repository.save(image);
        return "file uploaded successfully : " + imageFile.getOriginalFilename();
    }

    public byte[] downloadImages(Long id) throws DataFormatException, IOException {
        Images imageData = repository.findById(id).orElse(null);
        return ImageUtility.decompressImage(Objects.requireNonNull(imageData).getImageData());
    }

    @Transactional
    public List<byte[]> findByCarId(String carId)  {
        List<Images> images =repository.findByCarId(carId);
        List<byte[]> pictures = new ArrayList<>();
        images.forEach(image -> {
                    try {
                        pictures.add(ImageUtility.decompressImage(image.getImageData()));
                    } catch (DataFormatException | IOException e) {
                        throw new RuntimeException(e);
                    }
                });
        return pictures;
    }

    public List<Images> findALl() {
        return repository.findAll();
    }


}
