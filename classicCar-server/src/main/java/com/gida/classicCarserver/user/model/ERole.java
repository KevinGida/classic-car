package com.gida.classicCarserver.user.model;

import jakarta.persistence.Table;

@Table(schema = "userschema", name = "Roles")
public enum ERole {
    ROLE_USER,
    ROLE_ADMIN,
    ROLE_MODERATOR
}
