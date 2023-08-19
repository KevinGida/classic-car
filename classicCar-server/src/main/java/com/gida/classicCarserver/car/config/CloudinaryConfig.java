package com.gida.classicCarserver.car.config;
import com.cloudinary.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class CloudinaryConfig {
    private final String CLOUD_NAME = "dnfkogzbk";
    private final String API_KEY = "751612924869282";
    private final String API_SECRET = "PkGCuTlTVz6MAumPqt9JqmRdgTU";
    @Bean
    public Cloudinary cloudinary(){
        Map<String, String> config = new HashMap<>();
        config.put("cloud_name",CLOUD_NAME);
        config.put("api_key",API_KEY);
        config.put("api_secret",API_SECRET);
        return new Cloudinary(config);
    }
}
