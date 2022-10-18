package com.FS2.FStack2.controller;

import com.FS2.FStack2.model.Candidat;
import com.FS2.FStack2.model.Entretien;
import com.FS2.FStack2.model.Placement;
import com.FS2.FStack2.model.Stage;
import com.FS2.FStack2.repository.EntretienRepository;
import com.FS2.FStack2.repository.StageRepository;
import com.FS2.FStack2.service.AppService;
import org.hibernate.internal.log.DeprecationLogger_$logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/App")
public class Controller {
    @Autowired
    private AppService service;
    @Autowired
    private StageRepository stageRepository;
    @Autowired
    private EntretienRepository entretienRepository;

    @PostMapping("/SaveCandidat")
    public String add(@RequestBody Candidat candidat){
        service.saveCandidat(candidat);

        return"new candidat is added";

    }
    @PostMapping("/SaveStage")
    public String add(@RequestBody Stage stage){
        service.saveStage(stage);

        return"new stage is added";

    }

    @PostMapping("/SavePlacement")
    public String addPlacement(@RequestBody Placement placement){
        service.savePlacement(placement);

        return"new placement is added";

    }

    @PostMapping("/SaveEntretien")
    public String addEntretien(@RequestBody Entretien entretien){

           service.saveEntretien(entretien);

        return"new entretien is added";

    }
    @Autowired
    DataSource ds;
    @DeleteMapping("/DeleteCandidat")
    public String showUser(@RequestBody Candidat candidat )throws SQLException {
        Connection con=ds.getConnection();
        String query="Delete entretien,candidat FROM entretien JOIN candidat ON candidat.username=entretien.candidate WHERE entretien.candidate=candidat.username AND candidat.id='"+candidat.getId()+"'";
        PreparedStatement preparedStm = con.prepareStatement(query);
        preparedStm.execute(query);
        String query1="Delete FROM candidat WHERE candidat.id='"+candidat.getId()+"'";
        PreparedStatement prepaedStm1 = con.prepareStatement(query1);
        preparedStm.execute(query1);

       return"nknmkm";
    }
    @DeleteMapping("/DeleteStage")
    public String DeleteStage(@RequestBody Stage stage )throws SQLException {
        Connection con=ds.getConnection();
        String query="Delete stage,candidat FROM stage JOIN candidat ON candidat.name_opt=stage.name WHERE candidat.name_opt=stage.name AND candidat.opt='Stage' AND stage.id='"+stage.getId()+"'";
        PreparedStatement preparedStm = con.prepareStatement(query);
        preparedStm.execute(query);
        String query1="Delete FROM stage WHERE stage.id='"+stage.getId()+"'";
        PreparedStatement prepaedStm1 = con.prepareStatement(query1);
        preparedStm.execute(query1);

        return"nknmkm";
    }
    @DeleteMapping("/DeletePlacement")
    public String DeletePlacement(@RequestBody Placement placement )throws SQLException {
        Connection con=ds.getConnection();
        String query="Delete placement,candidat FROM placement JOIN candidat ON candidat.name_opt=placement.name WHERE candidat.name_opt=placement.name AND candidat.opt='Placement' AND placement.id='"+placement.getId()+"'";
        PreparedStatement preparedStm = con.prepareStatement(query);
        preparedStm.execute(query);
        String query1="Delete FROM placement WHERE placement.id='"+placement.getId()+"'";
        PreparedStatement prepaedStm1 = con.prepareStatement(query1);
        preparedStm.execute(query1);

        return"nknmkm";
    }
    @PutMapping("/updateCandidat")
    public String showUser2(@RequestBody Candidat candidat )throws SQLException {
        Connection con=ds.getConnection();
        String query="UPDATE entretien JOIN candidat ON candidat.username=entretien.candidate SET candidat.fname='"+candidat.getFName()+"',candidat.lname='"+candidat.getLName()+"',candidat.name_opt='"+candidat.getNameOpt()+"',candidat.opt='"+candidat.getOpt()+"',candidat.username='"+candidat.getUsername()+"',entretien.candidate='"+candidat.getUsername()+"' WHERE candidat.username=entretien.candidate AND candidat.Id='"+ candidat.getId()+"'";
        PreparedStatement preparedStm = con.prepareStatement(query);
        preparedStm.execute(query);
        String query1="UPDATE candidat SET candidat.fname='"+candidat.getFName()+"',candidat.lname='"+candidat.getFName()+"',candidat.name_opt='"+candidat.getNameOpt()+"',candidat.opt='"+candidat.getOpt()+"',candidat.username='"+candidat.getUsername()+"'WHERE candidat.id='"+candidat.getId()+"'";
        PreparedStatement preparedStm1 = con.prepareStatement(query1);
        preparedStm.execute(query1);
        return"nknmkm";
    }
    @PutMapping("/UpdateEntretien")
    public String UpdateEntretien(@RequestBody Entretien entretien )throws SQLException {
        Connection con=ds.getConnection();
        String query1="UPDATE entretien SET entretien.appointment='"+entretien.getAppointment()+"',entretien.interviewer='"+entretien.getInterviewer()+"',entretien.candidate='"+entretien.getCandidate()+"' WHERE entretien.id='"+entretien.getId()+"'";
        PreparedStatement preparedStm = con.prepareStatement(query1);
        preparedStm.execute(query1);
        return"nknmkm";
    }
    @PutMapping("/updatestg")
    public String updateStg(@RequestBody Stage stage )throws SQLException {
        Connection con=ds.getConnection();
        String query="UPDATE stage SET stage.debut='"+stage.getDebut()+"',stage.fin='"+stage.getFin()+"',stage.name='"+stage.getName()+"' WHERE stage.id='"+stage.getId()+"'";
        PreparedStatement preparedStm = con.prepareStatement(query);
        preparedStm.execute(query);
        String query1="UPDATE stage JOIN candidat ON candidat.name_opt=stage.name SET stage.name='"+stage.getName()+"',stage.debut='"+stage.getDebut()+"',stage.fin='"+stage.getFin()+"',candidat.name_opt='"+stage.getName()+"' WHERE candidat.opt='Stage' AND stage.name=candidat.name_opt AND stage.id='"+stage.getId()+"'";
        PreparedStatement preparedStm1 = con.prepareStatement(query1);
        preparedStm1.execute(query1);
        return"nknmkm";
    }
    @PutMapping("/UpdatePlacement")
    public String UpdatePlacement(@RequestBody Placement placement )throws SQLException {
        Connection con=ds.getConnection();
        String query="UPDATE placement SET placement.name='"+placement.getName()+"',placement.delay='"+placement.getDelay()+"' WHERE placement.id='"+placement.getId()+"'";
        PreparedStatement preparedStm = con.prepareStatement(query);
        preparedStm.execute(query);
        String query1="UPDATE placement JOIN candidat ON candidat.name_opt=placement.name SET placement.name='"+placement.getName()+"',placement.delay='"+placement.getDelay()+"',candidat.name_opt='"+placement.getName()+"' WHERE candidat.opt='Placement' AND placement.name=candidat.name_opt AND placement.id='"+placement.getId()+"'";
        PreparedStatement preparedStm1 = con.prepareStatement(query1);
        preparedStm1.execute(query1);
        return"nknmkm";
    }
    @PostMapping("/addCandidat")
    public String addUser(@RequestBody Candidat candidat )throws SQLException {
        Connection con=ds.getConnection();


             String query = "INSERT INTO candidat (fname,lname,name_opt,opt, username) VALUES('" + candidat.getFName() + "','" + candidat.getLName() + "','" + candidat.getNameOpt() + "','" + candidat.getOpt() + "','" + candidat.getUsername() + "')";
             PreparedStatement preparedStm = con.prepareStatement(query);
             preparedStm.execute(query);

        return"nknmkm";
    }

    @GetMapping("/getAllCandidats")
    public List<Candidat> getAllCandidats() {
        return service.getAllCandidats();
    }

    @GetMapping("/getAllStages")
    public List<Stage> getAllStages() {

        return service.getAllStages();

    }

    @GetMapping("/getAllPlacements")
    public List<Placement> getAllPlacements() {

        return service.getAllPlacements();

    }

    @GetMapping("/getAllEntretiens")
    public List<Entretien> getAllEntretiens() {

        return service.getAllEntretiens();

    }

    @PutMapping("/updateStage")
    public Stage updateStage(@RequestBody Stage stage){
        return service.updateStage(stage);
    }
    @PutMapping("/updatePlacement")
    public Placement updatePlacement(@RequestBody Placement placement){
        return service.updatePlacement(placement);
    }
    @PutMapping("/updateEntretien")
    public Entretien updateEntretien(@RequestBody Entretien entretien){
        return service.updateEntretien(entretien);
    }
    @DeleteMapping("/deleteStage")
    public void deleteStage( @RequestBody Stage stage){

        service.deleteStage(stage.getId());
    }
    @DeleteMapping("/deletePlacement")
    public void deletePlacement(@RequestBody Placement placement){

        service.deletePlacement(placement.getId());
    }
    @DeleteMapping("/deleteEntretien")
    public void deleteEntretien( @RequestBody Entretien entretien){

        service.deleteEntretien(entretien.getId());
    }
}