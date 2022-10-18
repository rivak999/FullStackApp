package com.FS2.FStack2.service;
import com.FS2.FStack2.model.Candidat;
import com.FS2.FStack2.model.Entretien;
import com.FS2.FStack2.model.Placement;
import com.FS2.FStack2.model.Stage;
import com.FS2.FStack2.repository.CandidateRepository;
import com.FS2.FStack2.repository.EntretienRepository;
import com.FS2.FStack2.repository.PlacementRepository;
import com.FS2.FStack2.repository.StageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Scanner;

@Service
public class ServiceImpl implements AppService{
    @Autowired
    private CandidateRepository candidatRepository;
    @Autowired
    private StageRepository stageRepository;
    @Autowired
    private PlacementRepository placementRepository;
    @Autowired
    private EntretienRepository entretienRepository;

    @Override
    public Candidat saveCandidat(Candidat candidat) {
        return candidatRepository.save(candidat);
    }
    @Override
    public Stage saveStage(Stage stage) {
        return stageRepository.save(stage);

    }

    @Override
    public Placement savePlacement(Placement placement) {
        return placementRepository.save(placement);
    }

    @Override
    public Entretien saveEntretien(Entretien entretien) {
        return entretienRepository.save(entretien);
    }

    @Override
    public List<Candidat> getAllCandidats() {

        return candidatRepository.findAll();
    }
    @Override
    public List<Stage> getAllStages() {

        return stageRepository.findAll();
    }
    @Override
    public List<Placement> getAllPlacements() {

        return placementRepository.findAll();
    }
    @Override
    public List<Entretien> getAllEntretiens() {

        return entretienRepository.findAll();
    }

    @Override
    public Stage updateStage(Stage stage) {
        int id= stage.getId();
            Stage st = stageRepository.findById(id).get();
            st.setName(stage.getName());
            st.setDebut(stage.getDebut());
            st.setFin((stage.getFin()));

        return stageRepository.save(st);

    }

    @Override
    public Placement updatePlacement(Placement placement) {
        int id= placement.getId();
        Placement pl=placementRepository.findById(id).get();
        pl.setName(placement.getName());
        pl.setDelay(placement.getDelay());
        return placementRepository.save(pl);

    }

    @Override
    public Entretien updateEntretien(Entretien entretien) {
        int id= entretien.getId();
        Entretien en=entretienRepository.findById(id).get();
        en.setAppointment(entretien.getAppointment());
        en.setCandidate(entretien.getCandidate());
        en.setInterviewer(entretien.getInterviewer());
        return entretienRepository.save(en);
    }

    @Override
    public void deleteStage(int id) {
        stageRepository.deleteById(id);
    }

    @Override
    public void deletePlacement(int id) {

        placementRepository.deleteById(id);
    }
    @Override
    public void deleteEntretien(int id) {
        entretienRepository.deleteById(id);
    }


}
