package com.gida.classicCarserver.user.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(schema = "userschema", name = "DetailRoles")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;
}
