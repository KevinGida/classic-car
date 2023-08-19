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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private String path;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "car_id")
    private Car car;
}
