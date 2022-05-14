package com.svmovies.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.svmovies.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
