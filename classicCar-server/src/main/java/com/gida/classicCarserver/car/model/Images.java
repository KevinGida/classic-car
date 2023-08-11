package com.gida.classicCarserver.car.model;

import jakarta.persistence.*;
import lombok.*;

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
    private String type;
    private String path;
}
