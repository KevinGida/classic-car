package com.gida.classicCarserver.car.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(schema = "classiccarschema", name = "CarDetail")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class Car {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;
     private String manufacturer;
     private String model;
     private Long year;
     private String bodyStyle;
     private int km;
     private String transmission;
     private String origin;
     private int horsepower;
     private int price;
     @Column(columnDefinition = "text")
     private String detail;
     private boolean sold = false;

}
