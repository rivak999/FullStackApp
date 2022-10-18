package com.FS2.FStack2.repository;

import com.FS2.FStack2.model.Candidat;
import com.FS2.FStack2.model.Placement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlacementRepository extends JpaRepository<Placement,Integer> {
}
