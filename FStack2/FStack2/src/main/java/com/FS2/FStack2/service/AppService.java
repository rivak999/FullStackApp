package com.FS2.FStack2.service;

import com.FS2.FStack2.model.Candidat;
import com.FS2.FStack2.model.Entretien;
import com.FS2.FStack2.model.Placement;
import com.FS2.FStack2.model.Stage;

import java.util.List;

public interface AppService {

    public Candidat saveCandidat(Candidat candidat);
    public Stage saveStage(Stage stage);
    public Placement savePlacement(Placement placement);
    public Entretien saveEntretien(Entretien entretien);
    public List<Candidat> getAllCandidats();
    public List<Stage> getAllStages();
    public List<Placement> getAllPlacements();
    public List<Entretien> getAllEntretiens();

    public Stage updateStage(Stage stage);
    public Placement updatePlacement(Placement placement);
    public Entretien updateEntretien(Entretien entretien);

    public void deleteStage(int id);
    public void deletePlacement(int id);
    public void deleteEntretien(int id);

}