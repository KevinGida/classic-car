package com.gida.classicCarserver.user.payload.request;

import jakarta.validation.constraints.*;
import java.util.Set;

import lombok.*;

@Getter
@Setter
public class SignupRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    @NotBlank
    @Size(min = 8, max = 40)
    private String password;
    private Set<String> role;
}
