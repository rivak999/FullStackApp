package com.FS2.FStack2.repository;

import com.FS2.FStack2.model.Candidat;
import com.FS2.FStack2.model.Entretien;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntretienRepository extends JpaRepository<Entretien,Integer> {
}
