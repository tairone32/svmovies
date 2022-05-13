package com.svmovies.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.svmovies.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
