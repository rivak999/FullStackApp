package com.FS2.FStack2.repository;

import com.FS2.FStack2.model.Candidat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidateRepository extends JpaRepository<Candidat,Integer> {


}