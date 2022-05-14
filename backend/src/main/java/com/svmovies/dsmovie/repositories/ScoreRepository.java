package com.svmovies.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.svmovies.dsmovie.entities.Score;
import com.svmovies.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
