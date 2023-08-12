package com.gida.classicCarserver.user.repository;

import com.gida.classicCarserver.user.model.ERole;
import com.gida.classicCarserver.user.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
