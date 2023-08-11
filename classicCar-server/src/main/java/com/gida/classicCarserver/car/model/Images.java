package com.gida.classicCarserver.car.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

@Entity
@Table(schema = "classiccarschema", name = "CarPicture")
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class Images {

    @Id
     @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String carId;
    @Lob
    private byte[] imageData;
}
